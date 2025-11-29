import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import PlaceIcon from "@mui/icons-material/Place";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import HikingIcon from "@mui/icons-material/Hiking";
import Back from "../../components/back";
import axios from "axios";
import { useNavigate } from "react-router-dom";


/* --------- TYPES ---------- */
interface Tour {
    id: number;
    name: string;
    slug: string;
    short_description: string;
    main_image: string;
    rating: number;
    category?: { id: number; name: string };
}

interface Hotel {
    id: number;
    name: string;
    stars: number;
    description: string;
    location: {
        city: string;
        country: string;
    };
}

export default function FiltersPanel() {

    const navigate = useNavigate();



    /* RESULTS STATE */
    const [, setResults] = useState<{
        tours: Tour[];
        hotels: Hotel[];
    }>({
        tours: [],
        hotels: [],
    });

    const [loading, setLoading] = useState(false);

    /* FILTER STATES */
    const [location, setLocation] = useState("");
    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(8500);
    const [selectedAdventure, setSelectedAdventure] = useState<string[]>([]);

    const adventureItems = [
        { label: "Adventure", icon: <HikingIcon /> },
        { label: "City", icon: <PlaceIcon /> },
        { label: "Water", icon: <BeachAccessIcon /> },
        { label: "Road", icon: <DirectionsCarIcon /> },
    ];

    const toggleAdventure = (label: string) =>
        setSelectedAdventure((prev) =>
            prev.includes(label)
                ? prev.filter((x) => x !== label)
                : [...prev, label]
        );

    /* SORT */
    const sortOptions = [
        "Price (Low to High)",
        "Price (High to Low)",
        "Most Reviewed",
        "Most Popular",
    ];
    const [activeSort, setActiveSort] = useState(sortOptions[0]);

    /* CLEAR ALL */
    const clearAll = () => {
        setLocation("");
        setSelectedRating(null);
        setMin(0);
        setMax(8500);
        setSelectedAdventure([]);

        // Reset results correctly
        setResults({
            tours: [],
            hotels: [],
        });
    };

    /* API CALL */
    async function fetchSearchResults() {
        try {
            setLoading(true);

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const params: Record<string, any> = {
                q: location || "",
                "types[]": ["tours", "hotels", "cars", "flights"],

                price_min: min,
                price_max: max,

                rating_min: selectedRating ?? "",

                category_id: "",
                location_lat: "",
                location_lng: "",
                radius: "",

                brand_id: "",
                stars: "",

                origin_id: "",
                destination_id: "",
                departure_date: "",
                return_date: "",
                carrier_id: "",
                class_id: "",

                check_in: "",
                check_out: "",

                pickup_date: "",
                dropoff_date: "",

                page: 1,
                page_size: 20,
            };

            if (selectedAdventure.length > 0) {
                params["tags[]"] = selectedAdventure;
            }

            const res = await axios.get(
                "https://round7-safarni-team-one.huma-volve.com/api/v1/search",
                { params }
            );

            const data = {
                tours: res.data.data.tours?.data || [],
                hotels: res.data.data.hotels?.data || [],
            };

            setResults(data);

            return data;
        } catch (error) {
            console.error("Search API Error:", error);

            return { tours: [], hotels: [] };
        } finally {
            setLoading(false);
        }
    }


    /* UI START */
    return (
        <div className="w-full mx-auto p-5 space-y-8">
            <Back />

            {/* SORT */}
            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Sort By</h2>

                <div className="flex flex-wrap gap-3">
                    {sortOptions.map((item) => (
                        <button
                            key={item}
                            onClick={() => setActiveSort(item)}
                            className={`px-5 py-2 rounded-full border transition ${activeSort === item
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-gray-700 border-gray-300"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <hr className="border-gray-300" />

            {/* BUDGET */}
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

            {/* ADVENTURES */}
            <div>
                <h2 className="text-lg font-semibold text-gray-800">Adventure Style</h2>

                <div className="flex flex-wrap gap-3 mt-3">
                    {adventureItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => toggleAdventure(item.label)}
                            className={`flex items-center gap-2 px-5 py-2 rounded-full border transition ${selectedAdventure.includes(item.label)
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-blue-50 text-gray-700 border-blue-200"
                                }`}
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
            </div>

            <hr className="border-gray-300" />

            {/* RATING */}
            <div>
                <h2 className="text-lg font-semibold text-gray-800">Rating</h2>

                <div className="flex gap-4 mt-4 flex-wrap justify-between">
                    {[1, 2, 3, 4, 5].map((r) => (
                        <button
                            key={r}
                            onClick={() => setSelectedRating(r)}
                            className={`w-[123px] h-[73px] flex items-center justify-center rounded-[120px] border text-2xl ${selectedRating === r
                                ? "bg-blue-600 text-white border-[#C3DDFD]"
                                : "text-[#6B7280] border-gray-300"
                                }`}
                        >
                            <StarIcon />
                            <span>{r}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* BUTTONS */}
            <div className="flex justify-between mt-6 max-sm:flex-col">
                <button
                    onClick={clearAll}
                    className="px-6 py-3 border max-md:mb-4 border-gray-500 rounded-lg md:w-1/3 text-gray-700"
                >
                    Clear All
                </button>

                <button
                    onClick={async () => {
                        const data = await fetchSearchResults();

                        navigate("/results", {
                            state: {
                                location,
                                results: data,
                            },
                        });
                    }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg md:w-1/3"
                >
                    {loading ? "Loading..." : "Search Tours"}
                </button>


            </div>

        </div>
    );
}
