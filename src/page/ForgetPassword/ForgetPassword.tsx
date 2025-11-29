import axios from "axios";
import image from "../../assets/forgetpassword.png"
import { Mail, KeyRound } from "lucide-react";
import { useState } from "react";

export default function ForgetPassword() {
    const [email, setEmail] = useState<string>("");
    const [successMsg, setSuccessMsg] = useState<string>("");
    const [errorMsg, setErrorMsg] = useState<string>("");

    async function handleForgetPassword(e: React.FormEvent) {
        e.preventDefault();

        // reset messages
        setSuccessMsg("");
        setErrorMsg("");

        try {
            const res = await axios.post(
                "https://round7-safarni-team-one.huma-volve.com/api/v1/auth/forgot-password",
                { email }
            );

            // Success message from backend
            setSuccessMsg(res.data.message);

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
            <div className=" bg-[#F4F4F4] sm:h-[772px] sm:w-[608px] flex justify-center items-center  rounded-4xl">
                <img src={image} alt="" />
            </div>

            <div className="sm:w-1/2 ">

                <div className="mb-4 flex justify-center">
                    <KeyRound size={40} className="text-gray-400 " />
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center capitalize">
                    Forgot Password?
                </h1>

                <p className="text-gray-500 text-center text-sm mb-10">
                    please enter your email to reset your password
                </p>

                <form onSubmit={handleForgetPassword} className="w-full flex flex-col gap-6">

                    <div>
                        <label className="block text-sm text-gray-800 mb-2">Email</label>
                        <div className="flex items-center border border-gray-500 rounded-md px-3 py-2 bg-white">
                            <Mail size={18} className="text-gray-500 mr-2" />
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="kneeDue@untitledui.com"
                                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-main-color hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition"
                    >
                        Reset Password
                    </button>
                </form>

                {/* SUCCESS MESSAGE */}
                {successMsg && (
                    <p className="text-green-600 mt-4 text-center font-semibold bg-green-100 py-2 rounded-md">
                        {successMsg}
                    </p>
                )}

                {/* ERROR MESSAGE */}
                {errorMsg && (
                    <p className="text-red-600 mt-4 text-center font-semibold bg-red-100 py-2 rounded-md">
                        {errorMsg}
                    </p>
                )}

            </div>
        </>
    );
}
