import { CheckCircle2, Lock } from "lucide-react";
import image from "../../assets/forgetpassword.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

export default function ChangePassword() {
    const token = useSelector((state: RootState) => state.auth.token);

    const [currentPassword, setCurrentPassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    // VALIDATIONS
    const isLengthValid = password.length >= 8;
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isMatch = password && confirm && password === confirm;

    async function handleChangePassword(e: React.FormEvent) {
        e.preventDefault();

        setErrorMsg("");
        setSuccessMsg("");

        if (!isLengthValid || !hasSpecial || !isMatch) {
            setErrorMsg("Please complete all password requirements");
            return;
        }

        try {
            const res = await axios.post(
                "https://round7-safarni-team-one.huma-volve.com/api/v1/auth/change-password",
                {
                    current_password: currentPassword,
                    password: password,
                    password_confirmation: confirm,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setSuccessMsg(res.data.message || "Password changed successfully");
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const data = error.response?.data;
                setErrorMsg(
                    data?.error?.message ||
                    data?.message ||
                    "Something went wrong"
                );
            }
        }
    }

    return (
        <>
            {/* LEFT IMAGE */}
            <div className="bg-[#F4F4F4] h-[772px] w-[608px] flex justify-center items-center rounded-4xl">
                <img src={image} alt="" />
            </div>

            {/* RIGHT FORM */}
            <div className="sm:w-1/2">

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
                <h1 className="text-3xl font-medium text-gray-900 mb-2 capitalize text-center">
                    Change Password
                </h1>

                <p className="text-gray-500 text-center mb-8">
                    Enter your current password and choose a new one
                </p>

                <form onSubmit={handleChangePassword} className="space-y-4">

                    {/* Current Password */}
                    <div>
                        <label className="block text-sm text-gray-800 mb-2">
                            Current Password
                        </label>
                        <div className="flex items-center border border-gray-500 rounded-md px-3 py-2 bg-white">
                            <Lock size={18} className="text-gray-500 mr-2" />
                            <input
                                type="password"
                                placeholder="Current password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="w-full bg-transparent outline-none text-gray-800"
                            />
                        </div>
                    </div>

                    {/* New Password */}
                    <div>
                        <label className="block text-sm text-gray-800 mb-2">
                            New Password
                        </label>
                        <div className="flex items-center border border-gray-500 rounded-md px-3 py-2 bg-white">
                            <Lock size={18} className="text-gray-500 mr-2" />
                            <input
                                type="password"
                                placeholder="*************"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-transparent outline-none text-gray-800"
                            />
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm text-gray-800 mb-2">
                            Confirm Password
                        </label>
                        <div className="flex items-center border border-gray-500 rounded-md px-3 py-2 bg-white">
                            <Lock size={18} className="text-gray-500 mr-2" />
                            <input
                                type="password"
                                placeholder="*************"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                                className="w-full bg-transparent outline-none text-gray-800"
                            />
                        </div>
                    </div>

                    {/* Requirements */}
                    <div className="space-y-2 text-gray-500 mt-4">
                        <div className={`flex items-center gap-2 ${isLengthValid ? "text-green-600" : ""}`}>
                            <CheckCircle2 size={18} />
                            <span>At least 8 characters</span>
                        </div>
                        <div className={`flex items-center gap-2 ${hasSpecial ? "text-green-600" : ""}`}>
                            <CheckCircle2 size={18} />
                            <span>Contains special character</span>
                        </div>
                        <div className={`flex items-center gap-2 ${isMatch ? "text-green-600" : ""}`}>
                            <CheckCircle2 size={18} />
                            <span>Passwords match</span>
                        </div>
                    </div>

                    {/* Error & Success */}
                    {errorMsg && (
                        <p className="text-red-500 text-center font-semibold">{errorMsg}</p>
                    )}
                    {successMsg && (
                        <p className="text-green-600 text-center font-semibold">{successMsg}</p>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        className={`w-full bg-main-color text-white py-4 rounded-2xl text-xl font-semibold 
                            ${(!isMatch || !isLengthValid || !hasSpecial) ? "opacity-50 cursor-not-allowed" : ""}
                        `}
                        disabled={!isMatch || !isLengthValid || !hasSpecial}
                    >
                        Change Password
                    </button>

                    <Link to="/login" className="mt-6 flex justify-center text-gray-500">
                        ← Back To Login
                    </Link>
                </form>

            </div>
        </>
    );
}
