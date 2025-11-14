import { Card, CardContent, Typography, Button} from "@mui/material";
// import searchIcon from "/assets/search-normal.png";
// import backIcon from "/assets/Back.png";
import { useNavigate } from "react-router-dom";
import iris from "/assets/iris 1.png";
const brands = [
    { name: "Mercedes", count: 32, logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" },
    { name: "Geely", count: 22, logo: "https://upload.wikimedia.org/wikipedia/en/2/28/Geely_Auto_logo.svg" },
    { name: "Jeep", count: 31, logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Jeep_logo.svg" },
    { name: "Subaru", count: 26, logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Subaru_logo.svg" },
    { name: "BMW", count: 12, logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
    { name: "Renault", count: 8, logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Renault_logo_2021.svg" },
    { name: "Porsche", count: 8, logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/Porsche_logo.svg" },
];

const cars: {
    name: string;
    image: string;
    transmission: string;
    seats: number;
    fuel: string;
    id: string;
}[] = [
    {
        name: "S 500 Sedan",
        transmission: "Automatic",
        seats: 5,
        id: "1",
        fuel: "Diesel",
        image: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my23/s/sedan/class-page/2023-S-SEDAN-CLASS-HIGHLIGHT-02-DR.jpg",
    },
    {
        name: "GLA 250 SUV",
        transmission: "Automatic",
        seats: 7,
        id: "2",
        fuel: "Diesel",
        image: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my23/gla/suv/class-page/2023-GLA-SUV-CLASS-HIGHLIGHT-02-DR.jpg",
    },
    {
        name: "Volvo XC40",
        transmission: "Automatic",
        seats: 5,
        id: "3",
        fuel: "Petrol",
        image: "https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my23/xc40-hybrid/gallery/xc40h-gallery-1-16x9.jpg",
    },
    {
        name: "Mazda CX-30",
        transmission: "Automatic",
        seats: 5,
        id: "4",
        fuel: "Diesel",
        image: "https://www.mazdausa.com/siteassets/vehicles/2024/cx-30/gallery/hero/2024-cx-30-gallery-hero-1.jpg",
    },
];




export default function Home() {
     const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[--color-gray-300] px-10 py-8 font-[--font-poppins]">
            <div className="flex justify-between gap-9">
                <img src={backIcon} className="cursor-pointer" />
                <form className=" w-full ">
                    <div className="relative ">
                        <div className="absolute h-full inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg
               bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
         dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                    </div>

                </form>
            </div>
            {/* Brands Section */}
            <Typography variant="h6" className="mb-4 font-bold text-[--color-dark-blue]">
                Brands
            </Typography>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 mb-10">
                {brands.map((brand) => (
                    <Card
                        key={brand.name}
                        className="flex flex-col items-center justify-center py-4 shadow-sm hover:shadow-md transition bg-[--color-white]"
                    >
                        <img src={brand.logo} alt={brand.name} className="h-10 mb-2" />
                        <Typography variant="body1" className="font-medium text-[--color-dark-blue]">
                            {brand.name}
                        </Typography>
                        <Typography variant="body2" className="text-[--color-blue-600]">
                            +{brand.count}
                        </Typography>
                    </Card>
                ))}
            </div>

            {/* Popular Cars Section */}
            <Typography variant="h6" className="mb-4 font-semibold text-dark-blue">
                Popular Cars
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cars.map((car) => (
                    <Card
                        key={car.name}
                        className="flex flex-col items-center p-4 border-0 hover:shadow-lg transition bg-white"
                    >
                        <div className="flex justify-between w-full items-center">
                            <Typography variant="h6" className="font-semibold text-dark-blue">
                                {car.name}
                            </Typography>
                            <img src={iris} alt={car.name} className="w-40 h-28 object-cover rounded-lg mr-4" />
                        </div>
                        <CardContent className="flex flex-col justify-between grow">

                            <div className="flex text-gray-500  text-sm mt-1 space-x-40">
                                <span>{car.transmission}</span>
                                <span>| {car.seats} seats</span>
                                <span>| {car.fuel}</span>
                            </div>
                            <div className="flex gap-2 mt-4">
                                <Button
                                onClick={()=>navigate("/map")}
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
                                onClick={()=>navigate(`/pickUp/${car.id}`)}
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
