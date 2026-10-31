import DestinationCard from "@/components/DestinationCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const DestinationsPage = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    const destinations = await res.json();

    // console.log(destinations);

    return (
        <div className="container mx-auto p-10">
            <h1 className="font-bold text-2xl ">All Destinations</h1>
            <div className="grid grid-cols-3 gap-5">
                {destinations.map((destination) => (
                    <DestinationCard key={destination._id} destination={destination}></DestinationCard>
                ))}
            </div>
        </div>
    );
};

export default DestinationsPage;
