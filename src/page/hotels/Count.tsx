import { Container, Box, Typography, Stack, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Count() {
    const navigate = useNavigate();
    

    // Counters
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(1);
    const [infants, setInfants] = useState(1);

    const increment = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) =>
        setter(value + 1);

    const decrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) =>
        setter(value - 1);


    return (
        <Container maxWidth="lg" sx={{ pt: 4, pb: 6 }}>
            {/* Back Button */}
            <div
                className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => navigate(-1)}
            >
                <span className="text-xl">←</span>
            </div>

            <div className="flex flex-col md:flex-row gap-10 mt-6">
                {/* LEFT SIDE – ROOM IMAGE */}
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

                {/* RIGHT SIDE – COUNTERS */}
                <Box sx={{ width: { xs: "100%", md: "45%" } }}>
                    <div className="flex flex-col gap-10 md:mt-32 ">

                        {/* Adults */}
                        <div className="flex justify-between items-center border-b pb-4">
                            <div>
                                <Typography sx={{ fontSize: "24px", fontWeight: 500 }}>
                                    Adults
                                </Typography>
                                <Typography sx={{ color: "#4B5563" }}>
                                    Ages 18 Or Above
                                </Typography>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    className="w-8 h-8 bg-gray-200 rounded text-black"
                                    onClick={() => decrement(setAdults, adults)}
                                >
                                    -
                                </button>

                                <span className="text-lg font-medium w-4 text-center">
                                    {adults}
                                </span>

                                <button
                                    className="w-8 h-8 bg-blue-800 text-white rounded"
                                    onClick={() => increment(setAdults, adults)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Children */}
                        <div className="flex justify-between items-center border-b pb-4">
                            <div>
                                <Typography sx={{ fontSize: "24px", fontWeight: 500 }}>
                                    Children
                                </Typography>
                                <Typography sx={{ color: "#4B5563" }}>
                                    Ages 2–17
                                </Typography>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    className="w-8 h-8 bg-gray-200 rounded text-black"
                                    onClick={() => decrement(setChildren, children)}
                                >
                                    -
                                </button>

                                <span className="text-lg font-medium w-4 text-center">
                                    {children}
                                </span>

                                <button
                                    className="w-8 h-8 bg-blue-800 text-white rounded"
                                    onClick={() => increment(setChildren, children)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Infants */}
                        <div className="flex justify-between items-center border-b pb-4">
                            <div>
                                <Typography sx={{ fontSize: "24px", fontWeight: 500 }}>
                                    Infants
                                </Typography>
                                <Typography sx={{ color: "#4B5563" }}>
                                    Under Age 2
                                </Typography>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    className="w-8 h-8 bg-gray-200 rounded text-black"
                                    onClick={() => decrement(setInfants, infants)}
                                >
                                    -
                                </button>

                                <span className="text-lg font-medium w-4 text-center">
                                    {infants}
                                </span>

                                <button
                                    className="w-8 h-8 bg-blue-800 text-white rounded"
                                    onClick={() => increment(setInfants, infants)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* BOOK NOW */}
                        <Button
                            variant="contained"
                            sx={{
                                background: "#1E429F",
                                height: "56px",
                                borderRadius: "8px",
                                fontSize: "20px",
                                textTransform: "none",
                            }}
                            fullWidth
                            onClick={() => navigate("/paymentpage")}

                        >
                            Book Now
                        </Button>
                    </div>
                </Box>
            </div>
        </Container>
    );
}
