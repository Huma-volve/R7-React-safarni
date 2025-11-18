import React from "react";
import type { Hotel } from "./data";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import hotel1 from "/assets/hotel1.png"
interface Props {
    hotel: Hotel;
    type?: "large" | "small";
}

const HotelCard: React.FC<Props> = ({ hotel, type = "large" }) => {
    return (
        <div
            className={`bg-white shadow-md rounded-2xl p-3 transition hover:shadow-lg cursor-pointer ${type === "large" ? "w-[250px]" : "w-full flex gap-4"
                }`}
        >

            <img
                src={hotel1}
                alt={hotel.name}
                className={`${type === "large" ? "h-40 w-full" : "h-28 w-28"} 
                    object-cover rounded-xl`}
            />

            <div className={`${type === "large" ? "mt-3" : "flex flex-col justify-between py-1"}`}>

                <span className="text-[10px] font-medium bg-blue-100 text-blue-600 px-2 py-[2px] rounded-full">
                    {hotel.discount}
                </span>


                <p className="mt-1 font-semibold text-gray-900">{hotel.name}</p>


                <div className="flex items-center text-gray-500 text-sm gap-1">
                    <LocationOnIcon sx={{ fontSize: 16 }} />
                    {hotel.city}, {hotel.country}
                </div>


                <div className="flex items-center gap-1 mt-1">
                    <StarIcon sx={{ fontSize: 18, color: "#FBBF24" }} />
                    <span className="text-sm font-medium">{hotel.rating}</span>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;
