import { useState } from 'react';
import SearchInput from '../../components/SearchInput';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import axios from 'axios';

export default function SearchPage() {

    const [inputValue, setInputValue] = useState<string>("");

    async function search(query: string) { 
        try {
            const res = await axios.get(
                "https://round7-safarni-team-one.huma-volve.com/api/v1/search/quick",
                {
                    params: {
                        q: query,
                        limit: 10
                    }
                }
            );

            console.log("Search Result:", res.data.data);
        } catch (error) {
            console.error("Search Error:", error);
        }
    }

    return (
        <>
            <SearchInput
                value={inputValue}
                onChange={(value: string) => {
                    setInputValue(value);
                    search(value);
                }}
            />

            <div className="flex items-center gap-4 mt-10">
                <div className="w-16 h-16 bg-[#e9f1ff] rounded-xl flex items-center justify-center">
                    <LocationOnOutlinedIcon sx={{ fontSize: 36, color: "#2F4FDB" }} />
                </div>

                <p className="text-2xl font-semibold text-[#111928]">
                    {inputValue || "Paris..."}
                </p>
            </div>
        </>
    );
}
