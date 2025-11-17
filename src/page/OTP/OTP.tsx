import image from "../../assets/login.png"
import { useState, useRef, useEffect } from "react";

export default function OTP() {

    const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const [timer, setTimer] = useState(30);

    // countdown
    useEffect(() => {
        if (timer === 0) return;
        const interval = setInterval(() => setTimer((t) => t - 1), 1000);
        return () => clearInterval(interval);
    }, [timer]);

    const handleChange = (value: string, index: number) => {
        if (/^[0-9]$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // auto focus next
            if (index < 3) {
                inputsRef.current[index + 1]?.focus();
            }
        } else if (value === "") {
            // allow deleting
            const newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const resend = () => {
        setTimer(30);
        console.log("OTP resend request...");
    };
    return (
        <>
            <div className=" bg-[#F4F4F4] h-[772px] w-[608px] flex justify-center items-center  rounded-4xl">
                <img src={image} alt="" />
            </div>
            <div className="sm:w-1/2 ">
                {/* Main Content */}
                {/* icon */}
                <div className="mb-6 flex justify-center">
                    <svg
                        className="w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M4 4h16v16H4z" />
                        <path d="M22 6l-10 7L2 6" />
                    </svg>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-medium text-gray-900  mb-4">Verify Code</h1>

                    <p className="text-gray-500 text-[21px]">
                        Please enter the code we just sent to email
                    </p>

                    <p className="text-gray-900 text-lg mb-4">kneedue@untitledui.com</p>
                </div>



                {/* timer */}
                <div className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                    00:{timer < 10 ? `0${timer}` : timer}
                </div>

                {/* OTP Inputs */}
                <div className="flex gap-4 mb-4 justify-center">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => {
                                inputsRef.current[index] = el;
                            }}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-16 h-16 rounded-xl bg-white text-black text-3xl font-semibold text-center outline-none border-2 border-blue-300 focus:border-blue-500"
                        />
                    ))}
                </div>

                {/* resend link */}
                <p className=" text-gray-900 font-normal text-md text-center">
                    OTP not receive?{" "}
                    <button
                        onClick={resend}
                        disabled={timer !== 0}
                        className="text-main-color font-semibold hover:underline cursor-pointer"

                    >
                        send again
                    </button>
                </p>

                {/* verify button */}
                <button className="bg-main-color cursor-pointer text-white w-full py-4 rounded-2xl text-xl font-semibold mt-4">
                    Verify
                </button>
            </div >

        </>

    )
}
