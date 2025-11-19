import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import PlaceIcon from "@mui/icons-material/Place";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import HikingIcon from "@mui/icons-material/Hiking";
import Back from "../../components/back";

export default function FiltersPanel() {
    /* ---------------- SORT ---------------- */
    const sortOptions = [
        "Price (Low to High)",
        "Price (High to Low)",
        "Biggest Deals (Highest Saving)",
        "Most Reviewed",
        "Most Popular",
    ];

    const [activeSort, setActiveSort] = useState(sortOptions[0]);

    /* ---------------- BUDGET RANGE ---------------- */
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(8500);

    /* ---------------- ADVENTURE MULTI SELECT ---------------- */
    const adventureItems = [
        { label: "Adventure Travel", icon: <HikingIcon /> },
        { label: "City Breaks", icon: <PlaceIcon /> },
        { label: "Water Activity", icon: <BeachAccessIcon /> },
        { label: "Road Trips", icon: <DirectionsCarIcon /> },
    ];

    const [selectedAdventure, setSelectedAdventure] = useState<string[]>(["Adventure Travel"]);

    const toggleAdventure = (item: string) => {
        setSelectedAdventure((prev) =>
            prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
        );
    };

    /* ---------------- LOCATION INPUT ---------------- */
    const [location, setLocation] = useState("Paris");

    /* ---------------- RATING SELECT ---------------- */
    const ratings = [1, 2, 3, 4, 5];
    const [selectedRating, setSelectedRating] = useState<number | null>(null);

    /* ---------------- CLEAR ALL ---------------- */
    const clearAll = () => {
        setActiveSort(sortOptions[0]);
        setMin(0);
        setMax(8500);
        setSelectedAdventure([]);
        setLocation("");
        setSelectedRating(null);
    };

    return (
        <div className="w-full  mx-auto p-5 space-y-8">
            <Back />

            {/* SORT */}
            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Sort By</h2>

                <div className="flex flex-wrap gap-3">
                    {sortOptions.map((item) => (
                        <button
                            key={item}
                            onClick={() => setActiveSort(item)}
                            className={`
                px-5 py-2 rounded-full border transition
                ${activeSort === item
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-700 border-gray-300"}
              `}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <hr className="border-gray-300" />

            {/* BUDGET RANGE */}
            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Budget Range</h2>

                <div className="relative bg-blue-100 h-32 w-full rounded-xl flex items-end pb-2">
                    <div className="absolute left-10 bottom-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="absolute right-10 bottom-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>

                <div className="flex justify-between mt-3">
                    <div>
                        <p className="text-gray-500 text-sm">Min</p>
                        <p className="text-gray-800 font-semibold">${min}</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Max</p>
                        <p className="text-gray-800 font-semibold">${max}</p>
                    </div>
                </div>
            </div>

            <hr className="border-gray-300" />

            {/* ADVENTURE STYLE MULTI SELECT */}
            <div>
                <h2 className="text-lg font-semibold text-gray-800">Adventure Style Multi Select</h2>

                <div className="flex flex-wrap gap-3 mt-3">
                    {adventureItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => toggleAdventure(item.label)}
                            className={`
                flex items-center gap-2 px-5 py-2 rounded-full border transition
                ${selectedAdventure.includes(item.label)
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-blue-50 text-gray-700 border-blue-200"}
              `}
                        >
                            {item.icon} {item.label}
                        </button>
                    ))}
                </div>
            </div>

            <hr className="border-gray-300" />

            {/* LOCATION */}
            <div>
                <h2 className="text-lg font-semibold text-gray-800">Location</h2>

                <div className="mt-2 p-3 border rounded-lg bg-white flex items-center gap-3">
                    <SearchIcon sx={{ color: "#3354D8" }} />
                    <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full outline-none text-gray-700"
                        placeholder="Search..."
                    />
                </div>

                {location && (
                    <div className="mt-2 text-sm flex items-center gap-2">
                        <span className="px-3 py-1 bg-gray-100 rounded-full border">{location}</span>
                    </div>
                )}
            </div>

            <hr className="border-gray-300" />

            {/* RATING SELECT */}
            <div>
                <h2 className="text-lg font-semibold text-gray-800">Rating Multi Select</h2>

                <div className="flex gap-4 mt-4 flex-wrap justify-between">
                    {ratings.map((r) => (
                        <button
                            key={r}
                            onClick={() => setSelectedRating(r)}
                            className={`
                w-[123px] h-[73px] flex  items-center px-4 py-2 justify-center rounded-[120px] border  text-2xl
                ${selectedRating === r
                                    ? "bg-blue-600 text-white border-[#C3DDFD]"
                                    : " text-[#6B7280] border-gray-300"}
              `}
                        >
                            <StarIcon />
                            <span>{r}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Bottom Buttons */}
            <div className="flex justify-between mt-6 max-sm:flex-col">
                <button
                    onClick={clearAll}
                    className="px-6 py-3 border max-md:mb-4 border-gray-500 rounded-lg md:w-1/3 text-gray-700"
                >
                    Clear All
                </button>

                <button className="px-6 py-3  bg-blue-600 text-white rounded-lg md:w-1/3">
                    56 Tours Found
                </button>
            </div>
        </div>
    );
}
