import image from "../../assets/getStarted.png"
export default function GetStarted() {
    return (
        <>
            <div className=" bg-[#F4F4F4]">
                <img src={image} alt="" />
            </div>
            <div className="sm:w-1/2 ">
                {/* Main Content */}
                <div className="flex flex-col items-center ">
                    <h1 className="text-3xl font-medium text-[#111928] mb-4">Welcome</h1>
                    <p className="text-[#4B5563] font-normal mb-6 leading-relaxed text-[21px] text-center">
                        Safarni is your all-in-one travel guide. Discover destinations, compare trip
                        prices, book flights, hotels, car rentals, and local tours — all through one
                        interactive experience.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-4">
                    <button className="bg-[#1E429F] cursor-pointer hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition">
                        Sign Up
                    </button>
                    <button className="border border-[#1E429F] cursor-pointer text-blue-600 font-semibold py-3 rounded-lg hover:bg-[#1E429F] hover:text-white transition">
                        Log In
                    </button>
                </div>
            </div>

        </>

    )
}
