import { CheckCircle2, Lock } from "lucide-react";
import image from "../../assets/forgetpassword.png"
import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function ChangePassword() {
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const validations = {
        length: password.length >= 8,
        special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    return (
        <>
            <div className=" bg-[#F4F4F4] h-[772px] w-[608px] flex justify-center items-center  rounded-4xl">
                <img src={image} alt="" />
            </div>
            <div className="sm:w-1/2 ">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                    <svg
                        className="w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M6 10V7a6 6 0 1112 0v3" />
                        <rect x="4" y="10" width="16" height="12" rx="2" />
                    </svg>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-medium text-gray-900 mb-2 capitalize text-center ">set new password</h1>

                <p className="text-gray-500 text-center mb-8">
                    Your New Password Must be Different to <br />
                    Previously Used Password
                </p>

                {/* Password Field */}
                <label className="block text-sm text-gray-800 mb-2">Password</label>
                <div className="flex items-center border border-gray-500 rounded-md px-3 py-2 mb-4 bg-white">
                    <Lock size={18} className="text-gray-500 mr-2" />
                    <input
                        type="Password"
                        placeholder="************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                    />
                </div>

                {/* Confirm Password Field */}
                <label className="block text-sm text-gray-800 mb-2">Confirm Password</label>
                <div className="flex items-center border border-gray-500 rounded-md px-3 py-2 bg-white">
                    <Lock size={18} className="text-gray-500 mr-2" />
                    <input
                        type="password"
                        placeholder="************"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                    />
                </div>

                {/* Requirements */}
                <div className="w-full space-y-3 my-4  text-gray-500 ">

                    <div className="flex items-center    ">
                        <CheckCircle2 size={18} className="mr-2" />
                        <span>Must Be At Least 8 Characters</span>
                    </div>
                    <div className="flex items-center">
                        <CheckCircle2 size={18} className="mr-2" />
                        <span>Must Contain One Special Character</span>
                    </div>


                </div>

                {/* Reset Button */}
                <button className="w-full bg-main-color text-white text-xl font-semibold py-4 rounded-2xl">
                    Reset Password
                </button>

                {/* Back To Login */}
                <Link to={"/login"} className="mt-6 text-gray-000 flex items-center gap-1 justify-center ">
                    <span className="text-2xl text-gray-400">←</span> Back To Log In
                </Link>
            </div>

        </>

    )
}
