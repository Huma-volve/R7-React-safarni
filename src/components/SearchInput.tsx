import SearchIcon from "@mui/icons-material/Search";


export default function SearchInput() {
    return (
        <div className="w-full">
            <div className="border-[0.5px] mt-8 border-[#3354D8] bg-white rounded-full flex items-center px-5 py-3">
                <SearchIcon sx={{ color: "#3354D8", fontSize: 28 }} />

                <input
                    type="text"
                    placeholder="Paris"
                    className="ml-3 w-full outline-none text-gray-700 placeholder-gray-400 text-lg"
                />
            </div>
        </div>
    )
}
