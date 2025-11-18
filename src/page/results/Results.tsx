import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Back from "../../components/back";

type Tour = {
    id: number;
    title: string;
    image: string;
    rating: number;
    reviews: number;
    pickup: string;
    days: string;
    price: string;
};

const toursData: Tour[] = [
    {
        id: 1,
        title: "Eiffel Tower",
        image:
            "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
        rating: 4.5,
        reviews: 650,
        pickup: "Pickup Available",
        days: "5 Days",
        price: "1050$",
    },
    {
        id: 2,
        title: "Paris City Tour",
        image:
            "https://images.pexels.com/photos/1796727/pexels-photo-1796727.jpeg",
        rating: 4.1,
        reviews: 650,
        pickup: "Pickup Available",
        days: "7 Days",
        price: "1500$",
    },
    {
        id: 3,
        title: "River Cruise",
        image:
            "https://images.pexels.com/photos/1694351/pexels-photo-1694351.jpeg",
        rating: 4.0,
        reviews: 350,
        pickup: "Pickup Available",
        days: "6 Hour",
        price: "100$",
    },
    {
        id: 4,
        title: "Best of Swiss",
        image:
            "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg",
        rating: 4.7,
        reviews: 950,
        pickup: "Pickup Available",
        days: "10 Days",
        price: "2200$",
    },
    {
        id: 5,
        title: "The Tour de France",
        image:
            "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg",
        rating: 3.1,
        reviews: 256,
        pickup: "Pickup Available",
        days: "6 Hour",
        price: "155$",
    },
    {
        id: 6,
        title: "Disneyland Paris",
        image:
            "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg",
        rating: 4.3,
        reviews: 950,
        pickup: "Pickup Available",
        days: "10 Days",
        price: "2100$",
    },
    {
        id: 7,
        title: "Paris City Tour",
        image:
            "https://images.pexels.com/photos/1089309/pexels-photo-1089309.jpeg",
        rating: 4.1,
        reviews: 650,
        pickup: "Pickup Available",
        days: "7 Days",
        price: "1500$",
    },
    {
        id: 8,
        title: "Disneyland Paris",
        image:
            "https://images.pexels.com/photos/1796797/pexels-photo-1796797.jpeg",
        rating: 4.5,
        reviews: 650,
        pickup: "Pickup Available",
        days: "5 Days",
        price: "1050$",
    },
];

export default function Results() {
    const [favorites, setFavorites] = useState<number[]>([]);

    const toggleFav = (id: number) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    return (
        <>
            <Back />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {toursData.map((tour) => (
                    <div
                        key={tour.id}
                        className="bg-white rounded-2xl shadow-md p-3 border border-gray-200 hover:shadow-lg transition"
                    >
                        {/* Image section */}
                        <div className="relative">
                            <img
                                src={tour.image}
                                alt={tour.title}
                                className="w-full h-52 object-cover rounded-xl"
                            />

                            {/* Favorite Button */}
                            <button
                                onClick={() => toggleFav(tour.id)}
                                className="absolute top-3 right-3 bg-white rounded-full p-1 shadow"
                            >
                                {favorites.includes(tour.id) ? (
                                    <FavoriteIcon sx={{ color: "red" }} />
                                ) : (
                                    <FavoriteBorderIcon sx={{ color: "#222" }} />
                                )}
                            </button>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold mt-3">{tour.title}</h3>

                        {/* Rating */}
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                            <StarIcon sx={{ color: "#fbbf24", fontSize: 20 }} />
                            <span className="ml-1 font-semibold">{tour.rating}</span>
                            <span className="ml-1 text-gray-500">({tour.reviews})</span>
                        </div>

                        {/* Pickup + Days */}
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                            <span>{tour.pickup}</span>
                            <FiberManualRecordIcon
                                sx={{ fontSize: 8, margin: "0 6px", color: "#3354D8" }}
                            />
                            <span>{tour.days}</span>
                        </div>

                        {/* Price */}
                        <p className="text-gray-700 text-sm mt-1">
                            From <span className="text-blue-600 font-semibold">{tour.price}</span> per Person
                        </p>
                    </div>
                ))}
            </div>
        </>

    );
}
