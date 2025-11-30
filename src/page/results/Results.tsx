import { Link, useLocation } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,

    Stack,
} from "@mui/material";
import { useState } from "react";
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
interface Hotel {
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
    const [favorites, setFavorites] = useState<string[]>([]);

    const toggleFav = (name: string) => {
        setFavorites((prev) =>
            prev.includes(name)
                ? prev.filter((item) => item !== name)
                : [...prev, name]
        );
    }

    const locationName = state?.location || "Search";
    const tours = Array.isArray(state?.results?.tours)
        ? state.results.tours
        : [];
    const hotels: Hotel[] = state?.results?.hotels || [];


    return (
        <div className="p-5">
            {/* name */}
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
                    <Card
                        key={tour.name}
                        sx={{
                            borderRadius: "18px",
                            overflow: "hidden",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                            position: "relative",
                        }}
                    >
                        {/* Image */}
                        <CardMedia
                            component="img"
                            image={tour.main_image}
                            sx={{
                                height: "200px",
                                width: "90%",
                                objectFit: "cover",
                                margin: " 15px auto 0",
                                borderRadius: "18px",
                            }}
                        />

                        {/* Heart icon */}
                        <IconButton
                            onClick={() => toggleFav(tour.name)}
                            sx={{
                                position: "absolute",
                                top: 30,
                                right: 30,
                                backgroundColor: "white",
                                "&:hover": { backgroundColor: "white" },
                            }}
                        >
                            {favorites.includes(tour.name) ? (
                                <FavoriteIcon sx={{ color: "#e53935" }} />
                            ) : (
                                <FavoriteBorderIcon sx={{ color: "#333" }} />
                            )}
                        </IconButton>

                        {/* Content */}
                        <Link to={`/destination`}>
                            <CardContent>
                                <Stack
                                    direction={"row"}
                                    sx={{ justifyContent: "space-between" }}
                                >
                                    <Typography
                                        color="#9CA3AF"
                                        sx={{ fontSize: "18px", fontWeight: "500" }}
                                    >
                                        Full Day Tours
                                    </Typography>

                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="text-[18px]">⭐</div>
                                        <Typography sx={{ fontSize: "16px" }} fontWeight={500}>
                                            {tour.rating}
                                        </Typography>
                                    </div>
                                </Stack>

                                <Typography
                                    sx={{ fontSize: "22px", fontWeight: 500, color: "#111928" }}
                                >
                                    {tour.name}
                                </Typography>

                                <Typography color="#6B7280">
                                    From{" "}
                                    <span className="text-blue-500 font-semibold">
                                        {tour.pricing?.adult_price}$
                                    </span>{" "}
                                    Per Person
                                </Typography>
                            </CardContent>
                        </Link>
                    </Card>

                ))}
                <div className="my-5"></div>
                {hotels.map((hotel: Hotel) => (
                    <Card
                        key={hotel.name}
                        sx={{
                            borderRadius: "18px",
                            overflow: "hidden",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                            position: "relative",
                        }}
                    >
                        {/* Image */}
                        <CardMedia
                            component="img"
                            image={hotel.main_image}
                            sx={{
                                height: "200px",
                                width: "90%",
                                objectFit: "cover",
                                margin: " 15px auto 0",
                                borderRadius: "18px",
                            }}
                        />

                        {/* Heart icon */}
                        <IconButton
                            onClick={() => toggleFav(hotel.name)}
                            sx={{
                                position: "absolute",
                                top: 30,
                                right: 30,
                                backgroundColor: "white",
                                "&:hover": { backgroundColor: "white" },
                            }}
                        >
                            {favorites.includes(hotel.name) ? (
                                <FavoriteIcon sx={{ color: "#e53935" }} />
                            ) : (
                                <FavoriteBorderIcon sx={{ color: "#333" }} />
                            )}
                        </IconButton>

                        {/* Content */}
                        <Link to={`/destination`}>
                            <CardContent>
                                <Stack
                                    direction={"row"}
                                    sx={{ justifyContent: "space-between" }}
                                >
                                    <Typography
                                        color="#9CA3AF"
                                        sx={{ fontSize: "18px", fontWeight: "500" }}
                                    >
                                        Full Day Tours
                                    </Typography>

                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="text-[18px]">⭐</div>
                                        <Typography sx={{ fontSize: "16px" }} fontWeight={500}>
                                            {hotel.rating}
                                        </Typography>
                                    </div>
                                </Stack>

                                <Typography
                                    sx={{ fontSize: "22px", fontWeight: 500, color: "#111928" }}
                                >
                                    {hotel.name}
                                </Typography>

                                <Typography color="#6B7280">
                                    From{" "}
                                    <span className="text-blue-500 font-semibold">
                                        {hotel.pricing?.adult_price}$
                                    </span>{" "}
                                    Per Person
                                </Typography>
                            </CardContent>
                        </Link>
                    </Card>

                ))}
            </div>
        </div>
    );
}
