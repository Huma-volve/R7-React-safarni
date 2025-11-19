import image from "../../assets/forgetpassword.png"
import { Mail, KeyRound } from "lucide-react";

export default function GetStarted() {
    return (
        <>
            <div className=" bg-[#F4F4F4] sm:h-[772px] sm:w-[608px] flex justify-center items-center  rounded-4xl">
                <img src={image} alt="" />
            </div>
            <div className="sm:w-1/2 ">
                {/* Main Content */}
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                    <KeyRound size={40} className="text-gray-400 " />
                </div>

                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center capitalize">
                    Forgot Password?
                </h1>

                <p className="text-gray-500 text-center text-sm mb-10">
                    please enter your email to reset that password
                </p>

                {/* Form */}
                <form className="w-full  flex flex-col gap-6">
                    {/* Email */}
                    <div>
                        <label className="block text-sm text-gray-800 mb-2">Email</label>
                        <div className="flex items-center border border-gray-500 rounded-md px-3 py-2 bg-white">
                            <Mail size={18} className="text-gray-500 mr-2" />
                            <input
                                type="email"
                                placeholder="kneeDue@untitledui.com"
                                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
                            />
                        </div>
                    </div>

                    {/* Reset Button */}
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-main-color hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition"
                    >
                        Reset Password
                    </button>
                </form>
            </div>

        </>

    )
}
