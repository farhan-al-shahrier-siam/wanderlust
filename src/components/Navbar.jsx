"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/Wanderlast.png";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
    const { data: session } = authClient.useSession();

    // console.log(session);

    const handleLogout = async()=>{
        await authClient.signOut();
    }

    return (
        <nav className="flex justify-between items-center bg-white p-5 shadow">
            <ul className="flex items-center gap-3">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/destinations"}>Destinations</Link>
                </li>
                <li>
                    <Link href={"/my-bookings"}>My Bookings</Link>
                </li>
                <li>
                    <Link href={"/add-destination"}>Add destination</Link>
                </li>
            </ul>
            <div>
                <Image src={logo} height={160} width={160} alt="Logo"></Image>
            </div>

            <ul className="flex gap-3 items-center">
                <li>
                    <Link href={"/profile"}>Profile</Link>
                </li>
                {session?.user ? (
                    <>
                        <li>Welcome. {session.user.name}</li>
                        <li>
                            <Avatar>
                                <Avatar.Image alt="John Doe" src={session.user?.image} />
                                <Avatar.Fallback>{session.user?.name[0]}</Avatar.Fallback>
                            </Avatar>
                        </li>
                        <li>
                            <Button onClick={handleLogout} variant="outline"> Logout</Button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link href={"/login"}>Login</Link>
                        </li>
                        <li>
                            <Link href={"/signup"}>Sign-up</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
