import { useState } from "react";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import HotelIcon from "@mui/icons-material/Hotel";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Back from "../../components/back";

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
            <Back />
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
            {active === "flight" && <div className="
            w-full mt-5 mx-auto rounded-3xl p-[2px]
            bg-gradient-to-r from-[#3B4BFF] to-[#FF2E63]
        ">
                <div className="bg-white text-black rounded-3xl p-8 flex justify-between items-center">

                    {/* LEFT SIDE */}
                    <div className="space-y-3">
                        {/* Airline */}
                        <div className="flex items-center gap-2">
                            <img
                                src="/aircanada.png"
                                alt="Air Canada"
                                className="h-6 w-6"
                            />
                            <p className="text-lg font-semibold">Air Canada</p>
                        </div>

                        {/* Time */}
                        <p className="text-4xl font-bold">07h05</p>

                        {/* Airport Code */}
                        <p className="text-gray-400 text-sm">YUL</p>

                        {/* Gate */}
                        <div>
                            <p className="text-xl font-semibold">8</p>
                            <p className="text-gray-500 text-sm">Gate</p>
                        </div>
                    </div>

                    {/* MIDDLE */}
                    <div className="text-center space-y-3">
                        <p className="text-gray-400 text-sm">13h00</p>

                        {/* Airplane Icon */}
                        <div className="text-gray-400 text-2xl">✈</div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="text-right space-y-3">
                        {/* Date */}
                        <p className="text-xl font-medium">December 16th, 2022</p>

                        {/* Time */}
                        <p className="text-4xl font-bold">20h05</p>

                        {/* Airport Code */}
                        <p className="text-gray-400 text-sm">NRT</p>

                        {/* Flight Number */}
                        <div>
                            <p className="text-xl font-semibold">AC006</p>
                            <p className="text-gray-500 text-sm">Flight</p>
                        </div>
                    </div>

                </div>
            </div>}

            {active === "cars" && <div className="
            w-full mt-5 mx-auto rounded-3xl p-[2px]
            bg-gradient-to-r text-black from-[#3B4BFF] to-[#FF2E63]
        ">
                <div className="bg-white rounded-3xl p-8">

                    {/* TITLE */}
                    <h2 className="text-2xl font-semibold text-black mb-6">
                        S 500 Sedan
                    </h2>

                    {/* ROW DETAILS */}
                    <div className="
                    flex justify-between items-center
                    text-black text-lg
                ">
                        <span>Automatic</span>
                        <span>| 5 seats</span>
                        <span>| Diesel</span>
                    </div>
                </div>
            </div>}
            {active === "tours" && <div className="
            w-full rounded-[35px] mt-5 p-[2px]
            bg-gradient-to-r from-[#2F4FDB] to-[#FF2E63]
        ">
                <div className="flex items-center justify-between bg-white rounded-[35px] p-6">

                    {/* LEFT — Image + Text */}
                    <div className="flex items-center gap-6">

                        {/* Image */}
                        <img
                            src={""}
                            className="w-32 h-32 rounded-[20px] object-cover"
                        />

                        {/* Text */}
                        <div>
                            <p className="text-gray-500 text-lg font-medium">
                                Full Day Tour
                            </p>

                            <h2 className="text-3xl font-bold text-[#111928] mt-1">
                                Luxor
                            </h2>

                            <p className="text-[22px] text-gray-600 mt-3">
                                From{" "}
                                <span className="text-blue-600 font-bold">
                                    150$
                                </span>{" "}
                                Per Person
                            </p>
                        </div>
                    </div>

                    {/* RIGHT — Rating */}
                    <div className="flex items-center text-[22px] text-gray-700 gap-2">
                        <StarIcon sx={{ color: "#FBBF24", fontSize: 32 }} />
                        <span className="font-semibold">4.3</span>
                    </div>

                </div>
            </div>}
            {active === "hotel" && <div className="
            w-full mt-5 rounded-[35px] p-[2px]
            bg-gradient-to-r from-[#2F4FDB] to-[#FF2E63]
        ">
                <div className="flex items-center justify-between bg-white rounded-[35px] p-5">

                    {/* LEFT SIDE */}
                    <div className="flex items-center gap-6">

                        {/* IMAGE */}
                        <img
                            src={"image"}
                            className="w-32 h-32 rounded-[20px] object-cover"
                        />

                        {/* TEXT SECTION */}
                        <div className="flex flex-col">

                            {/* DISCOUNT BADGE */}
                            <span className="
                            bg-blue-100 text-[#2F4FDB]
                            text-sm font-medium px-4 py-1 rounded-full w-fit
                        ">
                                15%Off
                            </span>

                            {/* TITLE */}
                            <h2 className="text-2xl font-semibold text-[#111928] mt-2">
                                Golden Valley
                            </h2>

                            {/* LOCATION */}
                            <p className="flex items-center gap-2 text-gray-500 mt-1 text-lg">
                                <LocationOnIcon sx={{ fontSize: 22, color: "#9CA3AF" }} />
                                New York,USA
                            </p>

                        </div>
                    </div>

                    {/* RATING */}
                    <div className="flex items-center gap-2 text-2xl text-gray-700 font-medium">
                        <StarIcon sx={{ color: "#FBBF24", fontSize: 32 }} />
                        4.3
                    </div>

                </div>
            </div>}
        </div>
    );
}
