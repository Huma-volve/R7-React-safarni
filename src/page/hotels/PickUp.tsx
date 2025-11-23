import Back from "../../components/back";
import {useParams, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import type { ChangeEvent } from "react";
import Typography from "@mui/material/Typography";

interface SearchInputProps {
    value?: string;
    onChange?: (value: string) => void;
}
type Tour = {
    id: number;
    title: string;
    image: string;
    price: string;
};

const toursData: Tour[] = [
    {
        id: 1,
        title: "Eiffel Tower",
        image:
            "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",

        price: "1050$",
    },
    {
        id: 2,
        title: "Paris City Tour",
        image:
            "https://images.pexels.com/photos/1796727/pexels-photo-1796727.jpeg",

        price: "1500$",
    },
    {
        id: 3,
        title: "River Cruise",
        image:
            "https://images.pexels.com/photos/1694351/pexels-photo-1694351.jpeg",

        price: "100$",
    },
    {
        id: 4,
        title: "Best of Swiss",
        image:
            "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg",

        price: "2200$",
    },
    {
        id: 5,
        title: "The Tour de France",
        image:
            "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg",

        price: "155$",
    },
    {
        id: 6,
        title: "Disneyland Paris",
        image:
            "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg",

        price: "2100$",
    },
    {
        id: 7,
        title: "Paris City Tour",
        image:
            "https://images.pexels.com/photos/1089309/pexels-photo-1089309.jpeg",

        price: "1500$",
    },
    {
        id: 8,
        title: "Disneyland Paris",
        image:
            "https://images.pexels.com/photos/1796797/pexels-photo-1796797.jpeg",

        price: "1050$",
    },
];

const PickUp: React.FC = ({ value, onChange }: SearchInputProps) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    const navigate = useNavigate()
    const { id } = useParams();
    return (
        <div className="min-h-screen px-8 pb-10">
            <div className="max-w-6xl mx-auto  ">
                <div className="flex gap-3 align-center justify-center items-center">
                    <div className="relative -top-2.5">
                        <Back />
                    </div>
                    <div className="w-full">
                        <div className="border-[0.5px] mt-8
                                    border-[#9CA3AF] bg-white rounded-2xl
                                    flex items-center px-5 py-2">
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
                <div className="flex justify-between items-center mb-3">
                    <Typography variant="h6" className="py-4 font-bold text-[--color-dark-blue]">
                        Available Rooms
                    </Typography>
                    <button className="text-blue-600 text-sm hover:underline">View all</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {toursData.map((tour) => (
                        <div
                        onClick={()=>{navigate(`/hotels/pickUp/${id}/room/${tour.id}`)
}}
                            key={tour.id}
                            className="bg-white rounded-2xl shadow-md p-3 border border-gray-200 hover:shadow-lg transition"
                        >
                            {/* Image section */}
                            <div className="relative">
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="w-full h-52 object-cover rounded-xl"
                                />
                            </div>
                            {/* Title */}
                            <h3 className="text-lg font-semibold mt-3">{tour.title}</h3>
                            {/* Price */}
                            <p className="text-gray-700 text-sm mt-1">
                                From <span className="text-blue-600 font-semibold">{tour.price}</span> per day
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}
export default PickUp