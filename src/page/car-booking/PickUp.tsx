// src/pages/PickUpPage.tsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cars } from "./cars";
import type { Car } from "./cars"
import Ellipse from "/assets/Ellipse 7.png";
import iris1 from "/assets/iris 1.png";
import iris2 from "/assets/iris 2.png";
import iris3 from "/assets/iris 3.png";
import { Card, Typography, Button, TextField, Stack, Box } from "@mui/material";
import backIcon from "/assets/Back.png"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const images = [iris1, iris2, iris3];


const PlanCard: React.FC<{
    title: string;
    price: string;
    selected: boolean;
    onClick: () => void;
}> = ({ title, price, selected, onClick }) => {

  
    return (
        <Stack
            direction="row"
            onClick={onClick}
            className={` cursor-pointer rounded-lg border transition-shadow flex items-start justify-between ${selected ? "border-blue-300 shadow-md bg-[--color-white]" : "border-gray-200 bg-white/60"
                }`}
            style={selected ? { boxShadow: "0 6px 18px rgba(59,130,246,0.12)" } : {}}>
            {/* problem1 */}
            <Box
                sx={{
                    padding: "10px",
                    backgroundColor: selected ? "#E1EFFE" : "#F3F4F6",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100px",
                    width: "140px",
                    cursor: "pointer",
                }}
            >

                {/* Icon */}
                {title === "Hourly Rent" ? (
                    <AccessTimeIcon sx={{ color: selected ? "#1E429F" : "#6B7280", fontSize: 28 }} />
                ) : (
                    <CalendarMonthIcon sx={{ color: selected ? "#1E429F" : "#6B7280", fontSize: 28 }} />
                )}

                {/* Price Text */}
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        fontSize: "16px",
                        color: selected ? "#1E429F" : "#6B7280",
                        marginTop: "4px",
                    }}
                >
                    {price}
                </Typography>

            </Box>

            <div className="w-3/4 pt-4 pl-4">
                <Typography variant="subtitle1" className="font-semibold text-[--color-dark-blue]">
                    {title}
                </Typography>
                <Typography variant="body2" className="text-gray-300">
                    Best for business appointments
                </Typography>
            </div>
        </Stack>
    );
};

const PickUpPage: React.FC = () => {

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const car: Car | undefined = cars.find((c) => c.id === id);

    const [selectedPlan, setSelectedPlan] = useState<number>(0);
    const [location, setLocation] = useState<string>("");

const [currentIndex, setCurrentIndex] = useState(0);

const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
};

const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
};
    if (!car) {
        return (
            <div className="min-h- flex items-center justify-center">
                <Typography variant="h6">Car not found</Typography>
            </div>
        );
    }
    return (
       <div className="min-h-screen px-3 pb-20 py-10 font-[--font-poppins] lg:px-8">
    <img src={backIcon} onClick={() => navigate(-1)} />

    <Card className="p-6 border-none shadow-none">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Left: Image Section */}
            <div
                className="
                    relative
                    w-full
                    h-[420px]
                    sm:h-[500px]
                    lg:w-[608px]
                    lg:h-[650px]
                    bg-gray-100
                    rounded-[30px]
                    flex
                    items-center
                    justify-center
                "
            >
                <img
                    src={images[currentIndex]}
                    alt={car.name}
                    className="
                        w-[280px]
                        h-[220px]
                        sm:w-[400px]
                        sm:h-[300px]
                        lg:w-[550px]
                        lg:h-[450px]
                        p-6
                        lg:p-10
                        object-contain
                    "
                />

                <img
                    src={Ellipse}
                    alt="ellipse"
                    className="absolute hidden sm:block lg:bottom-40"
                />

                {/* Slider Buttons */}
                <div
                    className="
                        absolute
                        bottom-6
                        sm:bottom-16
                        lg:bottom-[140px]
                        left-1/2
                        w-[50px]
                        h-[50px]
                        -translate-x-1/2
                    "
                >
                    <div className="relative w-[60px] h-[60px] bg-white rounded-full shadow-md flex items-center justify-center">
                        <ArrowForwardIosIcon
                            onClick={handleNext}
                            className="absolute right-1.5 top-1/2 -translate-y-1/2"
                        />
                        <ArrowBackIosNewIcon
                            onClick={handlePrev}
                            className="absolute left-1.5 top-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2">
                <Typography
                    variant="h4"
                    className="pb-4 font-semibold text-[--color-dark-blue] mb-2"
                >
                    Popular
                </Typography>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                    <div className="p-2 h-[90px] w-full sm:w-40 bg-white rounded-lg border border-gray-100 text-center">
                        <Typography
                            variant="caption"
                            className="block text-[--color-gray-100]"
                        >
                            Power
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            className="font-semibold text-gray-500"
                        >
                            {car.power ?? "—"}
                        </Typography>
                    </div>

                    <div className="p-2 h-[90px] w-full sm:w-40 bg-white rounded-lg border border-gray-100 text-center">
                        <Typography
                            variant="caption"
                            className="block text-[--color-gray-100]"
                        >
                            Max Speed
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            className="font-semibold text-gray-500"
                        >
                            {car.maxSpeed ?? "—"}
                        </Typography>
                    </div>

                    <div className="p-2 h-[90px] w-full sm:w-40 bg-white rounded-lg border border-gray-100 text-center">
                        <Typography
                            variant="caption"
                            className="block text-[--color-gray-100]"
                        >
                            Acceleration
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            className="font-semibold text-gray-500"
                        >
                            {car.acceleration ?? "—"}
                        </Typography>
                    </div>
                </div>

                <Typography variant="h4" className="py-4 font-semibold">
                    Plan
                </Typography>

                <div className="space-y-5 mb-4">
                    <PlanCard
                        title="Hourly Rent"
                        price="$10"
                        selected={selectedPlan === 0}
                        onClick={() => setSelectedPlan(0)}
                    />
                    <PlanCard
                        title="Daily Rent"
                        price="$80"
                        selected={selectedPlan === 1}
                        onClick={() => setSelectedPlan(1)}
                    />
                </div>

                <div className="mb-4">
                    <Typography
                        variant="h6"
                        className="block text-[--color-gray-500] mb-1"
                    >
                        Location
                    </Typography>
                    <TextField
                        fullWidth
                        size="medium"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="200-298 Clipper St San Francisco"
                    />
                </div>

                <div className="flex items-center gap-3 mt-4">
                    <Button
                        onClick={() => {
                            navigate("/paymentpage");
                        }}
                        variant="contained"
                        className="w-full"
                        sx={{
                            textTransform: "none",
                            backgroundColor: "var(--color-blue-600)",
                            "&:hover": {
                                backgroundColor: "var(--color-blue-900)",
                            },
                        }}
                    >
                        Pick Up
                    </Button>
                </div>
            </div>
        </div>
    </Card>
</div>
    );
};

export default PickUpPage;
