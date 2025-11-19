import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Container,
  Stack,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite"; // نستخدم القلب الممتلئ فقط
import Back from "../../components/back";

type Tour = {
  id: string; // 👈 أضفنا id فريد
  title: string;
  img: string;
  price: number;
  rating: number;
};

// نولّد id فريد لكل عنصر (مثلاً باستخدام الوقت أو رقم تسلسلي)
const initialTours: Tour[] = [
  {
    id: "1",
    title: "Eiffel Tower",
    img: "public/assets/internal/4396deae0a058c27bfc287f3bc71ed9e16836c69.jpg",
    price: 200,
    rating: 4.7,
  },
  {
    id: "2",
    title: "Notre-Dame Cathedral",
    img: "public/assets/internal/24704dc51e4507a0e8f43ec3d3bf73b7acdce9d2.jpg",
    price: 250,
    rating: 4.2,
  },
  {
    id: "3",
    title: "Louvre Museum",
    img: "public/assets/internal/a2ca0f122817946104380e24391c6e1db9530702.jpg",
    price: 150,
    rating: 4.5,
  },
  {
    id: "4",
    title: "Arc de Triomphe",
    img: "public/assets/internal/bf275389631216a57cf9b8951bfff2629b509e43.jpg",
    price: 220,
    rating: 4.1,
  },
  {
    id: "5",
    title: "Montmartre",
    img: "public/assets/internal/d1a0007a49da8785b34dea06e9f94165f08e2ea7.jpg",
    price: 250,
    rating: 4.2,
  },
  {
    id: "6",
    title: "Galeries Lafayette",
    img: "public/assets/internal/d4916a644c1db96fa5c5f8766087965b1d935291.jpg",
    price: 150,
    rating: 4.5,
  },
  {
    id: "7",
    title: "Centre Pompidou",
    img: "public/assets/internal/e734df0633300509e5ed76301ca871637038fb9b.jpg",
    price: 220,
    rating: 4.1,
  },
  {
    id: "8",
    title: "Bois de Boulogne",
    img: "public/assets/internal/f2713364a5b9cac838c133b9721d46cfa28188a4.jpg",
    price: 200,
    rating: 4.7,
  },
];

export default function Favorite() {
  const [tours, setTours] = useState<Tour[]>(initialTours);

  const handleRemoveFromFavorites = (id: string) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  return (
    <Container sx={{ marginBottom: "30px" }}>
      {/* Search bar */}
      <Stack direction="row" alignItems="center">
        <Back />
        <Typography sx={{ margin: "auto", fontSize: "26px", fontWeight: "500" }}>
          Favorite
        </Typography>
      </Stack>

      {tours.length === 0 ? (
        <Typography sx={{ textAlign: "center", mt: 4, fontSize: "20px", color: "#6B7280" }}>
          No favorite tours available.
        </Typography>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <Card
              key={tour.id}
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
                  margin: "15px auto 0",
                  borderRadius: "18px",
                }}
              />

              {/* Heart icon - always filled (red) */}
              <IconButton
                onClick={() => handleRemoveFromFavorites(tour.id)}
                sx={{
                  position: "absolute",
                  top: 30,
                  right: 30,
                  backgroundColor: "white",
                  "&:hover": { backgroundColor: "white" },
                  boxShadow: 1,
                }}
              >
                <FavoriteIcon sx={{ color: "#e53935" }} />
              </IconButton>

              {/* Content */}
              <CardContent>
                <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
                  <Typography color="#9CA3AF" sx={{ fontSize: "18px", fontWeight: "500" }}>
                    Full Day Tours
                  </Typography>

                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-[18px]">⭐</div>
                    <Typography sx={{ fontSize: "16px" }} fontWeight={500}>
                      {tour.rating}
                    </Typography>
                  </div>
                </Stack>

                <Typography sx={{ fontSize: "22px", fontWeight: 500, color: "#111928" }}>
                  {tour.title}
                </Typography>

                <Typography color="#6B7280">
                  From{" "}
                  <span className="text-blue-500 font-semibold">{tour.price}$</span> Per Person
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
}