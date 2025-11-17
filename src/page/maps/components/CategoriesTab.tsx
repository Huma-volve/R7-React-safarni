import { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MuseumIcon from "@mui/icons-material/Museum";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined"
export default function CategoriesTabs() {
    const [active, setActive] = useState("home");

    const tabs = [
        { id: "home", label: "Set home", icon: <HomeOutlinedIcon /> },
        { id: "restaurants", label: "Restaurants", icon: <RestaurantIcon /> },
        { id: "tourist", label: "Tourist Places", icon: <MuseumIcon /> },
        { id: "hotel", label: "Hotel", icon: <HotelOutlinedIcon /> },
    ];

    return (
        <div className="w-full flex items-center justify-between flex-wrap max-sm:flex-col gap-5 mt-6">

            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={`
            w-[261px] h-[68px] rounded-[50px] flex items-center justify-center gap-3
            text-lg font-medium transition-all duration-200
            ${active === tab.id
                            ? "bg-[#E9F1FF] text-[#2F4FDB] border"   // active
                            : "bg-white text-[#111928] border border-gray-300" // inactive
                        }
          `}
                >
                    <span
                        className={`${active === tab.id ? "text-[#2F4FDB]" : "text-[#111928]"
                            }`}
                    >
                        {tab.icon}
                    </span>

                    {tab.label}
                </button>
            ))}

        </div>
    );

}