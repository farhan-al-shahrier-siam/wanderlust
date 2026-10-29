import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowAltCircleRight, FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const DestinationCard = ({ destination }) => {
    const { _id, destinationName, country, category, price, duration, imageUrl, description, departureDate } = destination;
    return (
        <div className="border p-3">
            <Image alt={destinationName} src={imageUrl} height={400} width={400}></Image>
            <div>
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
                        <h3 className="text-2xl font-bold">${price}</h3>
                    </div>
                </div>
                <Link href={`/destinations/${_id}`} className="p-2 flex justify-end mx-auto">
                    <button className="btn hover:bg-cyan-800 text-white bg-cyan-600 rounded-2xl p-2 flex gap-1 items-center cursor-pointer">Book Now <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
                </Link>
            </div>
        </div>
    );
};

export default DestinationCard;
