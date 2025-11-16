import { Check } from "lucide-react"
import image from "../../assets/done.png"
export default function Done() {
    return (
        <>
            <div className=" bg-[#F4F4F4] h-[772px] w-[608px] flex justify-center items-center  rounded-4xl">
                <img src={image} alt="" />
            </div>
            <div className="sm:w-1/2 ">
                <div className="mb-6 flex justify-center">

                    <div className="rounded-full bg-[#1DB954]  size-16 flex items-center justify-center ">
                        <Check size={40} color="white" />
                    </div>
                </div>

                <div className="text-center mb-8 ">
                    <h1 className="text-3xl font-medium text-gray-900 mb-2 capitalize">
                        password reset
                    </h1>

                    <p className="text-gray-500 text-lg">
                        your password has been successfully reset
                        <br />
                        click below to log in magically.
                    </p>
                </div>



                <button
                    className="w-full bg-main-color text-xl cursor-pointer hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition"
                >
                    Log In
                </button>
            </div>

        </>

    )
}
