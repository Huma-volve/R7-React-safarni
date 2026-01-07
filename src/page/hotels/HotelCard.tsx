import React from "react";
import type { Hotel } from "./data";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import hotel1 from "/assets/hotel1.png"
interface Props {
    hotel: Hotel;
    type?: "large" | "small";
    onClick?: () => void;
}



const HotelCard: React.FC<Props> = ({ hotel,onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`bg-white shadow-lg rounded-3xl p-4 cursor-pointer transition hover:shadow-xl w-[260px]`}
        >
            {/* IMAGE */}
            <img
                src={hotel.image}
                alt={hotel.name}
                className="h-40 w-full object-cover rounded-2xl"
            />

            {/* Discount + Rating */}
            <div className="flex items-center justify-between mt-3">
                <span className="text-[12px] font-medium bg-blue-100 text-blue-600 px-3 py-[4px] rounded-full">
                    {hotel.discount}
                </span>

                <div className="flex items-center gap-1">
                    <StarIcon sx={{ fontSize: 20, color: "#FBBF24" }} />
                    <span className="text-sm font-semibold">{hotel.rating}</span>
                </div>
            </div>

            {/* Hotel Name */}
            <p className="mt-2 text-[18px] font-semibold text-gray-900">
                {hotel.name}
            </p>

            {/* Location */}
            <div className="flex items-center text-gray-500 text-sm gap-1 mt-1">
                <LocationOnIcon sx={{ fontSize: 18 }} />
                <span>{hotel.city}, {hotel.country}</span>
            </div>
        </div>

    );
};


export default HotelCard;
