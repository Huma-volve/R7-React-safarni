import image from "../../assets/getStarted.png"
import React, { useState } from "react";


export default function ChangePassword() {
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const validations = {
        length: password.length >= 8,
        special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    return (
        <>
            <div className=" bg-[#F4F4F4]">
                <img src={image} alt="" />
            </div>
            <div className="sm:w-1/2 ">
                {/* Icon */}
                <div className="mb-6">
                    <svg
                        className="w-10 h-10 text-white/80"
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
                <h1 className="text-3xl font-semibold mb-2 capitalize">set new password</h1>

                <p className="text-gray-400 text-center mb-8">
                    Your New Password Must be Different to <br />
                    Previously Used Password
                </p>

                {/* Password Field */}
                <label className="block w-full text-gray-300 mb-1">Password</label>
                <div className="w-full bg-white text-black rounded-xl flex items-center px-4 h-14 mb-4">
                    <svg
                        className="w-5 h-5 text-gray-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M6 10V7a6 6 0 1112 0v3" />
                        <rect x="4" y="10" width="16" height="12" rx="2" />
                    </svg>
                    <input
                        type="password"
                        placeholder="************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full outline-none text-lg"
                    />
                </div>

                {/* Confirm Password Field */}
                <label className="block w-full text-gray-300 mb-1">Confirm Password</label>
                <div className="w-full bg-white text-black rounded-xl flex items-center px-4 h-14 mb-4">
                    <svg
                        className="w-5 h-5 text-gray-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M6 10V7a6 6 0 1112 0v3" />
                        <rect x="4" y="10" width="16" height="12" rx="2" />
                    </svg>
                    <input
                        type="password"
                        placeholder="************"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        className="w-full outline-none text-lg"
                    />
                </div>

                {/* Requirements */}
                <div className="w-full space-y-3 mt-4 mb-8">
                    <Requirement text="Must Be At Least 8 Characters" ok={validations.length} />
                    <Requirement text="Must Contain One Special Character" ok={validations.special} />
                </div>

                {/* Reset Button */}
                <button className="w-full bg-blue-600 text-xl font-semibold py-4 rounded-2xl">
                    Reset Password
                </button>

                {/* Back To Login */}
                <button className="mt-6 text-gray-400 flex items-center gap-1">
                    <span className="text-2xl">←</span> Back To Log In
                </button>
            </div>

        </>

    )
}
