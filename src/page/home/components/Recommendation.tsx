import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Pyramids from "../../../assets/image10.jpg";
import Luxor from "../../../assets/image11.jpg";
import Aswan from "../../../assets/image12.jpg";
import Alexandria from "../../../assets/image13.jpg";
import { Link } from "react-router-dom";

interface Tour {
    id: number;
    name: string;
    rating: number;
    location: string;
    image: string;
}

export default function Recommendation() {
    const tours: Tour[] = [
        {
            id: 1,
            name: "Pyramids Tour",
            rating: 4.8,
            location: "Giza, Egypt",
            image: Pyramids,

        },
        {
            id: 2,
            name: "Luxor Temples",
            rating: 4.7,
            location: "Luxor, Egypt",
            image: Luxor,

        },
        {
            id: 3,
            name: "Aswan Nile Trip",
            rating: 4.9,
            location: "Aswan, Egypt",
            image: Aswan,
        },
        {
            id: 4,
            name: "Alexandria City",
            rating: 4.6,
            location: "Alexandria, Egypt",
            image: Alexandria,

        },
    ];

    return (
        <div className="w-full px-4 mb-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-[#111827]">
                    Recommendation
                </h2>
                <Link
                    to="/internal"
                    className="text-blue-600 font-semibold text-lg"
                >
                    View all
                </Link>
            </div>

            {/* Cards */}
            <div className="flex space-x-6 overflow-x-auto pb-3">
                {tours.map((tour) => (
                    <Link
                        to={`/destination/${tour.id}`}
                        key={tour.id}
                        className="min-w-[260px] bg-white rounded-[30px] shadow-[0_4px_25px_rgba(0,0,0,0.15)] p-4"
                    >
                        {/* Image */}
                        <div className="w-full h-48 rounded-[20px] overflow-hidden mb-3">
                            <img
                                src={tour.image}
                                alt={tour.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Name + Rating */}
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
                            <span className="text-lg">{tour.location}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
