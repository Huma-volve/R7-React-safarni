import { Lock, Mail } from "lucide-react"
import image from "../../assets/login.png"
import { Link } from "react-router-dom"
export default function Login() {
    return (
        <>
            <div className="bg-[#F4F4F4]">
                <img src={image} className="h-[772px] object-cover" alt="" />
            </div>
            <div className="sm:w-1/2 ">
                {/* Title */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold  mb-2">Welcome Again</h1>
                    <p className="text-gray-400 text-[21px]">
                        welcome back! please fill your Data
                    </p>
                </div>
                {/* Form */}
                <form className="w-full flex flex-col">
                    {/* Email */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">Email</label>
                        <div className="flex items-center border mb-4 border-gray-500 rounded-md px-3 py-2 bg-white">
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
                        <label className="block text-sm text-gray-300 mb-2">Password</label>
                        <div className="flex items-center border border-gray-500 rounded-md px-3 py-2 bg-white">
                            <Lock size={18} className="text-gray-500 mr-2" />
                            <input
                                type="password"
                                placeholder="**********"
                                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                            />
                        </div>
                        <div className="text-right mt-2">
                            <a href="#" className="text-sm text-gray-400 hover:text-blue-500">
                                Forgot Password?
                            </a>
                        </div>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="cursor-pointer w-full mt-6 bg-[#1E429F] hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition"
                    >
                        Log In
                    </button>
                </form>

                {/* OR Divider */}
                <div className="flex items-center justify-center gap-3 w-full  my-6">
                    <hr className="flex-1 border-gray-600" />
                    <span className="text-gray-400 text-sm">Or</span>
                    <hr className="flex-1 border-gray-600" />
                </div>

                {/* Social Buttons */}
                {/* <div className="flex gap-4 w-full max-w-md justify-center ">
                    <button className="flex justify-center items-center cursor-pointer border border-[#1E429F] p-3 rounded-lg w-1/2 hover:bg-[#1E429F] transition">
                        <img src="/google.svg" alt="Google" className="w-5 h-5" />
                    </button>
                    <button className="flex justify-center items-center cursor-pointer border border-[#1E429F] p-3 rounded-lg w-1/2 hover:bg-[#1E429F] transition">
                        <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
                    </button>
                </div> */}

                {/* Sign Up link */}
                <p className="mt-8 text-gray-400 text-sm text-center">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>

        </>

    )
}
