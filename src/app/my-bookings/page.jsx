import CancelModal from "@/components/CancelModal";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import { FaTrash } from "react-icons/fa";

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(), // you need to pass the headers object.
    });

    const user = session?.user;

    const res = await fetch(`http://localhost:8000/bookings/${user.id}`);
    const bookings = await res.json();

    // console.log(bookings);

    return (
        <div className="max-w-7xl mx-auto p-10">
            <h2 className="text-3xl font-bold text-center p-5">My Booking</h2>

            <div className="p-5 grid gap-4">
                {bookings.map((booking) => (
                    <div className="flex items-center min-w-4xl gap-5 border rounded-xl shadow p-5" key={booking._id}>
                        <Image alt={booking.destinationName} src={booking.imageUrl} height={300} width={300}></Image>
                        <div className="flex justify-end">
                            <div>
                                <h2 className="font-bold text-3xl ">{booking.destinationName}</h2>
                                <p>{new Date(booking.departureDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                                <p>Booking ID: {booking._id}</p>

                                <p className="text-3xl font-bold text-cyan-700">${booking.price}</p>
                            </div>
                            <div>
                                <CancelModal bookingId={booking._id} ></CancelModal>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBookingPage;
