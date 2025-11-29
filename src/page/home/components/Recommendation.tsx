import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import image1 from "../../../assets/recommend1.jpg"
// import image2 from "../../../assets/recommend2.jpg"
// import image3 from "../../../assets/recommend3.jpg"
// import image4 from "../../../assets/recommend4.jpg"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Recommendation() {
    interface Tour {
        id: number;
        name: string;
        rating: number;
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
                    "https://round7-safarni-team-one.huma-volve.com/api/v1/tours/recommendations"
                );
                setTours(res.data.data);
            } catch (error) {
                console.log("Failed to load tours", error);
            }
            setLoading(false);
        }

        fetchTours();
        console.log(tours)
    }, []);

    if (loading) return <p className="px-4">Loading Recommendations...</p>;

    return (
        <div className="w-full px-4 mb-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-[#111827]">
                    Recommendation
                </h2>
                <Link to={"/internal"} className="text-blue-600 font-semibold text-lg">
                    View all
                </Link>
            </div>

            {/* Cards Scroll */}
            <div className="flex space-x-6 overflow-x-auto pb-3">
                {tours.map((tour, index) => (
                    <div
                        key={index}
                        className="min-w-[260px] bg-white rounded-[30px] shadow-[0_4px_25px_rgba(0,0,0,0.15)] p-4"
                    >
                        {/* Image */}
                        <div className="w-full h-48 rounded-[20px] overflow-hidden mb-3">
                            <img
                                src={tour.main_image_thumb}
                                alt={tour.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* name + Rating */}
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold text-gray-800">
                                {tour.name}
                            </p>

                            <div className="flex items-center gap-1 text-yellow-500">
                                <StarRoundedIcon />
                                <span className="text-gray-700 font-medium text-lg">
                                    {tour.rating}
                                </span>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 mt-2 text-gray-600">
                            <LocationOnIcon />
                            <span className="text-lg">{tour.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
