import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  TextField,
  Container,
  Stack,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Back from "../../components/back";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
type Tour = {
  title: string;
  img: string;
  price: number;
  rating: number;
};

const tours: Tour[] = [
  {
    title: "Eiffel Tower",
    img: "public/assets/internal/4396deae0a058c27bfc287f3bc71ed9e16836c69.jpg",
    price: 200,
    rating: 4.7,
  },
  {
    title: "Notre-Dame Cathedral",
    img: "public/assets/internal/24704dc51e4507a0e8f43ec3d3bf73b7acdce9d2.jpg",
    price: 250,
    rating: 4.2,
  },
  {
    title: "Louvre Museum",
    img: "public/assets/internal/a2ca0f122817946104380e24391c6e1db9530702.jpg",
    price: 150,
    rating: 4.5,
  },
  {
    title: "Arc de Triomphe",
    img: "public/assets/internal/bf275389631216a57cf9b8951bfff2629b509e43.jpg",
    price: 220,
    rating: 4.1,
  },
  {
    title: "Montmartre",
    img: "public/assets/internal/d1a0007a49da8785b34dea06e9f94165f08e2ea7.jpg",
    price: 250,
    rating: 4.2,
  },
  {
    title: "Galeries Lafayette",
    img: "public/assets/internal/d4916a644c1db96fa5c5f8766087965b1d935291.jpg",
    price: 150,
    rating: 4.5,
  },
  {
    title: "Centre Pompidou",
    img: "public/assets/internal/e734df0633300509e5ed76301ca871637038fb9b.jpg",
    price: 220,
    rating: 4.1,
  },
  {
    title: "Bois de Boulogne",
    img: "public/assets/internal/f2713364a5b9cac838c133b9721d46cfa28188a4.jpg",
    price: 200,
    rating: 4.7,
  },
];

export default function Internal() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFav = (title: string) => {
    setFavorites((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <Container>
      {/* Search bar */}
      <Stack direction="row" alignItems="center">
        <Back />
        <TextField
          fullWidth
          InputProps={{
            startAdornment: <Search sx={{ color: "blue" }} />,
          }}
          sx={{
            marginLeft: "10px",
            background: "#fff",
            borderRadius: "15px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "15px",
            },
          }}
        />
      </Stack>

      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6
      "
      >
        {tours.map((tour) => (
          <Card
            key={tour.title}
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
              image={tour.img}
              alt={tour.title}
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
              onClick={() => toggleFav(tour.title)}
              sx={{
                position: "absolute",
                top: 30,
                right: 30,
                backgroundColor: "white",
                "&:hover": { backgroundColor: "white" },
              }}
            >
              {favorites.includes(tour.title) ? (
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
                  {tour.title}
                </Typography>

                <Typography color="#6B7280">
                  From{" "}
                  <span className="text-blue-500 font-semibold">
                    {tour.price}$
                  </span>{" "}
                  Per Person
                </Typography>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </Container>
  );
}
