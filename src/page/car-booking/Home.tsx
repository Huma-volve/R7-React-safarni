import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import type { ChangeEvent } from "react";
import Back from "../../components/back";
import { cars, brands } from "./cars";

interface SearchInputProps {
    value?: string;
    onChange?: (value: string) => void;
}

export default function Home({ value, onChange }: SearchInputProps) {
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const filteredCars = cars.filter((car) =>
        car.name.toLowerCase().includes(value?.toLowerCase() || "")
    );

    return (
        <div className="min-h-screen bg-[--color-gray-300] px-10 pb-8 font-[--font-poppins]">
            {/* Search */}
            <div className="flex gap-3 items-center">
                <div className="relative -top-2.5">
                    <Back />
                </div>
            

                <div className="w-full">
                    <div className="border mt-8 bg-white rounded-2xl flex items-center px-5 py-2">
                        <SearchIcon sx={{ color: "#9CA3AF", fontSize: 28 }} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="ml-3 w-full outline-none text-gray-700 text-lg"
                            value={value}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            {/* Brands */}
            <Typography variant="h6" className="py-4 font-bold">
                Brands
            </Typography>

            <div className="mb-10 flex gap-4 justify-center">
                {brands.map((brand) => (
                    <Card
                        key={brand.id}
                        className="min-w-[150px]  flex flex-col items-center py-6 px-4 rounded-2xl shadow-md hover:shadow-lg "
                    >
                        <img
                            src={brand.image}
                            alt={brand.name}
                            className="w-14 h-14 object-contain"
                        />
                        <Typography className="mt-2 font-semibold">
                            {brand.name}
                        </Typography>
                    </Card>
                ))}
            </div>

            {/* Cars */}
            <Typography variant="h6" className="mb-4 font-semibold">
                Popular Cars
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCars.map((car) => (
                    <Card key={car.id} className="p-4 bg-white hover:shadow-lg">
                        <div className="flex justify-between items-center">
                            <Typography variant="h6">{car.name}</Typography>
                            <img
                                src={car.image}
                                alt={car.name}
                                className="w-40 h-28 object-cover rounded-lg"
                            />
                        </div>

                        <CardContent>
                            <div className="text-sm text-gray-500 flex gap-3">
                                <span>{car.transmission}</span>
                                <span>| {car.seats} seats</span>
                                <span>| {car.fuel}</span>
                            </div>

                            <div className="flex gap-2 mt-4">
                                <Button
                                    onClick={() => navigate("/map")}
                                    variant="contained"
                                    className="w-1/2"
                                >
                                    Rent Now
                                </Button>

                                <Button
                                    onClick={() =>
                                        navigate(`/car-booking/pickUp/${car.id}`)
                                    }
                                    variant="outlined"
                                    className="w-1/2"
                                >
                                    Detail
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
