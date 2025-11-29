import image from "../../assets/signin.png"
import { User, Mail, Lock, CheckCircle2, CircleX } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/authSlice";
import { Link, useNavigate } from "react-router-dom";



export default function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("");


    function getAxiosError(error: unknown) {
        if (axios.isAxiosError(error)) return error.response?.data;
        if (error instanceof Error) return error.message;
        return "Unknown error";
    }

    async function handleSignup(e: React.FormEvent) {
        e.preventDefault();

        try {
            const res = await axios.post(
                "https://round7-safarni-team-one.huma-volve.com/api/v1/auth/register",

                {
                    name,
                    email,
                    password,
                    password_confirmation: confirmPassword
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },

                }
            );

            const username = res.data.data.user.name

            // save token
            dispatch(loginSuccess({
                token: res.data.data.token,
                email,
                username
            }));
            console.log("SIGNUP SUCCESS:", res.data);
            navigate("/OTP")

        } catch (error: unknown) {
            const err = getAxiosError(error);
            console.log("SIGNUP ERROR:", err);

            if (typeof err === "string") {
                setMessage(err);
            } else if (err?.message) {
                setMessage(err.message);
            } else if (err?.error) {
                setMessage(err.error);
            } else {
                setMessage("Something went wrong");
            }
        }
    }
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
                                onChange={(e) => { setName(e.target.value) }}
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
                                onChange={(e) => { setEmail(e.target.value) }}

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
                                onChange={(e) => { setPassword(e.target.value) }}

                                type="password"
                                placeholder="**********"
                                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                            />
                        </div>
                    </div>


                    {/* confirm Password */}
                    <div>
                        <label className="block text-sm text-gray-800 mb-2">Confirm Password</label>
                        <div className="flex items-center border border-gray-500 rounded-md px-3 py-2 bg-white">
                            <Lock size={18} className="text-gray-500 mr-2" />
                            <input
                                onChange={(e) => { setConfirmPassword(e.target.value) }}

                                type="password"
                                placeholder="**********"
                                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                            />
                        </div>
                    </div>


                    {/* Password Rules */}
                    <div className="text-sm text-gray-500 flex flex-col gap-2 mt-1">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className={password.length && confirmPassword.length >= 8 ? 'text-green-500' : 'text-heading-color'} />
                            <span className={password.length && confirmPassword.length >= 8 ? 'text-green-500' : ''}>Must Be At Least 8 Characters</span>

                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className={password.match(/[!@#$%^&*0]/) && confirmPassword.length ? 'text-green-500' : 'text-heading-color'} />
                            <span className={password.match(/[!@#$%^&*0]/) && confirmPassword.length ? 'text-green-500' : ''}>Must Contain One Special Character</span>
                        </div>

                        <div className="flex items-center gap-2 capitalize">
                            <CheckCircle2 size={16} className={password && confirmPassword && password === confirmPassword ? 'text-green-500' : 'text-heading-color'} />
                            <span className={password && confirmPassword && password === confirmPassword ? 'text-green-500' : ''}> password match with confirm password</span>
                        </div>
                        {message && <div className="flex items-center gap-2">
                            <CircleX size={16} className="text-heading-color text-red-500" />
                            <span> {message}</span>
                        </div>}
                    </div>

                    {/* Sign Up Button */}
                    <button
                        onClick={handleSignup}
                        type="button"
                        className="w-full bg-main-color hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition"
                    >
                        Sign Up
                    </button>
                </form >

                {/* OR Divider */}
                <div className="flex items-center justify-center gap-3 w-full  my-6" >
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
                    <Link to="/login" className="text-main-color font-semibold hover:underline cursor-pointer">
                        Login
                    </Link>
                </p>
            </div >

        </>

    )
}
