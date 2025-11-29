import axios from "axios";
import image from "../../assets/login.png";
import { useState, useRef, useEffect } from "react";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/authSlice";

export default function OTP() {
    const email = useSelector((state: RootState) => state.auth.email) ?? "";
    const navigate = useNavigate()
    const dispatch = useDispatch();


    const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [timer, setTimer] = useState(30);

    // countdown
    useEffect(() => {
        if (timer === 0) return;
        const interval = setInterval(() => setTimer((t) => t - 1), 1000);
        return () => clearInterval(interval);
    }, [timer]);

    // handle typing
    const handleChange = (value: string, index: number) => {
        if (/^[0-9]$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // focus next
            if (index < 3) {
                inputsRef.current[index + 1]?.focus();
            }
        } else if (value === "") {
            // delete digit
            const newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    // verify OTP
    const verifyOTP = async () => {
        const code = otp.join("");

        if (code.length < 4) {
            setErrorMsg("Enter full OTP");
            return;
        }

        try {
            const res = await axios.post(
                "https://round7-safarni-team-one.huma-volve.com/api/v1/auth/verify-otp",
                {
                    email,
                    otp: "1234",
                }
            );

            console.log("OTP Verified:", res.data);
            setErrorMsg("");


            const token = res.data.data.token;
            const username = res.data.data.user.name

            navigate("/home");
            dispatch(loginSuccess({ token, email, username }));
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setErrorMsg(error.response?.data?.message || "Invalid OTP");
            }
        }
    };

    const resend = async () => {
        const res = await axios.post(
            "https://round7-safarni-team-one.huma-volve.com/api/v1/auth/resend-otp",
            {
                email,
            }
        );
        console.log(res)
        setTimer(30);
        console.log("OTP resend request...");
    };

    return (
        <>
            <div className=" bg-[#F4F4F4] h-[772px] w-[608px] flex justify-center items-center rounded-4xl">
                <img src={image} alt="" />
            </div>

            <div className="sm:w-1/2">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-medium text-gray-900 mb-4">Verify Code</h1>
                    <p className="text-gray-500 text-[21px]">Please enter the code we sent to</p>
                    <p className="text-gray-900 text-lg mb-4">{email}</p>
                </div>

                <div className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                    00:{timer < 10 ? `0${timer}` : timer}
                </div>

                <div className="flex gap-4 mb-4 justify-center">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el: HTMLInputElement | null) => {
                                inputsRef.current[index] = el;
                            }} type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-16 h-16 rounded-xl bg-white text-black text-3xl font-semibold text-center outline-none border-2 border-blue-300 focus:border-blue-500"
                        />
                    ))}
                </div>

                {errorMsg && (
                    <p className="text-center text-red-500 font-semibold mb-2">{errorMsg}</p>
                )}

                <p className="text-gray-900 text-center">
                    Didn't receive code?
                    <button
                        onClick={resend}
                        disabled={timer !== 0}
                        className={`ml-1 font-semibold ${timer === 0 ? "text-blue-600" : "text-gray-400"
                            }`}
                    >
                        Send again
                    </button>
                </p>

                <button
                    onClick={verifyOTP}
                    className="bg-main-color text-white w-full py-4 rounded-2xl text-xl font-semibold mt-4 cursor-pointer"
                >
                    Verify
                </button>
            </div>
        </>
    );
}
