import React from "react";
import HotelCard from "./HotelCard";
import { recommendedHotels, nearbyHotels } from "./data";
import { Typography } from "@mui/material";

const HotelsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-200 px-8 py-10">
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-3xl shadow-md">

                {/* Recommendation */}
                <div className="flex justify-between items-center mb-3">
                    <Typography variant="h6" className="font-semibold">
                        Recommendation
                    </Typography>

                    <button className="text-blue-600 text-sm hover:underline">View all</button>
                </div>

                <div className="flex gap-6 overflow-x-auto pb-3">
                    {recommendedHotels.map((h) => (
                        <HotelCard key={h.id} hotel={h} type="large" />
                    ))}
                </div>

                {/* Nearby */}
                <div className="flex justify-between items-center mt-10 mb-3">
                    <Typography variant="h6" className="font-semibold">
                        Nearby Hotel
                    </Typography>

                    <button className="text-blue-600 text-sm hover:underline">View all</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {nearbyHotels.map((h) => (
                        <HotelCard key={h.id} hotel={h} type="small" />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default HotelsPage;
