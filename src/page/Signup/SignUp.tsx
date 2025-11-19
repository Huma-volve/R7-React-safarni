import image from "../../assets/signin.png"
import { User, Mail, Lock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom"

export default function GetStarted() {
    return (
        <>
            <div className=" bg-[#F4F4F4] sm:h-[772px] sm:w-[608px] flex justify-center items-center  rounded-4xl">
                <img src={image} alt="" />
            </div>
            <div className="sm:w-1/2 ">
                {/* Title */}
                <div className="text-center mb-8 ">
                    <h1 className="text-3xl font-medium text-gray-900 mb-2 capitalize">Welcome Again</h1>
                    <p className="text-gray-500 text-sm">
                        welcome back! please Fill Your data
                    </p>
                </div>

                {/* Form */}
                <form className="w-full flex flex-col gap-5">
                    {/* Name */}
                    <div>
                        <label className="block text-sm text-gray-800 mb-2">Name</label>
                        <div className="flex items-center border border-gray-500 rounded-md px-3 py-2 bg-white">
                            <User size={18} className="text-gray-500 mr-2" />
                            <input
                                type="text"
                                placeholder="kneeDue"
                                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm text-gray-800 mb-2">Email</label>
                        <div className="flex items-center border border-gray-500 rounded-md px-3 py-2 bg-white">
                            <Mail size={18} className="text-gray-500 mr-2" />
                            <input
                                type="email"
                                placeholder="kneeDue@untitledui.com"
                                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm text-gray-800 mb-2">Password</label>
                        <div className="flex items-center border border-gray-500 rounded-md px-3 py-2 bg-white">
                            <Lock size={18} className="text-gray-500 mr-2" />
                            <input
                                type="password"
                                placeholder="**********"
                                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Password Rules */}
                    <div className="text-sm text-gray-500 flex flex-col gap-2 mt-1">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-heading-color" />
                            <span>Must Be At Least 8 Characters</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-heading-color" />
                            <span>Must Contain One Special Character</span>
                        </div>
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        className="w-full bg-main-color hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition"
                    >
                        Sign Up
                    </button>
                </form>

                {/* OR Divider */}
                <div className="flex items-center justify-center gap-3 w-full  my-6">
                    <hr className="flex-1 border-gray-600" />
                    <span className="text-gray-400 text-sm">Or</span>
                    <hr className="flex-1 border-gray-600" />
                </div>

                {/* Social Buttons */}
                {/* <div className="flex gap-4 w-full max-w-md justify-center">
                    <button className="flex justify-center items-center border border-main-color p-3 rounded-lg w-1/2 hover:bg-main-color transition">
                        <img src="/google.svg" alt="Google" className="w-5 h-5" />
                    </button>
                    <button className="flex justify-center items-center border border-main-color p-3 rounded-lg w-1/2 hover:bg-main-color transition">
                        <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
                    </button>
                </div> */}

                {/* Sign In link */}
                <p className="mt-8 text-gray-900 font-normal text-md text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-main-color font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </div>

        </>

    )
}
