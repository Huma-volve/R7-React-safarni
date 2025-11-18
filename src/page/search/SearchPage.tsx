import { useState } from 'react';
import SearchInput from '../../components/SearchInput'
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function SearchPage() {
    const [inputValue, setInputValue] = useState<string>("");

    return (
        <>
            <SearchInput value={inputValue} onChange={setInputValue} />
            <div className="flex items-center gap-4  mt-10">

                {/* Square Icon Box */}
                <div className="w-16 h-16 bg-[#e9f1ff] rounded-xl flex items-center justify-center">
                    <LocationOnOutlinedIcon sx={{ fontSize: 36, color: "#2F4FDB" }} />
                </div>

                {/* Text */}
                <p className="text-2xl font-semibold text-[#111928]">Paris...</p>

            </div>
        </>
    )
}
