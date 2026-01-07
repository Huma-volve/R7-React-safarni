import type { Hotel } from "./data";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
interface Props {
    hotel: Hotel;
    type?: "large" | "small";
    onClick?: () => void
}
const NearCard: React.FC<Props> = ({ hotel,onClick}) => {
    return (

        <div onClick={onClick} className="bg-white shadow-md rounded-3xl p-4 flex items-center gap-4 w-full hover:shadow-lg transition cursor-pointer">

            {/* IMAGE */}
            <img
                src={hotel.image}
                alt={hotel.name}
                className="w-28 h-28 rounded-2xl object-cover"
            />

            {/* RIGHT SECTION */}
            <div className="flex-1">

                {/* Discount + Rating */}
                <div className="flex justify-between items-center w-full">
                    <span className="text-[12px] font-medium bg-blue-100 text-blue-600 px-3 py-[4px] rounded-full">
                        {hotel.discount}
                    </span>

                    <div className="flex items-center gap-1">
                        <StarIcon sx={{ fontSize: 22, color: "#FBBF24" }} />
                        <span className="text-[16px] font-semibold">{hotel.rating}</span>
                    </div>
                </div>

                {/* Name */}
                <p className="mt-2 text-[20px] font-semibold text-gray-900">
                    {hotel.name}
                </p>

                {/* Location */}
                <div className="flex items-center text-gray-500 text-[15px] gap-1 mt-1">
                    <LocationOnIcon sx={{ fontSize: 20, color: "#9CA3AF" }} />
                    <span>{hotel.city}, {hotel.country}</span>
                </div>
            </div>
        </div>

    )
}

export default NearCard;