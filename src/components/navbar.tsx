import { Search, SlidersHorizontal } from "lucide-react";
import profile from "../assets/profile.png"
import Logo from "./logo"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Navbar() {
  const path = useLocation()
  console.log(path.pathname)
  return (
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
          <Search className="w-5 h-5 text-gray-700 cursor-pointer hover:text-main-color" />
          <SlidersHorizontal className="w-5 h-5 text-gray-700 cursor-pointer hover:text-main-color" />
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
  );
}

export default Navbar;
