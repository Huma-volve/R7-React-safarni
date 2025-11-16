import React from 'react'

export default function Profile() {
    return (
        <>
            <div className="relative mr-4">
                <img
                    className="w-20 h-20 rounded-full object-cover border-2 border-white/40"
                    src=""
                    alt=""
                />

                <div className="absolute bottom-0 right-0 bg-gray-700 p-1 rounded-full border-2 border-gray-900 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </div>
            </div>

            <div className="flex flex-col">
                <h2 className="text-3xl font-semibold text-gray-400 mb-0.5">
                    ""
                </h2>

                <p className="text-lg text-gray-500">
                    ""
                </p>
            </div>
        </>
    )
}
