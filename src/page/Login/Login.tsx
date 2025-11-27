import { Lock, Mail } from "lucide-react"
import image from "../../assets/login.png"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/authSlice";
import { useState } from "react";
import axios from "axios";


export default function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [message, setMessage] = useState<string>("");



    async function handleLogin() {
        try {
            const res = await axios.post(
                "https://round7-safarni-team-one.huma-volve.com/api/v1/auth/login",
                {
                    email,
                    password,
                }
            );

            const token = res.data.token;

            dispatch(loginSuccess({ token, email }));

        } catch (error: unknown) {
            let errMsg = "Something went wrong";

            if (axios.isAxiosError(error)) {
                const data = error.response?.data;

                if (data?.error?.message) {
                    errMsg = data.error.message;
                }
                else if (data?.message) {
                    errMsg = data.message;
                }
                else {
                    errMsg = JSON.stringify(data);
                }
            } else if (error instanceof Error) {
                errMsg = error.message;
            }

            setMessage(errMsg);
        }


    }

    return (
        <>
            <div className=" bg-[#F4F4F4] sm:h-[772px] sm:w-[608px] flex justify-center items-center  rounded-4xl">
                <img src={image} alt="" />
            </div>
            <div className="sm:w-1/2 ">
                {/* Title */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-medium text-gray-900  mb-2 capitalize">Welcome Again</h1>
                    <p className="text-gray-500 text-[21px]">
                        welcome back! please fill your Data
                    </p>
                </div>
                {/* Form */}
                <form className="w-full flex flex-col">
                    {/* Email */}
                    <div>
                        <label className="block text-sm text-gray-800 mb-2">Email</label>
                        <div className="flex items-center border mb-4 border-gray-500 rounded-md px-3 py-2 bg-white">
                            <Mail size={18} className="text-gray-500 mr-2" />
                            <input
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
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
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                type="password"
                                placeholder="**********"
                                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                            />
                        </div>
                        <div className="text-right mt-2">
                            <Link to="/forget-password" className="text-sm text-gray-800 hover:text-gray-800">
                                Forgot Password?
                            </Link>
                        </div>
                    </div>
                    {message && <p className="text-red-500 mt-4 text-center font-semibold bg-red-100 py-2 rounded-md">
                        {message}</p>}


                    {/* Login Button */}
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="cursor-pointer w-full mt-6 bg-main-color hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition"
                    >
                        Log In
                    </button>
                </form>

                {/* OR Divider */}
                <div className="flex items-center justify-center gap-3 w-full  my-6">
                    <hr className="flex-1 border-gray-800" />
                    <span className="text-gray-800 text-sm">Or</span>
                    <hr className="flex-1 border-gray-800" />
                </div>

                {/* Social Buttons */}
                {/* <div className="flex gap-4 w-full max-w-md justify-center ">
                    <button className="flex justify-center items-center cursor-pointer border border-main-color p-3 rounded-lg w-1/2 hover:bg-main-color transition">
                        <img src="/google.svg" alt="Google" className="w-5 h-5" />
                    </button>
                    <button className="flex justify-center items-center cursor-pointer border border-main-color p-3 rounded-lg w-1/2 hover:bg-main-color transition">
                        <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
                    </button>
                </div> */}

                {/* Sign Up link */}
                <p className="mt-8 text-gray-900 font-normal text-md text-center">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-main-color font-semibold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>

        </>

    )
}
