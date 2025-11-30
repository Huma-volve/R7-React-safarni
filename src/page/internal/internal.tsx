import { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  TextField,
  Container,
  Stack,
  Grid,
  CircularProgress,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Back from "../../components/back";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { fetchinternal } from "../../store/internalSlice";
import { toggleFavorite } from "../../store/internalSlice";

export default function Internal() {
  const [search, setSearch] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [erLo, seterLo] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { product, loading, error } = useSelector(
    (state: RootState) => state.internal
  );

  const toggleFav = (category: string, id: number) => {
    dispatch(toggleFavorite({ category, item_id: id }));
  };
  // Debounce input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  // Fetch products
  useEffect(() => {
    if (debouncedQuery) {
      dispatch(fetchinternal(debouncedQuery));
    }
  }, [debouncedQuery]);

  // Handle error / no results
  useEffect(() => {
    if (loading) {
      seterLo("Loading...");
    } else if (error) {
      seterLo(error);
    } else if (Array.isArray(product) && product.length === 0) {
      seterLo("No results found");
    } else {
      seterLo("");
    }
  }, [loading, error, product, debouncedQuery]);

  // Loader component
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <CircularProgress size={60} thickness={4} color="primary" />
        <Typography sx={{ mt: 2, fontSize: "18px" }}>
          Loading products...
        </Typography>
      </Box>
    );
  }

  return (
    <Container>
      {/* Search bar */}
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
        <Back />
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          placeholder="Search destinations..."
          InputProps={{
            startAdornment: <Search sx={{ color: "blue" }} />,
          }}
          sx={{
            background: "#fff",
            borderRadius: "15px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "15px",
            },
          }}
        />
      </Stack>

      {erLo && !loading && (
        <Typography
          sx={{
            color: error ? "red" : "black",
            mt: 1,
            ml: 1,
            fontSize: "14px",
          }}
        >
          {erLo}
        </Typography>
      )}

      <Grid container spacing={3} sx={{ marginBottom: { xs: "80px", md: 0 } }}>
        {Array.isArray(product) &&
          product.length > 0 &&
          product.map((tour: any) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={tour.id}>
              <Card
                sx={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Image */}
                <CardMedia
                  component="img"
                  image={tour.main_image}
                  alt={tour.name}
                  sx={{
                    height: "200px",
                    width: "90%",
                    objectFit: "cover",
                    margin: "15px auto 0",
                    borderRadius: "18px",
                  }}
                />

                {/* Heart icon */}
                <IconButton
                  onClick={() => toggleFav(tour.category.name, tour.id)}
                  sx={{
                    position: "absolute",
                    top: 30,
                    right: 30,
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "white" },
                  }}
                >
                  {tour.is_favorited ? (
                    <FavoriteIcon sx={{ color: "#e53935" }} />
                  ) : (
                    <FavoriteBorderIcon sx={{ color: "#333" }} />
                  )}
                </IconButton>

                {/* Content */}
                <Link
                  to={`/destination/${tour.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <CardContent>
                    <Stack
                      direction="row"
                      sx={{ justifyContent: "space-between" }}
                    >
                      <Typography
                        color="#9CA3AF"
                        sx={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        {tour.duration_days}
                      </Typography>

                      <div className="flex items-center gap-2 mb-1">
                        <div className="text-[18px]">⭐</div>
                        <Typography sx={{ fontSize: "16px" }} fontWeight={500}>
                          {tour.rating}
                        </Typography>
                      </div>
                    </Stack>

                    <Typography
                      sx={{
                        fontSize: "22px",
                        fontWeight: 500,
                        color: "#111928",
                      }}
                    >
                      {tour.name}
                    </Typography>

                    <Typography color="#6B7280">
                      From{" "}
                      <span className="text-blue-500 font-semibold">
                        {tour.pricing.adult_price}$
                      </span>{" "}
                      Per Person
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
