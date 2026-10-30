"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        // console.log(user);
        const { name, email, image, password } = user;

        const { data, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: image,
            callbackURL: "/",
        });
        if (data) {
            alert("Succcessfully created account...");
            redirect("/");
        } else if (error) {
            alert(error.message);
        }
    };

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="container mx-auto flex justify-center p-20 ">
            <div className="flex w-96 flex-col gap-4 border shadow p-5 rounded-xl">
                <Form onSubmit={onSubmit}>
                    <h2 className="text-center font-bold text-2xl">Create Account</h2>
                    <p className="text-center text-sm text-slate-600 pb-3">Start your adventure with Wanderlust.</p>
                    <TextField isRequired name="name" type="text">
                        <Label>Name</Label>
                        <Input placeholder="Enter your full name" />
                        <FieldError />
                    </TextField>
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
                    <TextField name="image" type="url">
                        <Label>Photo URL</Label>
                        <Input placeholder="Enter a valid image URL" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2 justify-center">
                        <Button className="w-full" type="submit">
                            <FaCheck></FaCheck>
                            Create account
                        </Button>
                    </div>
                </Form>
                <p className="text-center text-sm text-slate-500">or sign up with</p>
                <Button onClick={handleGoogleSignin} variant="outline" className="w-full">
                    <FcGoogle></FcGoogle>
                    Sign-in with Google
                </Button>
            </div>
        </div>
    );
};

export default SignUpPage;
