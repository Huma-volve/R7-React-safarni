import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LanguageIcon from "@mui/icons-material/Language";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import Back from "../../components/back";


export default function Profile() {
    return (
        <div className="w-full min-h-screen text-[#111928]  pb-10">
            <Back />

            {/* Top Profile Section */}
            <div className="p-px rounded-xl bg-linear-to-b from-[#3F52B4] to-[#B22459]">
                <div
                    className="w-full text-[#111928] bg-white  p-8 flex items-center gap-5 rounded-xl ">

                    {/* Profile Image */}
                    <div className="relative">
                        <img
                            src="https://i.pravatar.cc/300"
                            alt="user"
                            className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
                        />

                        {/* Camera Icon */}
                        <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow">
                            <CameraAltIcon sx={{ fontSize: 22, color: "#2563eb" }} />
                        </div>
                    </div>

                    {/* Name + Email */}
                    <div>
                        <h2 className="text-2xl font-semibold">Knee Due</h2>
                        <p className="text-gray-400 text-lg">kneedue@gmail.com</p>
                    </div>
                </div>
            </div>


            {/* Menu Section */}
            <div className="p-px  rounded-2xl bg-linear-to-b from-[#3F52B4] to-[#B22459] mt-8">
                <div className="flex flex-col rounded-2xl bg-white gap-4 p-8 ">

                    {/* ITEM COMPONENT */}
                    <MenuItem
                        to={"/personal-information"}
                        icon={<PersonOutlineIcon sx={{ fontSize: 26, color: "#111" }} />}
                        title="Personal Info"
                    />

                    <MenuItem
                        to={"/my-booking"}

                        icon={<CalendarMonthIcon sx={{ fontSize: 26, color: "#111" }} />}
                        title="My Booking"
                    />

                    <MenuItem
                        to={"/account-security"}

                        icon={<LanguageIcon sx={{ fontSize: 26, color: "#111" }} />}
                        title="App Language"
                    />

                    <MenuItem
                        to={"/account-security"}

                        icon={<LockOutlinedIcon sx={{ fontSize: 26, color: "#111" }} />}
                        title="Account & Security"
                    />

                    {/* Logout */}
                    <div className="flex items-center justify-between bg-white py-4 px-5 rounded-[20px]  cursor-pointer">
                        <div className="flex items-center gap-3">
                            <LogoutIcon sx={{ fontSize: 26, color: "red" }} />
                            <p className="text-red-600 text-lg font-medium">Logout</p>
                        </div>
                    </div>

                </div>
            </div>


        </div >
    );
}


type MenuItemProps = {
    icon: ReactNode;
    title: string;
    to?: string;
};
/* Reusable Item Component */
function MenuItem({ icon, title, to }: MenuItemProps) {
    return (
        <Link to={to ?? "#"} className="flex items-center justify-between bg-white py-4 px-5 rounded-[20px] cursor-pointer">
            <div className="flex items-center gap-3">
                {icon}
                <p className="text-gray-800 text-lg font-medium">{title}</p>
            </div>
            <ArrowForwardIosIcon sx={{ fontSize: 20, color: "#666" }} />
        </Link>
    );
}
