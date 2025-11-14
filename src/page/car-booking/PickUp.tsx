import { useParams, useNavigate } from "react-router-dom";
import { Card, Typography, Button } from "@mui/material";

export default function PickUp() {
    const { id } = useParams();
    const navigate = useNavigate();

    type Car = {
        name: string;
        image: string;
        transmission: string;
        seats: number;
        fuel: string;
    };

    const carsData: Record<string, Car> = {
        "1": { name: "Toyota Corolla", image: "/corolla.jpg", transmission: "Automatic", seats: 5, fuel: "Petrol" },
        "2": { name: "BMW X5", image: "/bmw-x5.jpg", transmission: "Automatic", seats: 7, fuel: "Diesel" },
    };

    const car = id ? carsData[id] : undefined;

    if (!car) return <p>Car not found!</p>;

    return (
        <div className="min-h-screen bg-[--color-gray-300] px-10 py-8 font-[--font-poppins]">
            <Card className="p-6 bg-[--color-white] shadow-md">
                <img src={car.image} alt={car.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                <Typography variant="h4" className="text-[--color-dark-blue] font-semibold mb-2">{car.name}</Typography>
                <Typography variant="body1" className="text-[--color-gray-700] mb-1">Transmission: {car.transmission}</Typography>
                <Typography variant="body1" className="text-[--color-gray-700] mb-1">Seats: {car.seats}</Typography>
                <Typography variant="body1" className="text-[--color-gray-700] mb-4">Fuel: {car.fuel}</Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "var(--color-blue-600)",
                        "&:hover": { backgroundColor: "var(--color-blue-900)" },
                        textTransform: "none",
                    }}
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </Button>
            </Card>
        </div>
    );
}
