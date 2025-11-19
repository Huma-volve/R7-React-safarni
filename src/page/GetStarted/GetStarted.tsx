import { Link } from "react-router-dom"
import image from "../../assets/getStarted.png"
export default function GetStarted() {
    return (
        <>
            <div className=" bg-[#F4F4F4] sm:h-[772px] sm:w-[608px] flex justify-center items-center  rounded-4xl">
                <img src={image} alt="" />
            </div>
            <div className="sm:w-1/2 ">
                {/* Main Content */}
                <div className="flex flex-col items-center ">
                    <h1 className="text-3xl font-medium text-gray-900 mb-4">Welcome</h1>
                    <p className="text-gray-600 font-normal mb-6 leading-relaxed text-[21px] text-center">
                        Safarni is your all-in-one travel guide. Discover destinations, compare trip
                        prices, book flights, hotels, car rentals, and local tours — all through one
                        interactive experience.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-4">
                    <Link to="/signup" className="bg-main-color text-center cursor-pointer border hover:text-main-color hover:border-main-color hover:bg-transparent text-white font-semibold py-3 rounded-lg transition">
                        Sign Up
                    </Link>
                    <Link to="/login" className="border text-center border-main-colorcursor-pointer text-blue-600 font-semibold py-3 rounded-lg hover:bg-main-color hover:text-white transition">
                        Log In
                    </Link>
                </div>
            </div>

        </>

    )
}
