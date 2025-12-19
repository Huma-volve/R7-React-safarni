
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import type { ChangeEvent } from "react";
import iris from "/assets/iris 1.png";
import Back from "../../components/back";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { fetchCars } from "../../store/carSlice";
import { fetchBrands } from "../../store/brandSlice";
import type { Brand } from "../../store/brandSlice";

interface SearchInputProps {
    value?: string;
    onChange?: (value: string) => void;
}


export default function Home({ value, onChange }: SearchInputProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const {
        data: cars,
        loading: carsLoading,
        error: carsError,
    } = useSelector((state: RootState) => state.cars);

    const {
        brands: brandsData,
        loading: brandsLoading,
        error: brandsError,
    } = useSelector((state: RootState) => state.brands);

    const brands = Array.isArray(brandsData) ? brandsData : [];
    const carsList = Array.isArray(cars) ? cars : [];

    useEffect(() => {
        dispatch(fetchCars());
        dispatch(fetchBrands());
    }, [dispatch]);

    if (carsLoading || brandsLoading) return <p>Loading...</p>;
    if (carsError) return <p>Error loading cars: {carsError}</p>;
    if (brandsError) return <p>Error loading brands: {brandsError}</p>;

    return (
        <div className="min-h-screen bg-[--color-gray-300] px-10 pb-8 font-[--font-poppins]">
            <div className="flex gap-3 align-center justify-center items-center">
                <div className="relative -top-2.5">
                    <Back />
                </div>

                <div className="w-full">
                    <div className="border-[0.5px] mt-8 border-[#9CA3AF] bg-white rounded-2xl flex items-center px-5 py-2">
                        <SearchIcon sx={{ color: "#9CA3AF", fontSize: 28 }} />

                        <input
                            type="text"
                            placeholder="Search"
                            className="ml-3 w-full outline-none text-gray-700 placeholder-[#9CA3AF] text-lg"
                            value={value}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <Typography variant="h6" className="py-4 font-bold text-[--color-dark-blue]">
                Brands
            </Typography>

            <div className="mb-10 flex gap-4 overflow-x-auto px-1 sm:grid sm:grid-cols-3 md:grid-cols-7 sm:overflow-visible">
                {brands.map((brand:Brand) => (
                    <Card
                        key={brand.id}
                        className="min-w-[150px] sm:min-w-0 flex flex-col items-center justify-center py-6 px-4 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-200"
                    >
                        <img
                            src={brand.image}
                            alt={brand.name}
                            className="w-16 h-16 object-cover rounded-full"
                        />
                        <Typography variant="body1" className="font-semibold text-gray-800">
                            {brand.name}
                        </Typography>
                    </Card>
                ))}
            </div>

            <Typography variant="h6" className="mb-4 font-semibold text-dark-blue">
                Popular Cars
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {carsList.map((car) => (
                    <Card
                        key={car.id}
                        className="flex flex-col p-4 border-0 hover:shadow-lg transition bg-white w-full"
                    >
                        <div className="flex flex-row justify-between items-center w-full gap-3">
                            <Typography variant="h6" className="font-semibold text-dark-blue">
                                {car.model}
                            </Typography>

                            <img
                                src={iris}
                                alt={car.model}
                                className="w-40 h-28 object-cover rounded-lg"
                            />
                        </div>

                        <CardContent className="flex flex-col justify-between grow w-full">
                            <div className="flex flex-wrap items-center text-gray-500 text-sm mt-2 gap-3">
                                <span>{car.transmission}</span>
                                <span>| {car.seats_count} seats</span>
                                <span>| {car.fuel_type}</span>
                            </div>

                            <div className="flex gap-2 mt-4 w-full">
                                <Button
                                    onClick={() => navigate("/map")}
                                    className="w-1/2"
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        backgroundColor: "var(--color-blue-600)",
                                        textTransform: "none",
                                        "&:hover": { backgroundColor: "var(--color-blue-900)" },
                                    }}
                                >
                                    Rent Now
                                </Button>

                                <Button
                                    onClick={() => navigate(`/car-booking/pickUp/${car.id}`)}
                                    variant="outlined"
                                    size="small"
                                    className="w-1/2"
                                    sx={{
                                        color: "var(--color-blue-600)",
                                        borderColor: "var(--color-blue-600)",
                                        textTransform: "none",
                                        "&:hover": {
                                            borderColor: "var(--color-blue-900)",
                                            color: "var(--color-blue-900)",
                                        },
                                    }}
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
