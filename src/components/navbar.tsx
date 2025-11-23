import { Search, SlidersHorizontal } from "lucide-react";
import profile from "../assets/profile.png"
import Logo from "./logo"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import MapIcon from "@mui/icons-material/Map";


function Navbar() {
  const [active, setActive] = useState("home");

  const items = [
    { id: "home", label: "Home", to: "home", icon: <HomeIcon /> },
    { id: "favorite", label: "Favorite", to: "favorite", icon: <FavoriteBorderIcon /> },
    { id: "compare", label: "Compare", to: "compare", icon: <BalanceIcon /> },
    { id: "maps", label: "Maps", to: "maps", icon: <MapIcon /> },
  ];

  const path = useLocation()
  return (
    <>
      <div className="md:hidden fixed p-4  bottom-0 left-0 w-full bg-white shadow-lg rounded-t-3xl flex justify-around items-center py-4 z-50">
        {items.map((item) => {
          const isActive = active === item.id;

          return (
            <Link to={item.to}
              key={item.id}
              onClick={() => setActive(item.id)}
              className="flex flex-col items-center gap-1 text-sm"
            >
              {/* Active circle design */}
              <div
                className={`
                flex items-center justify-center w-14 h-14 rounded-full
                transition-all duration-300
                ${isActive
                    ? "bg-gradient-to-b from-blue-400 to-blue-600 text-white"
                    : "text-gray-500"
                  }
              `}
              >
                {/* Icon */}
                <div className={isActive ? "text-white" : "text-gray-600"}>
                  {item.icon}
                </div>
              </div>

              {/* Text */}
              <span
                className={
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-gray-500"
                }
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
      <header className="w-full bg-white ">
        <nav className=" flex items-center justify-between py-4 px-6 h-24">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">
            <Link to={"home"} >
              <li className={` hover:text-blue-800 ${path.pathname === "/home" ? 'text-main-color' : 'text-[#111928]'}`}>
                Home
              </li>
            </Link>

            <Link to={"favorite"}>
              <li className={`  hover:text-blue-800 ${path.pathname === "/favorite" ? 'text-main-color' : 'text-[#111928]'}`}>
                Favorite
              </li>
            </Link>
            <Link to={"compare"}>
              <li className={`  hover:text-blue-800 ${path.pathname === "/compare" ? 'text-main-color' : 'text-[#111928]'}`}>
                Compare
              </li>
            </Link>

            <Link to={"maps"}>
              <li className={`  hover:text-blue-800 ${path.pathname === "/maps" ? 'text-main-color' : 'text-[#111928]'}`}>
                Maps
              </li>
            </Link>

          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <Link to={"/search"}>
              <Search className="w-5 h-5 text-gray-700 cursor-pointer hover:text-main-color" />
            </Link>
            <Link to={"/filters-panel"}>
              <SlidersHorizontal className="w-5 h-5 text-gray-700 cursor-pointer hover:text-main-color" />
            </Link>

            <Link to={"/profile"}>
              <img
                src={profile}
                alt="User"
                className="w-9 h-9 rounded-full object-cover cursor-pointer"
              />
            </Link>

          </div>
        </nav>
      </header>
    </>

  );
}

export default Navbar;
