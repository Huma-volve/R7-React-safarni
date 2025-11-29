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
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../store/destaintaionSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import Rating from "@mui/material/Rating";
import { CameraAltOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
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
  const getFriendlyError = (error: any): string => {
    if (!error) return "Something went wrong";

    // إذا كان الخطأ نص مباشر
    if (typeof error === "string") {
      switch (error) {
        case "Network Error":
          return "Cannot connect to the server. Please check your internet connection.";
        case "Request failed with status code 404":
          return "The product you are looking for does not exist.";
        case "Request failed with status code 500":
          return "Server error. Please try again later.";
        default:
          return error; // إذا كان نص مفهوم، نعرضه
      }
    }

    // إذا كان الخطأ object من API
    if (typeof error === "object" && error.message) {
      return error.message;
    }

    return "Something went wrong. Please try again.";
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{getFriendlyError(error)}</h2>;
  if (!product) return <h2>No product found</h2>;
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };
  return (
    <>
      <Container sx={{ marginBottom: "30px", overflow: "hidden" }}>
        <Back />
        {/* Show product */}
        <Box>
          <CardMedia
            component="img"
            image={product.main_image}
            alt="green iguana"
            className="mb-4"
          />
          <Stack
            direction="row"
            spacing={2}
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
        {/*Top Activates */}
        <Box>
          <Typography sx={{ fontSize: "25px", fontWeight: "500" }}>
            Top Activates
          </Typography>
          <Grid container spacing={2} className="mt-4">
            {product.activities.map((item: any) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Card sx={{ boxShadow: "none" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140px"
                      image="/assets/destination/cardNewActivity/Depth 7, Frame 0.png"
                      alt="green iguana"
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
            {/* <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Card sx={{ boxShadow: "none" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/assets/destination/cardNewActivity/Depth 7, Frame 0 (1).png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontSize: "17px", fontWeight: "500" }}
                      component="div"
                    >
                      Visit the Grand Plaza
                    </Typography>
                    <Typography
                      className=" text-gray-500"
                      sx={{ fontSize: "14px", fontWeight: "400" }}
                    >
                      The heart of Eldoria, surrounded by historical buildings
                      and lively cafes.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Card sx={{ boxShadow: "none" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/assets/destination/cardNewActivity/Depth 7, Frame 0 (2).png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: "17px",
                        fontWeight: "500",
                        color: "#111928",
                      }}
                      component="div"
                    >
                      Visit the Grand Plaza
                    </Typography>
                    <Typography
                      className=" text-gray-500"
                      sx={{ fontSize: "14px", fontWeight: "400" }}
                    >
                      The heart of Eldoria, surrounded by historical buildings
                      and lively cafes.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Card sx={{ boxShadow: "none" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/assets/destination/cardNewActivity/Depth 7, Frame 0.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: "17px",
                        fontWeight: "500",
                        color: "#111928",
                      }}
                      component="div"
                    >
                      Visit the Grand Plaza
                    </Typography>
                    <Typography
                      className=" text-gray-500"
                      sx={{ fontSize: "14px", fontWeight: "400" }}
                    >
                      The heart of Eldoria, surrounded by historical buildings
                      and lively cafes.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid> */}
          </Grid>
        </Box>
        {/*Best Time to Visit */}
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
        {/*Gallery */}
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
            Gallery
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
            {product.gallery.map((item: any) => (
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
                  style={{
                    objectFit: "cover",
                  }}
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
              add Photo
            </Button>
          </div>
        </Box>
        {/*Reviews */}
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
                : product.reviews?.slice(0, 4) || []
              ).map((item: any, index: number) => (
                <Grid key={index} size={{ xs: 12, md: 6 }}>
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
            {product.reviews.length > 4 ? (
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
            ) : (
              ""
            )}
          </div>
        </Box>
      </Container>
      {/* Buying Button  */}
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
        <Stack
          direction="row"
          spacing={2}
          className="justify-between"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
          gap={2}
        >
          <Typography
            className="text-gray-900 xs:text-[16px] md:text-[30px] font-semibold "
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
