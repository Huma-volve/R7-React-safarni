import React, { useState } from "react";
import {
    Container,
    Box,
    Stack,
    Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";

// =====================
// Dummy Hotel Data
// =====================
interface HotelData {
    name: string;
    address: string;
    discount: string;
    avgRating: number;
    totalReviews: number;
}

const hotelData: HotelData = {
    name: "HarborHaven Hideaway",
    address: "1012 Ocean Avenue, New York, USA",
    discount: "20% Off",
    avgRating: 4.5,
    totalReviews: 356,
};

const HotelReviewForm: React.FC = () => {
    const [rating, setRating] = useState<number>(0);
    const [reviewText, setReviewText] = useState<string>("");
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log({
            rating,
            review: reviewText,
            image: selectedImage,
        });

        alert("تم إرسال المراجعة!");
    };

    return (
        <Container sx={{ padding: 0 }}>
            {/* Back */}
            <Box sx={{ paddingY: "20px" }}>
                <div
                    className="bg-gray-100 rounded-full w-[40px] h-[40px] p-2 flex items-center justify-center cursor-pointer"
                    onClick={() => navigate(-1)}
                >
                    <NavigateBeforeIcon className="text-[24px]" />
                </div>
            </Box>

            {/* Main Flex Layout */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-14">

                {/* LEFT SIDE - Images */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "608px" },
                        height: { xs: "300px", md: "650px" },
                        position: "relative",
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

                {/* RIGHT SIDE */}
                <div className="md:w-1/2 space-y-6">

                    {/* Discount + Rating */}
                    <div className="flex justify-between items-center">
                        <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">
                            {hotelData.discount}
                        </div>

                        <div className="flex items-center space-x-1 text-yellow-400">
                            <StarIcon fontSize="small" />
                            <span className="text-gray-500 font-medium">
                                {hotelData.avgRating} ({hotelData.totalReviews} Reviews)
                            </span>
                        </div>
                    </div>

                    {/* Name + Address */}
                    <div>
                        <h1 className="text-2xl font-bold text-gray-700">{hotelData.name}</h1>
                        <p className="text-gray-500 mt-1">{hotelData.address}</p>
                    </div>

                    <hr className="border-gray-300" />

                    {/* Rating Stars */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-medium text-gray-600">
                            Your Overall Rating
                        </h2>

                        <div className="flex justify-center space-x-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    onClick={() => setRating(star)}
                                >
                                    {star <= rating ? (
                                        <StarIcon className="text-yellow-400" fontSize="large" />
                                    ) : (
                                        <StarBorderIcon className="text-yellow-400" fontSize="large" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Review Textarea */}
                    <div>
                        <label className="block text-gray-600 mb-2">
                            Add detailed review
                        </label>

                        <textarea
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            placeholder="Enter here"
                            className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg resize-none h-40"
                        />
                    </div>

                    {/* Add Photo */}
                    <div className="flex items-center space-x-2 text-blue-500 cursor-pointer">
                        <PhotoCameraIcon fontSize="small" />
                        <label htmlFor="photo-upload" className="font-medium cursor-pointer">
                            Add Photo
                        </label>

                        <input
                            id="photo-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => setSelectedImage(e.target.files?.[0] || null)}
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleSubmit}
                        className="bg-blue-900 hover:bg-blue-800 py-4 text-lg font-semibold"
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default HotelReviewForm;