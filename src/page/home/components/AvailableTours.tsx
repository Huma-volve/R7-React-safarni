import StarRoundedIcon from "@mui/icons-material/StarRounded";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AvailableTours() {
    interface Tour {
        id: number;
        name: string;
        rating: number;
        price: number;
        main_image_thumb: string;
        category: {
            id: number;
            name: string;
        };
    }
    const [tours, setTours] = useState<Tour[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTours() {
            try {
                const res = await axios.get(
                    "https://round7-safarni-team-one.huma-volve.com/api/v1/tours/available?date=2025-12-20&limit=4"
                );
                setTours(res.data.data);
                console.log(res)
            } catch (error) {
                console.log("Failed to load tours", error);
            }
            setLoading(false);
        }

        fetchTours();
        console.log(tours)
    }, []);
    if (loading) return <p className="px-4">Loading Available Tours...</p>;


    return (
        <div className="w-full px-4 mt-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-semibold text-[#1F2937]">
                    Available Tours
                </h2>
                <Link to={"/internal"} className="text-blue-600 font-semibold text-lg">
                    View all
                </Link>
            </div>

            {/* Grid: 2 × 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {tours.map((tour: Tour, index) => (
                    <div
                        key={index}
                        className="flex-col sm:flex-row flex items-center gap-5 p-4 rounded-[40px] bg-white shadow-[0_0_25px_rgba(30,58,138,0.15)] border border-gray-100"
                    >
                        {/* Image */}
                        <div className="w-32 h-32 rounded-[20px] overflow-hidden shrink-0">
                            <img
                                src={tour.main_image_thumb}
                                alt={tour.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Text Area */}
                        <div className="flex-1">
                            <p className="text-gray-500 text-lg font-medium">
                                Full Day Tour
                            </p>

                            <h3 className="text-2xl font-semibold text-[#111827] mb-1">
                                {tour.name}
                            </h3>

                            <p className="text-gray-600 text-lg">
                                From{" "}
                                <span className="text-blue-600 font-semibold">
                                    {tour.price}$
                                </span>{" "}
                                Per Person
                            </p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 text-yellow-500 text-lg">
                            <StarRoundedIcon sx={{ fontSize: 26, color: "#facc15" }} />
                            <span className="text-gray-700">{tour.rating}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
