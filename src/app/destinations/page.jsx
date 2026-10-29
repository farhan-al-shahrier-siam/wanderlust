import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationsPage = async () => {

    const res = await fetch("http://localhost:8000/destinations");
    const destinations = await res.json()

    console.log(destinations);

    return (
        <div className='container mx-auto p-10' >
            <h1 className='font-bold text-2xl '>All Destinations</h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    destinations.map(destination=><DestinationCard key={destination._id} destination={destination}></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default DestinationsPage;