"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import React from "react";
import { FaCheck } from "react-icons/fa";
const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        // console.log(user);
        const { email, password } = user;

        const { data, error } = await authClient.signIn.email({
            email: email,
            password: password,
            callbackURL: "/",
        });
        if (data) {
            alert("Login succcessful...");
            redirect("/");
        } else if (error) {
            alert(error.message);
        }
    };

    return (
        <div className="container mx-auto flex justify-center p-20 ">
            <Form className="flex w-96 flex-col gap-4 border shadow p-5 rounded-xl" onSubmit={onSubmit}>
                <h2 className="text-center font-bold text-2xl">Log-in your Account</h2>
                <p className="text-center text-sm text-slate-600 pb-3">Start your adventure with Wanderlust.</p>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <FieldError />
                </TextField>
                <div className="flex gap-2 justify-center">
                    <Button className="w-full" type="submit">
                        Log-in
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default LoginPage;
