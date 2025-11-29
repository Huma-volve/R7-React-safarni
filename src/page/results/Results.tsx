import { useLocation } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

interface Tour {
    id: number;
    name: string;
    slug: string;
    short_description: string;
    main_image: string;
    total_reviews?: number;
    rating: number;
    duration_days?: number;
    pricing?: {
        adult_price: number;
    };
}


export default function SearchResults() {
    const { state } = useLocation();

    const locationName = state?.location || "Search";
    const tours = Array.isArray(state?.results?.tours)
        ? state.results.tours
        : [];

    return (
        <div className="p-5">
            {/* TITLE */}
            <h1 className="text-3xl font-bold text-[#1F2937] mb-6">
                {locationName}{" "}
                <span className="text-gray-500">{tours.length} Result</span>
            </h1>

            {/* NO RESULTS */}
            {tours.length === 0 && (
                <p className="text-gray-500 text-lg">No tours found.</p>
            )}

            {/* GRID RESULTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {tours.map((tour: Tour) => (
                    <div className="
            bg-white rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.1)]
            border border-gray-200 overflow-hidden p-4 cursor-pointer
            hover:shadow-[0_12px_45px_rgba(0,0,0,0.15)] transition">

                        {/* IMAGE */}
                        <div className="relative w-full h-56 rounded-[25px] overflow-hidden mb-4">
                            <img
                                src={tour.main_image}
                                className="w-full h-full object-cover"
                            />

                            {/* Favorite Icon */}
                            <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="red"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                             2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                             C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 
                             22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* TITLE */}
                        <h3 className="text-xl font-semibold text-gray-900">{tour.name}</h3>

                        {/* RATING */}
                        <div className="flex items-center mt-1 text-gray-600">
                            <span className="text-yellow-500 flex items-center gap-1 font-medium">
                                <StarIcon fontSize="small" />
                                {tour.rating}
                            </span>
                            <span className="text-gray-500 ml-1">
                                ({tour.total_reviews || 650})
                            </span>
                        </div>

                        {/* PICKUP */}
                        <p className="text-gray-500 mt-2 text-[15px]">Pickup Available</p>

                        {/* DAYS */}
                        <p className="text-gray-700 flex items-center gap-2 mt-1 text-[15px]">
                            <span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span>
                            {tour.duration_days || 5} Days
                        </p>

                        {/* PRICE */}
                        <p className="text-[18px] mt-2">
                            From <span className="text-blue-600 font-bold">{tour.pricing?.adult_price}$</span> per Person
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
}
