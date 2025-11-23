import React from "react";
import HotelCard from "./HotelCard";
import { recommendedHotels, nearbyHotels } from "./data";
import { Typography } from "@mui/material";
import Back from "../../components/back";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import type { ChangeEvent } from "react";
import NearCard from "./NearCard";

interface SearchInputProps {
    value?: string;
    onChange?: (value: string) => void;
}



const HotelsPage: React.FC = ({ value, onChange }: SearchInputProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    const navigate = useNavigate();


    return (
        <div className="min-h-screen px-8 pb-10 sm:p-0">
            <div className="max-w-6xl mx-auto  ">
                <div className="flex gap-3 align-center justify-center items-center">
                    <div className="relative -top-2.5">
                        <Back />
                    </div>
                    <div className="w-full">
                        <div className="border-[0.5px] mt-8
                                    border-[#9CA3AF] bg-white rounded-2xl
                                    flex items-center px-5 py-2">
                            <SearchIcon sx={{ color: "#9CA3AF", fontSize: 28 }} />

                            <input
                                type="text"
                                placeholder="Search"
                                className="ml-3 w-full outline-none text-gray-700 placeholder-[#9CA3AF] text-lg"

                                value={value}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>


                {/* Recommendation */}
                <div className="flex justify-between items-center mb-3">
                    <Typography variant="h6" className="py-4 font-bold text-[--color-dark-blue]">
                        Recommendation
                    </Typography>
                    <button className="text-blue-600 text-sm hover:underline">View all</button>
                </div>

                <div className="flex gap-6 overflow-x-auto pb-3">
                    {recommendedHotels.map((h) => (
                        <HotelCard onClick={() => navigate(`/hotels/pickUp/${h.id}`)} key={h.id} hotel={h} type="large"  />
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
                        <NearCard  onClick={() => navigate(`/hotels/pickUp/${h.id}`)} key={h.id} hotel={h} type="small" />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default HotelsPage;
