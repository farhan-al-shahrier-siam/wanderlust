"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import React, { useState } from "react";

const BookingCard = ({ destination }) => {

    const { data: session } = authClient.useSession();
    const user = session?.user
    // console.log(user);

    const { _id, destinationName, country, category, price, duration, imageUrl, description } = destination;

    const [departureDate, setDepartureDate] = useState(null);


    const handleBooking = async ()=>{
        const bookingData = {
            userId: user.id,
            userImage: user.image,
            userName: user.name,
            destinationId: _id,
            destinationName,
            price,
            imageUrl,
            country,
            departureDate: new Date(departureDate)

        }

        const res = await fetch("http://localhost:8000/bookings", {
            method: "POST",
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(bookingData),
        })
        const data = res.json();

    }


    return (
        <Card>
            <p className="text-sm text-muted">starting from</p>
            <h2 className="text-3xl font-bold text-cyan-600">${price}</h2>
            <p className="text-sm text-muted">per person</p>

            <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
                <Label>Departure Date</Label>
                <DateField.Group>
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                </DateField.Group>
            </DateField>
            <Button onClick={handleBooking} className={"w-full"}>Book Now</Button>
        </Card>
    );
};

export default BookingCard;
