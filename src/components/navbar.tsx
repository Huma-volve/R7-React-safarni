import { Search, SlidersHorizontal } from "lucide-react";
import profile from "../assets/profile.png"
import Logo from "./logo"
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="w-full bg-white ">
      <nav className=" flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Logo />

        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">
          <li className="text-[#1E429F] cursor-pointer hover:text-blue-800">Home</li>
          <li className="text-gray-800 hover:text-[#1E429F] cursor-pointer">Favorite</li>
          <li className="text-gray-800 hover:text-[#1E429F] cursor-pointer">Compare</li>
          <li className="text-gray-800 hover:text-[#1E429F] cursor-pointer">Maps</li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <Search className="w-5 h-5 text-gray-700 cursor-pointer hover:text-[#1E429F]" />
          <SlidersHorizontal className="w-5 h-5 text-gray-700 cursor-pointer hover:text-[#1E429F]" />
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
