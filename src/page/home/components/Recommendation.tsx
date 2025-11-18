import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import image1 from "../../../assets/recommend1.jpg"
import image2 from "../../../assets/recommend2.jpg"
import image3 from "../../../assets/recommend3.jpg"
import image4 from "../../../assets/recommend4.jpg"


export default function Recommendation() {
    const places = [
        {
            title: "The Pyramids",
            city: "Giza",
            rating: 4.8,
            img: image1,
        },
        {
            title: "The Citadel of Saladin",
            city: "Cairo",
            rating: 4.8,
            img: image2,
        },
        {
            title: "Karnak Temple",
            city: "Luxor",
            rating: 4.3,
            img: image3,
        },
        {
            title: "Library of Alexandria",
            city: "Alexandria",
            rating: 4.8,
            img: image4,
        },
    ];

    return (
        <div className="w-full px-4 mb-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-[#111827]">
                    Recommendation
                </h2>
                <button className="text-main-color font-semibold text-lg">
                    View all
                </button>
            </div>

            {/* Cards Scroll */}
            <div className="flex space-x-6 overflow-x-auto pb-3">
                {places.map((place, index) => (
                    <div
                        key={index}
                        className="min-w-[260px] bg-white rounded-[30px] shadow-[0_4px_25px_rgba(0,0,0,0.15)] p-4"
                    >
                        {/* Image */}
                        <div className="w-full h-48 rounded-[20px] overflow-hidden mb-3">
                            <img
                                src={place.img}
                                alt={place.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Title + Rating */}
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold text-gray-800">
                                {place.title}
                            </p>

                            <div className="flex items-center gap-1 text-yellow-500">
                                <StarRoundedIcon />
                                <span className="text-gray-700 font-medium text-lg">
                                    {place.rating}
                                </span>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 mt-2 text-gray-600">
                            <LocationOnIcon />
                            <span className="text-lg">{place.city}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
