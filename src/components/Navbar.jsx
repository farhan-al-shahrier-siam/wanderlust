import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/Wanderlast.png"

const Navbar = () => {
    return (
        <nav className="flex justify-between bg-white p-5 shadow">
            <ul className="flex gap-3">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/destinations"}>Destinations</Link>
                </li>
                <li>
                    <Link href={"/my-bookings"}>My Bookings</Link>
                </li>
            </ul>
            <div>
                <Image
                    src={logo}
                    height={160}
                    width={160}
                    alt="Logo"
                ></Image>
            </div>

            <ul className="flex gap-3">
                <li>
                    <Link href={"/profile"}>Profile</Link>
                </li>
                <li>
                    <Link href={"/login"}>Login</Link>
                </li>
                <li>
                    <Link href={"/signup"}>Sign-up</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
