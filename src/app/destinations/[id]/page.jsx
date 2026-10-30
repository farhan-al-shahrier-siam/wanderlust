import BookingCard from "@/components/BookingCard";
import DeleteDestination from "@/components/DeleteDestination";
import EditModal from "@/components/EditModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { FaArrowAltCircleRight, FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:8000/destinations/${id}`);
    const destination = await res.json();

    const { _id, destinationName, country, category, price, duration, imageUrl, description, departureDate } = destination;

    return (
        <div className="mx-auto max-w-7xl p-5 border shadow m-4">
            <div className="flex justify-end m-3 gap-1">
                <EditModal destination={destination}></EditModal>
                <DeleteDestination destination={destination}></DeleteDestination>
            </div>
            <Image alt={destinationName} src={imageUrl} height={500} width={800} />
            <div className="p-3">
                <div className="flex items-center gap-1">
                    <LuMapPin></LuMapPin> <span>{country}</span>
                </div>
                <div className="flex justify-between items-center px-4">
                    <div>
                        <h2 className="font-bold text-xl ">{destinationName}</h2>
                        <div className="flex items-center gap-1">
                            <FaRegCalendar></FaRegCalendar> <span>{duration}days</span>
                        </div>
                    </div>
                    <div>
                       <BookingCard destination={destination} ></BookingCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;
