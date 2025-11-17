import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

export default function info() {
    return (
        <div className="p-px rounded-2xl bg-linear-to-r from-[#3F52B4] to-[#B22459]">
            <div className="text-white bg-white rounded-2xl p-10">

                <h1 className="text-center text-3xl font-semibold text-[#111928] mb-10 capitalize">
                    personal information
                </h1>

                {/* Name */}
                <div className="mb-6">
                    <label className="text-gray-800 text-lg font-semibold">Name</label>
                    <div className="w-full mt-2 p-4 rounded-xl border-gray-300 border bg-white flex items-center gap-3">
                        <PersonOutlineIcon sx={{ fontSize: 24, color: "#999" }} />
                        <input
                            type="text"
                            placeholder="kneeDue"
                            className="w-full outline-none text-[#111928] text-lg"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="mb-6">
                    <label className="text-gray-800 text-lg font-semibold">Email</label>
                    <div className="w-full mt-2 p-4 rounded-xl border-gray-300 border bg-white flex items-center gap-3">
                        <MailOutlineIcon sx={{ fontSize: 24, color: "#999" }} />
                        <input
                            type="email"
                            placeholder="kneeDue@untitledui.com"
                            className="w-full outline-none text-[#111928] text-lg"
                        />
                    </div>
                </div>

                {/* Location */}
                <div className="mb-6">
                    <label className="text-gray-800 text-lg font-semibold">Location</label>
                    <div className="w-full mt-2 p-4 rounded-xl border-gray-300 border bg-white flex items-center gap-3">
                        <LocationOnIcon sx={{ fontSize: 24, color: "#999" }} />
                        <input
                            type="text"
                            placeholder="200–298 Clipper St San Francisco"
                            className="w-full outline-none text-[#111928] text-lg"
                        />
                    </div>
                </div>

                {/* Phone */}
                <div className="mb-6">
                    <label className="text-gray-800 text-lg font-semibold">Phone Number</label>
                    <div className="w-full mt-2 p-4 rounded-xl border-gray-300 border bg-white flex items-center gap-3">
                        <PhoneIphoneIcon sx={{ fontSize: 24, color: "#999" }} />
                        <input
                            type="text"
                            placeholder="kneedue@untitledui.com"
                            className="w-full outline-none text-[#111928] text-lg"
                        />
                    </div>
                </div>

            </div>
        </div>

    )
}
