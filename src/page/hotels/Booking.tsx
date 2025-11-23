import { Box, Container, Stack, Typography, Button } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Booking() {
    const navigate = useNavigate();
const { pickId, roomId} = useParams();

    return (
        <Container sx={{ padding: "0px" }}>
            {/* ⬅️ Back Button */}
            <Box sx={{ paddingTop: "20px", paddingBottom: "20px" }}>
                <div
                    className="bg-gray-100 rounded-full w-[40px] h-[40px] p-2 flex items-center justify-center cursor-pointer"
                    onClick={() => navigate(-1)}
                >
                    <NavigateBeforeIcon className="text-[24px]" />
                </div>
            </Box>

            {/* ================================
          MAIN SECTION   (LEFT + RIGHT)
      ================================= */}
            <div className="flex flex-col md:flex-row gap-0 md:gap-[55px] justify-center md:justify-between">

                {/* =======================================
            LEFT SIDE — Main Image + Small Images
        ======================================== */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "608px" },
                        height: { xs: "293px", md: "670px" },
                        position: "relative",
                        marginTop: { xs: "40px", md: "0px" },
                    }}
                >
                    {/* Main Image */}
                    <img
                        src="/assets/hotel/b3a9e2ff9d8f7ff6d0d2d5a978121b2be110abda (1).jpg"
                        alt=""
                        className="xs:w-full md:w-[608px] h-full m-auto rounded-xl"
                    />

                    {/* Scrollable Small Images */}
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
                            />
                        ))}
                    </Stack>
                </Box>

                {/* =======================================
            RIGHT SIDE — FULL PANEL
        ======================================== */}
                <Box sx={{ width: { xs: "100%", md: "50%" }, mt: { xs: 4, md: 0 } }}>

                    {/* Discount + Rating */}
                    <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
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
                            ⭐ 4.5 (356 reviews)
                        </Typography>
                    </Stack>

                    {/* Title */}
                    <Typography
                        sx={{
                            fontSize: { xs: "16px", md: "31px" },
                            fontWeight: "500",
                            marginTop: "20px",
                        }}
                    >
                        HarborHaven Hideaway
                    </Typography>

                    {/* Location */}
                    <Typography
                        sx={{
                            fontSize: { xs: "14px", md: "17px" },
                            color: "#6B7280",
                        }}
                    >
                        1012 oscean avenue, New York, USA
                    </Typography>
<hr className="border-gray-300 my-2"  />
                    {/* Book Hotel Title */}
                    <Typography
                        sx={{
                            fontSize: { xs: "20px", md: "25px" },
                            textAlign: "center",
                            marginTop: "10px",
                            color: "#1E429F",
                            fontWeight: "500",
                        }}
                    >
                        Book Hotel
                    </Typography>

                    {/* =============================
                CHECK IN SECTION 
          ============================== */}
                    <Box sx={{ mt: 1 }}>
                        <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>Check In</Typography>

                        <div className="flex gap-3 mt-3">
                            {/* Selected Date */}
                            <div className="bg-[#EBF5FF] rounded-lg px-2 py-4 w-[143px] flex flex-col items-center">
                                <p className="text-[#1E429F] text-[13px] font-medium">Today</p>
                                <p className="text-[#1E429F] text-[16px] font-medium">4 Oct</p>
                            </div>

                            {/* Unselected Dates */}
                            {["6 Oct", "7 Oct", "8 Oct"].map((day, i) => (
                                <div
                                    key={i}
                                    className="border border-gray-300 rounded-lg px-2 py-4 w-[144px] flex flex-col items-center"
                                >
                                    <p className="text-gray-600 text-[13px] font-medium">Date</p>
                                    <p className="text-[#111928] text-[16px] font-medium">{day}</p>
                                </div>
                            ))}
                        </div>
                    </Box>

                    {/* =============================
                CHECK OUT SECTION 
          ============================== */}
                    <Box sx={{ mt: 2 }}>
                        <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>Check Out</Typography>

                        <div className="flex gap-3 mt-3">
                            {/* Selected */}
                            <div className="bg-[#EBF5FF] rounded-lg px-2 py-4 w-[143px] flex flex-col items-center">
                                <p className="text-[#1E429F] text-[13px] font-medium">Sun</p>
                                <p className="text-[#1E429F] text-[16px] font-medium">3 Nov</p>
                            </div>

                            {/* Unselected */}
                            {["4 Nov", "5 Nov", "6 Nov"].map((day, i) => (
                                <div
                                    key={i}
                                    className="border border-gray-300 rounded-lg px-2 py-4 w-[144px] flex flex-col items-center"
                                >
                                    <p className="text-gray-600 text-[13px] font-medium">Date</p>
                                    <p className="text-[#111928] text-[16px] font-medium">{day}</p>
                                </div>
                            ))}
                        </div>
                    </Box>

                    {/* =============================
                NOTE TO OWNER 
          ============================== */}
                    <Box sx={{ mt: 2 }}>
                        <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
                            Note To Owner
                        </Typography>

                        <textarea
                            className="w-full h-[120px] bg-[#F3F4F6] rounded-lg p-4 text-gray-700 text-[18px] outline-none mt-2"
                            placeholder="Enter here"
                        ></textarea>
                    </Box>

                    {/* =============================
                SUBMIT BUTTON 
          ============================== */}
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 1,
                            backgroundColor: "#1E429F",
                            height: "56px",
                            fontSize: "20px",
                            fontWeight: "600",
                            borderRadius: "10px",
                            textTransform: "capitalize",
                            ":hover": { backgroundColor: "#163984" },
                        }}
                            onClick={() => navigate(`/hotels/pickUp/${pickId}/room/${roomId}/count`)}
                    >
                        Submit
                    </Button>
                </Box>
            </div>
        </Container>
    );
}
