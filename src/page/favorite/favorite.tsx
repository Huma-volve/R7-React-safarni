import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Container,
  Stack,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite"; 
import Back from "../../components/back";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorites } from "../../store/favoriteSlice";
import { toggleFavorite } from "../../store/favoriteSlice";

import type { RootState, AppDispatch } from "../../store/store";
type Tour = {
  id: number; 
  title: string;
  img: string;
  price: number;
  rating: number;
};



export default function Favorite() {
  const dispatch = useDispatch<AppDispatch>();
   const { list: tours, loading, error } = useSelector(
    (state: RootState) => state.favorites
  );

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

const handleRemoveFromFavorites = (id: number) => {
  dispatch(toggleFavorite({ category: "tour", item_id: id }));
};
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <Container sx={{ marginBottom: "30px" }}>
      {/* Search bar */}
      <Stack direction="row" alignItems="center">
        <Back />
        <Typography
          sx={{ margin: "auto", fontSize: "26px", fontWeight: "500" }}
        >
          Favorite
        </Typography>
      </Stack>

      {tours.length === 0 ? (
        <Typography
          sx={{
            textAlign: "center",
            mt: 4,
            fontSize: "20px",
            color: "#6B7280",
          }}
        >
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
              </Card>
          ))}
        </div>
      )}
    </Container>
  );
}
