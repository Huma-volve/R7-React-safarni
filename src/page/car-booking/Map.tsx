import { Typography, Button } from "@mui/material";
import carImage from "/assets/iris 1.png";
import map from "/assets/map.jpeg";
import { useNavigate } from "react-router-dom";
const Map = () => {
    
    // بيانات ثابتة — Fixed data
    const car = {
        id: 1,
        name: "S 500 Sedan",
        transmission: "Automatic",
        seats: 5,
        fuel: "Diesel",
        pricePerHour: 80,
        pricePerDay: 400,
    };

   const navigate = useNavigate();
    return (
            <div className="flex justify-center h-screen bg-cover" style={{ backgroundImage: `url(${map})` }}>

        <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col
          not-even:md:flex-row items-center gap-4 w-[600px] mt-auto mb-8">
            
            {/* CAR IMAGE */}
            <div className="md:order-2 shrink-0">
                <img
                    src={carImage}
                    alt={car.name}
                    className="w-full max-w-[200px] h-auto rounded-xl object-cover"
                />
            </div>

            {/* TEXT CONTENT */}
            <div className="md:order-1 flex-1">
                
                {/* Car Name */}
                <Typography variant="h6" className="font-bold text-gray-900 mb-2">
                    {car.name}
                </Typography>

                {/* Features */}
                <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-3">
                    <span>{car.transmission}</span>
                    <span className="border-l border-gray-300 pl-4">{car.seats} seats</span>
                    <span className="border-l border-gray-300 pl-4">{car.fuel}</span>
                </div>

                {/* Prices */}
                <div className="flex justify-between items-end mb-3">
                    <div>
                        <Typography variant="h5" className="font-bold text-gray-900">
                            ${car.pricePerHour}
                        </Typography>
                        <Typography variant="caption" className="text-gray-500">
                            per hour
                        </Typography>
                    </div>

                    <div>
                        <Typography variant="h5" className="font-bold text-gray-900">
                            ${car.pricePerDay}
                        </Typography>
                        <Typography variant="caption" className="text-gray-500">
                            per day
                        </Typography>
                    </div>
                </div>

                {/* Confirm Button */}
                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => {navigate("/paymentpage")}}
                    className="bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg font-semibold"
                >
                    Confirm
                </Button>
            </div>
        </div>
        </div>
    );
};

export default Map;