import { useState } from "react";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import HotelIcon from "@mui/icons-material/Hotel";

export default function BookingTabs() {
    const [active, setActive] = useState("flight");

    const tabs = [
        { id: "flight", label: "Flight", icon: <FlightIcon /> },
        { id: "cars", label: "Cars", icon: <DirectionsCarIcon /> },
        { id: "tours", label: "Tours", icon: <TravelExploreIcon /> },
        { id: "hotel", label: "Hotel", icon: <HotelIcon /> },
    ];

    return (
        <div className="w-full mt-10">
            <h1 className="text-center text-3xl font-semibold text-[#111928] mb-8">
                My Booking
            </h1>

            <div className="flex items-center justify-center gap-5">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActive(tab.id)}
                        className={`
              w-[280px] h-[68px] rounded-[60px] flex items-center justify-center gap-3
              text-lg font-medium transition cursor-pointer
              ${active === tab.id
                                ? "bg-[#e9f1ff] text-blue-600 border border-blue-100"
                                : "border border-gray-300 text-[#111928]"
                            }
            `}
                    >
                        <div
                            className={`${active === tab.id ? "text-blue-600" : "text-[#111928]"
                                }`}
                        >
                            {tab.icon}
                        </div>
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
