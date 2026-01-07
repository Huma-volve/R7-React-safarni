import {
  Container,
  Box,
  Stack,
  CardMedia,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Button,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductById } from "../../store/destaintaionSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import Rating from "@mui/material/Rating";
import { CameraAltOutlined } from "@mui/icons-material";
import Back from "../../components/back";
export default function Destination() {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { product, loading, error } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(String(id)));
    }
  }, [id]);
  const gallery = [
    {
      id: 1,
      image: "/assets/destination/gallery/Frame 1464204002 (1).png",
    },
    {
      id: 2,
      image: "/assets/destination/gallery/Frame 1464204169.png",
    },
    {
      id: 3,
      image: "/assets/destination/gallery/Frame 1464204002.png",
    },
    {
      id: 4,
      image: "/assets/destination/gallery/Frame 1464204003 (1).png",
    },
    {
      id: 5,
      image: "/assets/destination/gallery/Frame 1464204003.png",
    },
    {
      id: 6,
      image: "/assets/destination/gallery/Frame 1464204164 (2).png",
    },
    {
      id: 7,
      image: "/assets/destination/gallery/Frame 1464204164.png",
    },
    {
      id: 8,
      image: "/assets/destination/gallery/Frame 1464204165 (1).png",
    },
    {
      id: 9,
      image: "/assets/destination/gallery/Frame 1464204165.png",
    },
    {
      id: 10,
      image: "/assets/destination/gallery/Frame 1464204166.png",
    },
    {
      id: 11,
      image: "/assets/destination/gallery/Frame 1464204167.png",
    },
    {
      id: 12,
      image:"/assets/destination/gallery/Frame 1464204168.png",
    },
  ];
  const getFriendlyError = (error: any): string => {
    if (!error) return "Something went wrong";

    if (typeof error === "string") {
      switch (error) {
        case "Network Error":
          return "Cannot connect to the server. Please check your internet connection.";
        case "Request failed with status code 404":
          return "The product you are looking for does not exist.";
        case "Request failed with status code 500":
          return "Server error. Please try again later.";
        default:
          return error;
      }
    }

    if (typeof error === "object" && error.message) {
      return error.message;
    }

    return "Something went wrong. Please try again.";
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Loader
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
          Loading product details...
        </Typography>
      </Box>
    );
  }

  if (error) return <h2>{getFriendlyError(error)}</h2>;
  if (!product) return <h2>No product found</h2>;
  console.log(product.main_image);
  console.log(product.gallery);
  return (
    <>
      <Container sx={{ marginBottom: "30px", overflow: "hidden" }}>
        <Back />
        {/* Show product */}
        <Box>
          <CardMedia
            component="img"
            image={
              product.main_image.includes("Tour+Image")
                ? "/assets/destination/Depth6,Frame0.png"
                : product.main_image
            }
            alt={product.name}
            className="mb-4"
          />
          <Stack
            direction="row"
            spacing={{ xs: 0, md: 2 }}
            className="justify-between mb-4"
            sx={{ flexWrap: "wrap" }}
          >
            <Typography
              component="div"
              sx={{ fontSize: { xs: "12px", md: "32px" }, fontWeight: "600" }}
            >
              {product.name}
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Rating
                name="half-rating"
                defaultValue={product.rating}
                precision={0.5}
                size="small"
                readOnly
              />
              <Typography
                component="span"
                sx={{
                  fontSize: { xs: "12px", md: "18px" },
                  fontWeight: "600",
                  color: "#4B4F63",
                }}
              >
                {product.rating}
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: { xs: "10px", md: "16px" },
                  fontWeight: "600",
                  color: "#6B6E80",
                }}
              >
                (675)
              </Typography>
            </Box>
          </Stack>
          <Stack
            sx={{
              flexWrap: "wrap",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "25px" },
                fontWeight: "600",
                color: "#4B5563",
              }}
            >
              {product.location.meeting_point}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "25px" },
                fontWeight: "500",
                color: "#4B5563",
              }}
            >
              {product.duration_days} Days and {product.duration_nights} Nights
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", md: "25px" },
                fontWeight: "500",
                color: "#4B5563",
              }}
            >
              {product.location.meeting_point}
            </Typography>
          </Stack>
        </Box>

        {/* Top Activities */}
        <Box>
          <Typography sx={{ fontSize: "25px", fontWeight: "500" }}>
            Top Activities
          </Typography>
          <Grid container spacing={2} className="mt-4">
            {product.activities.map((item: any) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.name}>
                <Card sx={{ boxShadow: "none" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140px"
                      image="/assets/destination/cardNewActivity/Depth 7, Frame 0.png"
                      alt={item.name}
                    />
                    <CardContent>
                      <Typography
                        sx={{ fontSize: "17px", fontWeight: "500" }}
                        component="div"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        className=" text-gray-500"
                        sx={{ fontSize: "14px", fontWeight: "400" }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Best Time to Visit */}
        <Box>
          <Typography
            className=" text-gray-900 "
            sx={{
              fontSize: "25px",
              marginBottom: "10px",
              fontWeight: "500",
              color: "#111928",
            }}
          >
            Best Time to Visit
          </Typography>
          <Typography
            className="border border-gray-200 p-2 text-gray-500 mb-4 w-fit"
            sx={{ fontSize: "22px", marginBottom: "30px", fontWeight: "400" }}
          >
            Spring (April–June) and autumn (September–October) are perfect times
            to visit Paris, with mild weather and fewer tourists.
          </Typography>
        </Box>

        {/* Gallery */}
        <Box>
          <Typography
            className=" text-gray-900 "
            sx={{
              fontSize: "25px",
              marginBottom: "20px",
              fontWeight: "500",
              color: "#111928",
            }}
          >
            Gallery{" "}
            <span className="text-indigo-600">{product.gallery.length}</span>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              maxHeight: 406,
              overflowY: "auto",
            }}
          >
            {product.gallery[0].url.includes("Tour+Image")
              ? gallery.map((item: any) => (
                  <Box
                    key={item.id}
                    sx={{
                      width: { xs: "163px", md: "180px" },
                      height: { xs: "127px", md: "180px" },
                    }}
                  >
                    <img
                      src={item.image}
                      alt={"your browser not support"}
                      loading="lazy"
                      className="rounded-[8px] w-full h-full"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                ))
              : product.gallery.map((item: any) => (
                  <Box
                    key={item.img}
                    sx={{
                      width: { xs: "163px", md: "180px" },
                      height: { xs: "127px", md: "180px" },
                    }}
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      className="rounded-[8px] w-full h-full"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                ))}
          </Box>
          <div className=" text-center mt-[10px]">
            <Button
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                textTransform: "none",
                color: "#1E429F",
              }}
            >
              <CameraAltOutlined sx={{ marginRight: "5px" }} />
              Add Photo
            </Button>
          </div>
        </Box>

        {/* Reviews */}
        <Box>
          <Typography
            className="text-gray-900"
            sx={{ fontSize: "25px", marginBottom: "20px", fontWeight: "500" }}
          >
            Reviews
          </Typography>
          {product.reviews.length > 0 ? (
            <Grid container spacing={2}>
              {(showAllReviews
                ? product.reviews
                : product.reviews?.slice(0, 4)
              ).map((item: any, index: number) => (
                <Grid size={{ xs: 12, md: 6 }} sx={{}} key={index}>
                  <Card
                    sx={{
                      maxWidth: { xs: 343, md: 608 },
                      margin: "auto",
                      border: "1px solid #D1D5DB",
                      padding: "8px",
                      borderRadius: "8px",
                    }}
                  >
                    <CardContent sx={{ padding: "0" }}>
                      <Stack
                        direction="row"
                        spacing={2}
                        className="justify-between"
                        alignItems="center"
                      >
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{ alignItems: "center" }}
                        >
                          <img
                            className="w-12 h-12 object-cover rounded-full"
                            src={item.user.avatar}
                            alt={item.user.name}
                          />
                          <Typography
                            sx={{
                              fontSize: { xs: "12px", md: "23px" },
                              fontWeight: "500",
                            }}
                          >
                            {item.user.name}
                          </Typography>
                        </Stack>
                        <Typography
                          sx={{
                            fontSize: { xs: "13px", md: "20px" },
                            fontWeight: "500",
                            color: "#4B5563",
                          }}
                        >
                          {formatDate(item.created_at)}
                        </Typography>
                      </Stack>
                      <Typography gutterBottom component="div" sx={{ my: 1 }}>
                        <Rating
                          name="review-rating"
                          value={item.rating}
                          precision={0.5}
                          size="medium"
                          readOnly
                        />
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "14px", md: "22px" },
                          fontWeight: "400",
                          color: "#2C2C2C",
                        }}
                      >
                        {item.comment}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            "No review"
          )}
          <div className="text-center mt-[20px]">
            {product.reviews.length > 4 && (
              <Button
                variant="outlined"
                sx={{
                  width: { xs: "210px", md: "510px" },
                  fontSize: "20px",
                  fontWeight: "600",
                  textTransform: "none",
                }}
                onClick={() => setShowAllReviews((prev) => !prev)}
              >
                {showAllReviews ? "See less" : "See more"}
              </Button>
            )}
          </div>
        </Box>
      </Container>

      {/* Buying Button */}
      <Box
        sx={{
          boxShadow: 5,
          width: "100%",
          position: "sticky",
          bottom: 0,
          backgroundColor: "white",
          padding: "20px",
          margin: "auto",
          marginBottom: { xs: "90px", md: "0" },
        }}
      >
        <Stack direction="row" spacing={2} className="justify-between" gap={2}>
          <Typography
            className="text-gray-900 xs:text-[16px] md:text-[30px] font-semibold"
            sx={{ width: { xs: "100%", md: "50%" } }}
          >
            Total price :{" "}
            <span className="text-indigo-600 xs:text-[17px] md:text-[24px] font-normal">
              ${product.pricing.adult_price}
            </span>
            <span className="xs:text-[13px] md:text-[20px] font-normal">
              /night
            </span>
          </Typography>
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Link to="/paymentpage" className="w-full">
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  textTransform: "none",
                  fontSize: { xs: "16px", md: "20px" },
                }}
              >
                Book Now
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
