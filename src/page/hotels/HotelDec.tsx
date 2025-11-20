import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Card,
  CardContent,
  Rating,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Bed, CameraAltOutlined, Shower, Square } from "@mui/icons-material";
import { WrapText } from "lucide-react";
import { useMemo, useState } from "react";
import SearchInput from "../../components/SearchInput";
import {
  IconButton,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

/**
 * صورة المصدر -- استخدم المسار المحلي الذي رفعته
 * (سيتم تحويله ل URL في البيئة التي تعمل عليها)
 */
const IMAGE_SRC = "/mnt/data/23ac8f87-7eda-4610-857e-bb79f183a38e.png";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function HotelDec() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm")); // phones
  const isMd = useMediaQuery(theme.breakpoints.between("sm", "md")); // tablets
  const fullText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

  const [showMore, setShowMore] = useState(false);

  // نحدد النص اللي هيظهر قبل الضغط
  const previewText = fullText.slice(0, 100); // أول 100 حرف مثلا
  // عرض العناصر في صفحة واحدة يعتمد على العرض:
  // desktop: 8 (4 cols x 2 rows), tablet: 6 (3x2), mobile: 2 (1x2 or 2x1)
  const itemsPerPage = isSm ? 2 : isMd ? 6 : 8;
  let images = [
    "/assets/hotel/Frame 1464204164 (4).png",
    "/assets/hotel/Frame 1464204164 (4).png",
    "/assets/hotel/Frame 1464204164 (4).png",
    "/assets/hotel/Frame 1464204164 (4).png",
    "/assets/hotel/Frame 1464204164 (4).png",
    "/assets/hotel/Frame 1464204164 (4).png",
    "/assets/hotel/Frame 1464204164 (4).png",
    "/assets/hotel/Frame 1464204164 (4).png",
    "/assets/hotel/Frame 1464204164 (4).png",
    "/assets/hotel/Frame 1464204164 (4).png",
    "/assets/hotel/Frame 1464204164 (4).png",
    "/assets/hotel/Frame 1464204164 (4).png",
  ];
  // إذا المستخدم ما مررش images، نكرّر نفس الصورة لملء الأمثلة
  const imgs = useMemo(
    () =>
      (images && images.length > 0
        ? images
        : Array.from({ length: 12 }).map((_) => IMAGE_SRC)
      ).map((src, idx) => ({ src, id: idx })),
    [images]
  );

  const pages = Math.ceil(imgs.length / itemsPerPage);
  const [page, setPage] = useState(0);

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(pages - 1, p + 1));

  // slice الصور الحالية للعرض (page-wise)
  const start = page * itemsPerPage;
  const visible = imgs.slice(start, start + itemsPerPage);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container sx={{ padding: "0px" }}>
      <div className="flex flex-col md:flex-row gap-0 md:gap-[55px] justify-center md:justify-between">
        <Box
          sx={{
            width: { xs: "100%", md: "608px" },
            height: { xs: "293px", md: "702px" },
            position: "relative",
          }}
        >
          <img
            src="/assets/hotel/b3a9e2ff9d8f7ff6d0d2d5a978121b2be110abda (1).jpg"
            alt=""
            className="xs:w-full md:w-[608px] h-full m-[auto] rounded-xl"
          />
          <Stack
            direction="row"
            sx={{
              position: "absolute",
              top: { xs: "70%", md: "80%" },
              left: "50%",
              transform: {
                xs: "translate(-50%, -30%)",
                md: "translate(-50%, -20%)",
              },
              width: { xs: "90%", sm: "60%", md: "528px" },
              height: { xs: 60, md: 117 },
              overflowX: "auto",
              overflowY: "hidden",
              gap: { xs: 1, md: 2 },
              background: "white",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 2,
              px: 1,
            }}
          >
            {[
              "/assets/hotel/Frame 1464203978.png",
              "/assets/hotel/Frame 1464203980.png",
              "/assets/hotel/Frame 1464203981.png",
              "/assets/hotel/Frame 1464203983.png",
              "/assets/hotel/Frame 1464203984.png",
            ].map((src, idx) => (
              <Box
                key={idx}
                component="img"
                src={src}
                sx={{
                  width: { xs: 52, md: 85 },
                  height: { xs: 52, md: 85 },
                  flexShrink: 0,
                  borderRadius: 1,
                }}
                alt={`thumb-${idx}`}
              />
            ))}
          </Stack>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "50%" }, mt: { xs: 4, md: 0 } }}>
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography
              sx={{
                padding: "8px 24px",
                backgroundColor: "#EBF5FF",
                fontSize: "14px",
                fontWeight: "500",
                borderRadius: "20px",
              }}
            >
              20%Off
            </Typography>
            <Typography sx={{ fontSize: "17px", fontWeight: "600" }}>
              ⭐ 4.5(356 reviews)
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "31px" },
              fontWeight: "500",
              marginTop: "20px",
            }}
          >
            HarborHaven HIdeaway
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "17px" },
              fontWeight: "400",
              color: "#6B7280",
            }}
          >
            1012 oscean avanue, New Yourk ,USA
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                justifyContent: "space-between",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{
                  "& .MuiTabs-flexContainer": {
                    justifyContent: "space-between",
                  },
                }}
              >
                <Tab
                  label="About"
                  {...a11yProps(0)}
                  sx={{
                    fontSize: { xs: "14px", md: "21px" },
                    fontWeight: "500",
                    color: "black", // اللون العادي
                    "&.Mui-selected": {
                      color: "blue", // اللون عند التحديد
                    },
                  }}
                />
                <Tab
                  label="Gallery"
                  {...a11yProps(1)}
                  sx={{
                    fontSize: { xs: "14px", md: "21px" },
                    fontWeight: "500",
                    color: "black", // اللون العادي
                    "&.Mui-selected": {
                      color: "blue", // اللون عند التحديد
                    },
                  }}
                />
                <Tab
                  label="Review"
                  {...a11yProps(2)}
                  sx={{
                    fontSize: { xs: "14px", md: "21px" },
                    fontWeight: "500",
                    color: "black", // اللون العادي
                    "&.Mui-selected": {
                      color: "blue", // اللون عند التحديد
                    },
                  }}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Stack
                direction={"row"}
                sx={{ justifyContent: "space-between", marginTop: "20px" }}
              >
                <Stack
                  direction={"row"}
                  sx={{
                    fontSize: { xs: "14px", md: "22px" },
                    fontWeight: "400",
                    alignItems: "center",
                    justifyContent: "center",
                    alignItem: "center",
                  }}
                >
                  <Bed
                    fontSize={"medium"}
                    sx={{ color: "blue", marginRight: "10px" }}
                  />
                  3Beds
                </Stack>
                <Stack
                  direction={"row"}
                  sx={{
                    fontSize: { xs: "14px", md: "22px" },
                    fontWeight: "400",
                    alignItems: "center",
                    justifyContent: "center",
                    alignItem: "center",
                  }}
                >
                  <Shower
                    fontSize="medium"
                    sx={{ color: "blue", marginRight: "10px" }}
                  />
                  2 Bath
                </Stack>
                <Stack
                  direction={"row"}
                  sx={{
                    fontSize: { xs: "14px", md: "22px" },
                    fontWeight: "400",
                    alignItems: "center",
                    justifyContent: "center",
                    alignItem: "center",
                  }}
                >
                  <Square
                    fontSize="medium"
                    sx={{ color: "blue", marginRight: "10px" }}
                  />
                  1848 Sqrt
                </Stack>
              </Stack>
              <Stack
                direction={"row"}
                sx={{ justifyContent: "space-between", margin: "20px 0" }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "25px" },
                    fontWeight: "500",
                  }}
                >
                  Gallery<span className="text-[#1E429F]">(200)</span>
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "20px" },
                    fontWeight: "500",
                    color: "#1E429F",
                  }}
                >
                  <CameraAltOutlined sx={{ marginRight: "10px" }} />
                  add Photo
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "20px" },
                  fontWeight: "400",
                  color: "#6B7280",
                }}
              >
                {showMore ? fullText : previewText + "... "}
                <Button
                  onClick={() => setShowMore((prev) => !prev)}
                  sx={{
                    textTransform: "none",
                    fontWeight: "500",
                    fontSize: { xs: "14px", md: "18px" },
                    padding: 0,
                    minWidth: 0,
                  }}
                >
                  {showMore ? "Read Less" : "Read More"}
                </Button>
              </Typography>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Stack
                direction={"row"}
                sx={{ justifyContent: "space-between", marginTop: "20px" }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "25px" },
                    fontWeight: "500",
                  }}
                >
                  Gallery<span className="text-[#1E429F]">(200)</span>
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "20px" },
                    fontWeight: "500",
                    color: "#1E429F",
                  }}
                >
                  <CameraAltOutlined sx={{ marginRight: "10px" }} />
                  add Photo
                </Typography>
              </Stack>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 960,
                  margin: "0 auto",
                  px: 2,
                  py: 2,
                }}
              >
                {/* Left arrow */}
                <IconButton
                  onClick={goPrev}
                  disabled={page === 0}
                  sx={{
                    position: "absolute",
                    left: -28,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    bgcolor: "background.paper",
                    boxShadow: 1,
                  }}
                  aria-label="previous"
                >
                  <ChevronLeftIcon />
                </IconButton>

                {/* Right arrow */}
                <IconButton
                  onClick={goNext}
                  disabled={page >= pages - 1}
                  sx={{
                    position: "absolute",
                    right: -28,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    bgcolor: "background.paper",
                    boxShadow: 1,
                  }}
                  aria-label="next"
                >
                  <ChevronRightIcon />
                </IconButton>

                {/* Grid viewport */}
                <Paper
                  elevation={0}
                  sx={{
                    overflow: "hidden",
                    borderRadius: 2,
                    p: 1,
                    backgroundColor: "transparent",
                  }}
                >
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      transition: "all 400ms ease",
                      // نعرض العنصرين/الثلاثة/الثمانية بطريقة grid متناسقة:
                    }}
                  >
                    {visible.map((img: any) => (
                      <Grid
                        size={{ xs: 6, sm: 4, md: 3 }}
                        key={img.id}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: "115px", // العرض ثابت
                            height: "115px", // الارتفاع ثابت
                            borderRadius: 2,
                            overflow: "hidden",
                            boxShadow: 2,
                            cursor: "pointer",
                            transition:
                              "transform 200ms ease, box-shadow 200ms ease",
                            "&:hover": {
                              transform: "scale(1.03)",
                              boxShadow: 6,
                            },
                          }}
                        >
                          <img
                            src={img.src}
                            alt={`thumb-${img.id}`}
                            style={{
                              width: "115px", // نفس عرض الـ Box
                              height: "115px", // نفس ارتفاع الـ Box
                              objectFit: "cover", // تغطية كاملة بدون تشويه
                              display: "block",
                            }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Stack
                direction={"row"}
                sx={{ justifyContent: "space-between", marginTop: "20px" }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "25px" },
                    fontWeight: "500",
                  }}
                >
                  Review
                </Typography>
                <Button
                  sx={{
                    fontSize: { xs: "14px", md: "20px" },
                    fontWeight: "500",
                    color: "#1E429F",
                  }}
                >
                  <WrapText className="mr-2" />
                  add review
                </Button>
              </Stack>
              <SearchInput />
              <Card
                sx={{
                  maxWidth: { xs: 343, md: 608 },
                  margin: "auto",
                  height: { xs: 183, md: 214 },
                  padding: "8px",
                  boxShadow: "none",
                }}
              >
                <CardContent sx={{ padding: "0" }}>
                  <Stack
                    direction="row"
                    spacing={2}
                    className="justify-between"
                    alignItems="center"
                    sx={{ marginTop: "20px" }}
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
                          fontSize: { xs: { xs: "18px" }, md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        Dale Thiel
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: { xs: { xs: "13px" }, md: "20px" },
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
                      fontSize: { xs: { xs: "16px" }, md: "22px" },
                      fontWeight: "400",
                      color: "#2C2C2C",
                    }}
                  >
                    I really enjoyed my stay—the room was clean, the staff were
                    friendly, and everything I needed was nearby.
                  </Typography>
                </CardContent>
              </Card>
            </CustomTabPanel>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "26px" },
              fontWeight: "600",
              margin: "20px 0",
            }}
          >
            Total price : <span className="text-[#1E429F]">$150.00</span>
            <span className="text-gray-600 sm:text-[14px] text-[22px]">
              /night
            </span>
          </Typography>
          <Button
            variant="contained"
            fullWidth
            // onClick={handleSubmit}
            sx={{
              backgroundColor: "#1E429F",
              fontSize: "20px",
              fontWeight: "600",
              padding: "8px 16px",
              textTransform: "none",
            }}
          >
            Book Now
          </Button>
        </Box>
      </div>
    </Container>
  );
}
