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
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { CameraAlt } from "@mui/icons-material";
import { Link } from "react-router-dom";
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
      <Container
        sx={{ marginBottom: "30px", paddingLeft: "10px", paddingRight: "10px" }}
      >
        {/* return to home */}
        <Box sx={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Link to="/">
            <div className="bg-gray-100 rounded-full w-[40px] h-[40px] p-2 flex items-center justify-center">
              <NavigateBeforeIcon className="text-[24px]" />
            </div>
          </Link>
        </Box>
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
            <Typography component="div" className="text-[32px] font-semibold">
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
                className="text-[#4B4F63] font-semibold text-[12px]"
              >
                4.5
              </Typography>
              <Typography
                component="span"
                className="font-semibold text-gray-500"
              >
                (675)
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "space-between" },
            }}
            className="mb-6"
          >
            <Typography className="font-semibold text-gray-500">
              City Breaks
            </Typography>
            <Typography className="font-semibold text-gray-500">
              7 Days and 6 Nights
            </Typography>
            <Typography className="font-semibold text-gray-500">
              Paris, France
            </Typography>
          </Stack>
        </Box>
        {/*Top Activates */}
        <Box>
          <Typography className="font-semibold text-[25px]">
            Top Activates
          </Typography>
          <Grid container spacing={2} className="mt-4">
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
                      className="font-normal text-[17px]"
                      component="div"
                    >
                      Visit the Grand Plaza
                    </Typography>
                    <Typography className="font-semibold text-gray-500">
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
                      className="font-normal text-[17px]"
                      component="div"
                    >
                      Visit the Grand Plaza
                    </Typography>
                    <Typography className="font-semibold text-gray-500">
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
                      className="font-normal text-[17px]"
                      component="div"
                    >
                      Visit the Grand Plaza
                    </Typography>
                    <Typography className="font-semibold text-gray-500">
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
                      className="font-normal text-[17px]"
                      component="div"
                    >
                      Visit the Grand Plaza
                    </Typography>
                    <Typography className="font-semibold text-gray-500">
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
            sx={{ fontSize: "25px", marginBottom: "10px", fontWeight: "500" }}
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
            sx={{ fontSize: "25px", marginBottom: "20px", fontWeight: "500" }}
          >
            Gallery<span className="text-indigo-600">(200)</span>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              maxHeight: 400,
              overflowY: "auto",
            }}
          >
            {itemData.map((item) => (
              <Box key={item.img}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "185px",
                    height: "185px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            ))}
          </Box>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <Button
              className=""
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                textTransform: "none",
              }}
            >
              <CameraAlt sx={{ marginRight: "5px" }} />
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
            sx={{ height: { xs: "850px", md: "355px" }, overflowY: seeMore }}
            id="reviews-box"
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ maxWidth: 608, margin: "auto" }}>
                <CardActionArea>
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={2}
                      className="justify-between"
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
                        <Typography className="font-semibold text-[23px]">
                          Dale Thiel
                        </Typography>
                      </Stack>
                      <Typography className="text-gray-500 font-normal text-[20px]">
                        11 months ago
                      </Typography>
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div">
                      <Rating
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        size="small"
                      />
                    </Typography>
                    <Typography className="font-semibold text-[22px]">
                      I really enjoyed my stay—the room was clean, the staff
                      were friendly, and everything I needed was nearby.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ maxWidth: 608, margin: "auto" }}>
                <CardActionArea>
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={2}
                      className="justify-between"
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
                        <Typography className="font-semibold text-[23px]">
                          Dale Thiel
                        </Typography>
                      </Stack>
                      <Typography className="text-gray-500 font-normal text-[20px]">
                        11 months ago
                      </Typography>
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div">
                      <Rating
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        size="small"
                      />
                    </Typography>
                    <Typography className="font-semibold text-[22px]">
                      I really enjoyed my stay—the room was clean, the staff
                      were friendly, and everything I needed was nearby.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ maxWidth: 608, margin: "auto" }}>
                <CardActionArea>
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={2}
                      className="justify-between"
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
                        <Typography className="font-semibold text-[23px]">
                          Dale Thiel
                        </Typography>
                      </Stack>
                      <Typography className="text-gray-500 font-normal text-[20px]">
                        11 months ago
                      </Typography>
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div">
                      <Rating
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        size="small"
                      />
                    </Typography>
                    <Typography className="font-semibold text-[22px]">
                      I really enjoyed my stay—the room was clean, the staff
                      were friendly, and everything I needed was nearby.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ maxWidth: 608, margin: "auto" }}>
                <CardActionArea>
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={2}
                      className="justify-between"
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
                        <Typography className="font-semibold text-[23px]">
                          Dale Thiel
                        </Typography>
                      </Stack>
                      <Typography className="text-gray-500 font-normal text-[20px]">
                        11 months ago
                      </Typography>
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div">
                      <Rating
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        size="small"
                      />
                    </Typography>
                    <Typography className="font-semibold text-[22px]">
                      I really enjoyed my stay—the room was clean, the staff
                      were friendly, and everything I needed was nearby.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ maxWidth: 608, margin: "auto" }}>
                <CardActionArea>
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={2}
                      className="justify-between"
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
                        <Typography className="font-semibold text-[23px]">
                          Dale Thiel
                        </Typography>
                      </Stack>
                      <Typography className="text-gray-500 font-normal text-[20px]">
                        11 months ago
                      </Typography>
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div">
                      <Rating
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        size="small"
                      />
                    </Typography>
                    <Typography className="font-semibold text-[22px]">
                      I really enjoyed my stay—the room was clean, the staff
                      were friendly, and everything I needed was nearby.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ maxWidth: 608, margin: "auto" }}>
                <CardActionArea>
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={2}
                      className="justify-between"
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
                        <Typography className="font-semibold text-[23px]">
                          Dale Thiel
                        </Typography>
                      </Stack>
                      <Typography className="text-gray-500 font-normal text-[20px]">
                        11 months ago
                      </Typography>
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div">
                      <Rating
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        size="small"
                      />
                    </Typography>
                    <Typography className="font-semibold text-[22px]">
                      I really enjoyed my stay—the room was clean, the staff
                      were friendly, and everything I needed was nearby.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ maxWidth: 608, margin: "auto" }}>
                <CardActionArea>
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={2}
                      className="justify-between"
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
                        <Typography className="font-semibold text-[23px]">
                          Dale Thiel
                        </Typography>
                      </Stack>
                      <Typography className="text-gray-500 font-normal text-[20px]">
                        11 months ago
                      </Typography>
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div">
                      <Rating
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        size="small"
                      />
                    </Typography>
                    <Typography className="font-semibold text-[22px]">
                      I really enjoyed my stay—the room was clean, the staff
                      were friendly, and everything I needed was nearby.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ maxWidth: 608, margin: "auto" }}>
                <CardActionArea>
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={2}
                      className="justify-between"
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
                        <Typography className="font-semibold text-[23px]">
                          Dale Thiel
                        </Typography>
                      </Stack>
                      <Typography className="text-gray-500 font-normal text-[20px]">
                        11 months ago
                      </Typography>
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div">
                      <Rating
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        size="small"
                      />
                    </Typography>
                    <Typography className="font-semibold text-[22px]">
                      I really enjoyed my stay—the room was clean, the staff
                      were friendly, and everything I needed was nearby.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ maxWidth: 608, margin: "auto" }}>
                <CardActionArea>
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={2}
                      className="justify-between"
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
                        <Typography className="font-semibold text-[23px]">
                          Dale Thiel
                        </Typography>
                      </Stack>
                      <Typography className="text-gray-500 font-normal text-[20px]">
                        11 months ago
                      </Typography>
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div">
                      <Rating
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        size="small"
                      />
                    </Typography>
                    <Typography className="font-semibold text-[22px]">
                      I really enjoyed my stay—the room was clean, the staff
                      were friendly, and everything I needed was nearby.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ maxWidth: 608, margin: "auto" }}>
                <CardActionArea>
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={2}
                      className="justify-between"
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
                        <Typography className="font-semibold text-[23px]">
                          Dale Thiel
                        </Typography>
                      </Stack>
                      <Typography className="text-gray-500 font-normal text-[20px]">
                        11 months ago
                      </Typography>
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div">
                      <Rating
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        size="small"
                      />
                    </Typography>
                    <Typography className="font-semibold text-[22px]">
                      I really enjoyed my stay—the room was clean, the staff
                      were friendly, and everything I needed was nearby.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ maxWidth: 608, margin: "auto" }}>
                <CardActionArea>
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={2}
                      className="justify-between"
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
                        <Typography className="font-semibold text-[23px]">
                          Dale Thiel
                        </Typography>
                      </Stack>
                      <Typography className="text-gray-500 font-normal text-[20px]">
                        11 months ago
                      </Typography>
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div">
                      <Rating
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        size="small"
                      />
                    </Typography>
                    <Typography className="font-semibold text-[22px]">
                      I really enjoyed my stay—the room was clean, the staff
                      were friendly, and everything I needed was nearby.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
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
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          className="justify-between"
          sx={{
            marginTop: "20px",
            flexWrap: "wrap",
            justifyContent: {
              xs: "center",
              md: "space-between",
              alignItems: "center",
            },
          }}
          gap={2}
        >
          <Typography className="text-gray-900 text-[30px] font-semibold">
            Total price :{" "}
            <span className="text-indigo-600 text-[24px] font-normal">
              $150.00
            </span>
            <span className="text-[20px] font-normal">/night</span>
          </Typography>
          <Link to="/paymentpage" >
            <Button
              variant="contained"
              sx={{ width: "600px", textTransform: "none" }}
            >
              Book Now
            </Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
}
