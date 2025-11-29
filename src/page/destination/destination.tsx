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

import Rating from "@mui/material/Rating";
import { useState } from "react";
import { CameraAltOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Back from "../../components/back";
export default function Destination() {
  const [seeMore, SetSeeMore] = useState("hidden");
  const itemData = [
    {
      img: "/assets/destination/gallery/Frame 1464204002 (1).png",
      title: "Breakfast",
    },
    {
      img: "/assets/destination/gallery/Frame 1464204002.png",
      title: "Breakfast",
    },
    {
      img: "/assets/destination/gallery/Frame 1464204003 (1).png",
      title: "Breakfast",
    },
    {
      img: "/assets/destination/gallery/Frame 1464204003.png",
      title: "Breakfast",
    },
    {
      img: "/assets/destination/gallery/Frame 1464204164 (2).png",
      title: "Breakfast",
    },
    {
      img: "/assets/destination/gallery/Frame 1464204164.png",
      title: "Breakfast",
    },
    {
      img: "/assets/destination/gallery/Frame 1464204165 (1).png",
      title: "Breakfast",
    },
    {
      img: "/assets/destination/gallery/Frame 1464204166.png",
      title: "Breakfast",
    },
    {
      img: "/assets/destination/gallery/Frame 1464204167.png",
      title: "Breakfast",
    },
    {
      img: "/assets/destination/gallery/Frame 1464204168.png",
      title: "Breakfast",
    },
    {
      img: "/assets/destination/gallery/Frame 1464204169.png",
      title: "Breakfast",
    },
    {
      img: "/assets/destination/gallery/Frame 1464204169.png",
      title: "Breakfast",
    },
  ];
  return (
    <>
      <Container sx={{ marginBottom: "30px", overflow: "hidden" }}>
        <Back />
        {/* Show product */}
        <Box>
          <CardMedia
            component="img"
            image="/assets/destination/Depth6,Frame0.png"
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
              Eiffel Tower
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Rating
                name="half-rating"
                defaultValue={4.5}
                precision={0.5}
                size="small"
              />
              <Typography
                component="span"
                sx={{
                  fontSize: { xs: "12px", md: "18px" },
                  fontWeight: "600",
                  color: "#4B4F63",
                }}
              >
                4.5
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
              City Breaks
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "25px" },
                fontWeight: "500",
                color: "#4B5563",
              }}
            >
              7 Days and 6 Nights
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", md: "25px" },
                fontWeight: "500",
                color: "#4B5563",
              }}
            >
              Paris, France
            </Typography>
          </Stack>
        </Box>
        {/*Top Activates */}
        <Box>
          <Typography sx={{ fontSize: "25px", fontWeight: "500" }}>
            Top Activates
          </Typography>
          <Grid container spacing={2} className="mt-4">
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
            </Grid>
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
            Gallery<span className="text-indigo-600">(200)</span>
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
            {itemData.map((item) => (
              <Box
                key={item.img}
                sx={{
                  width: { xs: "163px", md: "180px" },
                  height: { xs: "127px", md: "180px" },
                }}
              >
                <img
                  src={item.img}
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
            className=" text-gray-900 "
            sx={{ fontSize: "25px", marginBottom: "20px", fontWeight: "500" }}
          >
            Reviews
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ height: { xs: "385px", md: "455px" }, overflowY: seeMore }}
            id="reviews-box"
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  maxWidth: { xs: 343, md: 608 },
                  margin: "auto",
                  height: { xs: 183, md: 214 },
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
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full"
                        src="/assets/destination/review/Icon Strategy.png"
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        Dale Thiel
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", md: "20px" },
                        fontWeight: "500",
                        color: "#4B5563",
                      }}
                    >
                      11 months ago
                    </Typography>
                  </Stack>
                  <Typography gutterBottom component="div">
                    <Rating
                      name="half-rating"
                      defaultValue={4.5}
                      precision={0.5}
                      size="medium"
                    />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "22px" },
                      fontWeight: "400",
                      color: "#2C2C2C",
                    }}
                  >
                    I really enjoyed my stay—the room was clean, the staff were
                    friendly, and everything I needed was nearby.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  maxWidth: { xs: 343, md: 608 },
                  margin: "auto",
                  height: { xs: 183, md: 214 },
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
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full"
                        src="/assets/destination/review/Icon Strategy.png"
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        Dale Thiel
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", md: "20px" },
                        fontWeight: "500",
                        color: "#4B5563",
                      }}
                    >
                      11 months ago
                    </Typography>
                  </Stack>
                  <Typography gutterBottom component="div">
                    <Rating
                      name="half-rating"
                      defaultValue={4.5}
                      precision={0.5}
                      size="medium"
                    />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "22px" },
                      fontWeight: "400",
                      color: "#2C2C2C",
                    }}
                  >
                    I really enjoyed my stay—the room was clean, the staff were
                    friendly, and everything I needed was nearby.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  maxWidth: { xs: 343, md: 608 },
                  margin: "auto",
                  height: { xs: 183, md: 214 },
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
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full"
                        src="/assets/destination/review/Icon Strategy.png"
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        Dale Thiel
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", md: "20px" },
                        fontWeight: "500",
                        color: "#4B5563",
                      }}
                    >
                      11 months ago
                    </Typography>
                  </Stack>
                  <Typography gutterBottom component="div">
                    <Rating
                      name="half-rating"
                      defaultValue={4.5}
                      precision={0.5}
                      size="medium"
                    />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "22px" },
                      fontWeight: "400",
                      color: "#2C2C2C",
                    }}
                  >
                    I really enjoyed my stay—the room was clean, the staff were
                    friendly, and everything I needed was nearby.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  maxWidth: { xs: 343, md: 608 },
                  margin: "auto",
                  height: { xs: 183, md: 214 },
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
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full"
                        src="/assets/destination/review/Icon Strategy.png"
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        Dale Thiel
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", md: "20px" },
                        fontWeight: "500",
                        color: "#4B5563",
                      }}
                    >
                      11 months ago
                    </Typography>
                  </Stack>
                  <Typography gutterBottom component="div">
                    <Rating
                      name="half-rating"
                      defaultValue={4.5}
                      precision={0.5}
                      size="medium"
                    />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "22px" },
                      fontWeight: "400",
                      color: "#2C2C2C",
                    }}
                  >
                    I really enjoyed my stay—the room was clean, the staff were
                    friendly, and everything I needed was nearby.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  maxWidth: { xs: 343, md: 608 },
                  margin: "auto",
                  height: { xs: 183, md: 214 },
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
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full"
                        src="/assets/destination/review/Icon Strategy.png"
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        Dale Thiel
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", md: "20px" },
                        fontWeight: "500",
                        color: "#4B5563",
                      }}
                    >
                      11 months ago
                    </Typography>
                  </Stack>
                  <Typography gutterBottom component="div">
                    <Rating
                      name="half-rating"
                      defaultValue={4.5}
                      precision={0.5}
                      size="medium"
                    />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "22px" },
                      fontWeight: "400",
                      color: "#2C2C2C",
                    }}
                  >
                    I really enjoyed my stay—the room was clean, the staff were
                    friendly, and everything I needed was nearby.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  maxWidth: { xs: 343, md: 608 },
                  margin: "auto",
                  height: { xs: 183, md: 214 },
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
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full"
                        src="/assets/destination/review/Icon Strategy.png"
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        Dale Thiel
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", md: "20px" },
                        fontWeight: "500",
                        color: "#4B5563",
                      }}
                    >
                      11 months ago
                    </Typography>
                  </Stack>
                  <Typography gutterBottom component="div">
                    <Rating
                      name="half-rating"
                      defaultValue={4.5}
                      precision={0.5}
                      size="medium"
                    />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "22px" },
                      fontWeight: "400",
                      color: "#2C2C2C",
                    }}
                  >
                    I really enjoyed my stay—the room was clean, the staff were
                    friendly, and everything I needed was nearby.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  maxWidth: { xs: 343, md: 608 },
                  margin: "auto",
                  height: { xs: 183, md: 214 },
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
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full"
                        src="/assets/destination/review/Icon Strategy.png"
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        Dale Thiel
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", md: "20px" },
                        fontWeight: "500",
                        color: "#4B5563",
                      }}
                    >
                      11 months ago
                    </Typography>
                  </Stack>
                  <Typography gutterBottom component="div">
                    <Rating
                      name="half-rating"
                      defaultValue={4.5}
                      precision={0.5}
                      size="medium"
                    />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "22px" },
                      fontWeight: "400",
                      color: "#2C2C2C",
                    }}
                  >
                    I really enjoyed my stay—the room was clean, the staff were
                    friendly, and everything I needed was nearby.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  maxWidth: { xs: 343, md: 608 },
                  margin: "auto",
                  height: { xs: 183, md: 214 },
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
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full"
                        src="/assets/destination/review/Icon Strategy.png"
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        Dale Thiel
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", md: "20px" },
                        fontWeight: "500",
                        color: "#4B5563",
                      }}
                    >
                      11 months ago
                    </Typography>
                  </Stack>
                  <Typography gutterBottom component="div">
                    <Rating
                      name="half-rating"
                      defaultValue={4.5}
                      precision={0.5}
                      size="medium"
                    />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "22px" },
                      fontWeight: "400",
                      color: "#2C2C2C",
                    }}
                  >
                    I really enjoyed my stay—the room was clean, the staff were
                    friendly, and everything I needed was nearby.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  maxWidth: { xs: 343, md: 608 },
                  margin: "auto",
                  height: { xs: 183, md: 214 },
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
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full"
                        src="/assets/destination/review/Icon Strategy.png"
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        Dale Thiel
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", md: "20px" },
                        fontWeight: "500",
                        color: "#4B5563",
                      }}
                    >
                      11 months ago
                    </Typography>
                  </Stack>
                  <Typography gutterBottom component="div">
                    <Rating
                      name="half-rating"
                      defaultValue={4.5}
                      precision={0.5}
                      size="medium"
                    />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "22px" },
                      fontWeight: "400",
                      color: "#2C2C2C",
                    }}
                  >
                    I really enjoyed my stay—the room was clean, the staff were
                    friendly, and everything I needed was nearby.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  maxWidth: { xs: 343, md: 608 },
                  margin: "auto",
                  height: { xs: 183, md: 214 },
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
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full"
                        src="/assets/destination/review/Icon Strategy.png"
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        Dale Thiel
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", md: "20px" },
                        fontWeight: "500",
                        color: "#4B5563",
                      }}
                    >
                      11 months ago
                    </Typography>
                  </Stack>
                  <Typography gutterBottom component="div">
                    <Rating
                      name="half-rating"
                      defaultValue={4.5}
                      precision={0.5}
                      size="medium"
                    />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "22px" },
                      fontWeight: "400",
                      color: "#2C2C2C",
                    }}
                  >
                    I really enjoyed my stay—the room was clean, the staff were
                    friendly, and everything I needed was nearby.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  maxWidth: { xs: 343, md: 608 },
                  margin: "auto",
                  height: { xs: 183, md: 214 },
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
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full"
                        src="/assets/destination/review/Icon Strategy.png"
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        Dale Thiel
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", md: "20px" },
                        fontWeight: "500",
                        color: "#4B5563",
                      }}
                    >
                      11 months ago
                    </Typography>
                  </Stack>
                  <Typography gutterBottom component="div">
                    <Rating
                      name="half-rating"
                      defaultValue={4.5}
                      precision={0.5}
                      size="medium"
                    />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "22px" },
                      fontWeight: "400",
                      color: "#2C2C2C",
                    }}
                  >
                    I really enjoyed my stay—the room was clean, the staff were
                    friendly, and everything I needed was nearby.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  maxWidth: { xs: 343, md: 608 },
                  margin: "auto",
                  height: { xs: 183, md: 214 },
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
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full"
                        src="/assets/destination/review/Icon Strategy.png"
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        Dale Thiel
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", md: "20px" },
                        fontWeight: "500",
                        color: "#4B5563",
                      }}
                    >
                      11 months ago
                    </Typography>
                  </Stack>
                  <Typography gutterBottom component="div">
                    <Rating
                      name="half-rating"
                      defaultValue={4.5}
                      precision={0.5}
                      size="medium"
                    />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "22px" },
                      fontWeight: "400",
                      color: "#2C2C2C",
                    }}
                  >
                    I really enjoyed my stay—the room was clean, the staff were
                    friendly, and everything I needed was nearby.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  maxWidth: { xs: 343, md: 608 },
                  margin: "auto",
                  height: { xs: 183, md: 214 },
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
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full"
                        src="/assets/destination/review/Icon Strategy.png"
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        Dale Thiel
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", md: "20px" },
                        fontWeight: "500",
                        color: "#4B5563",
                      }}
                    >
                      11 months ago
                    </Typography>
                  </Stack>
                  <Typography gutterBottom component="div">
                    <Rating
                      name="half-rating"
                      defaultValue={4.5}
                      precision={0.5}
                      size="medium"
                    />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "22px" },
                      fontWeight: "400",
                      color: "#2C2C2C",
                    }}
                  >
                    I really enjoyed my stay—the room was clean, the staff were
                    friendly, and everything I needed was nearby.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <div className=" text-center mt-[20px]">
            <Button
              variant="outlined"
              sx={{
                width: { xs: "210px", md: "510px" },
                fontSize: "20px",
                fontWeight: "600",
                textTransform: "none",
              }}
              onClick={() => {
                seeMore === "auto" ? SetSeeMore("hidden") : SetSeeMore("auto");
                setTimeout(() => {
                  const container = document.getElementById("reviews-box");
                  if (container) container.scrollTop = 0;
                }, 0);
              }}
            >
              {seeMore === "hidden" ? "See more" : "See less"}
            </Button>
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
          marginBottom: {xs:"90px",md:"0"},
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
              $150.00
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
