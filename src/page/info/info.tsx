import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

export default function Info() {

    const token = useSelector((state: RootState) => state.auth.token);
    const email = useSelector((state: RootState) => state.auth.email);
    const username = useSelector((state: RootState) => state.auth.username);

    const [nameInput, setNameInput] = useState<string>(username ?? "");
    const [phoneInput, setPhoneInput] = useState<string>("");
    const [locationInput, setLocationInput] = useState<string>("");

    const [editMode, setEditMode] = useState(false);
    const [message, setMessage] = useState("");
    console.log(token)
    // --------------------------
    // GET Profile Data from API
    // --------------------------
    useEffect(() => {
        async function fetchProfile() {
            try {
                const res = await axios.get(
                    "https://round7-safarni-team-one.huma-volve.com/api/v1/users/me",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = res.data.data;

                setNameInput(data.name ?? "");
                setPhoneInput(data.phone ?? "");
                setLocationInput(data.location ?? "");

            } catch (error) {
                console.log("Failed to load profile" + error);
            }
        }

        fetchProfile();
    }, [token]);

    // --------------------------
    // Save / Update Profile
    // --------------------------
    async function handleSave() {
        try {
            const res = await axios.put(
                "https://round7-safarni-team-one.huma-volve.com/api/v1/users/me",
                {
                    name: nameInput,
                    phone: phoneInput,
                    location: locationInput,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(res)

            setMessage("Profile updated successfully ✔️");
            setEditMode(false);

        } catch (error) {
            setMessage("Update failed ❌" + error);
        }
    }

    return (
        <div className="p-px rounded-2xl bg-linear-to-r from-[#3F52B4] to-[#B22459]">
            <div className="text-white bg-white rounded-2xl p-10">

                <h1 className="text-center text-3xl font-semibold text-[#111928] mb-10 capitalize">
                    personal information
                </h1>

                {/* Name */}
                <div className="mb-6">
                    <label className="text-gray-800 text-lg font-semibold">Name</label>
                    <div className="w-full mt-2 p-4 rounded-xl border-gray-300 border bg-white flex items-center gap-3">
                        <PersonOutlineIcon sx={{ fontSize: 24, color: "#999" }} />
                        <input
                            type="text"
                            value={nameInput}
                            readOnly={!editMode}
                            onChange={(e) => setNameInput(e.target.value)}
                            className="w-full outline-none text-[#111928] text-lg"
                        />
                    </div>
                </div>

                {/* Email (from Redux only) */}
                <div className="mb-6">
                    <label className="text-gray-800 text-lg font-semibold">Email</label>
                    <div className="w-full mt-2 p-4 rounded-xl border-gray-300 border bg-white flex items-center gap-3">
                        <MailOutlineIcon sx={{ fontSize: 24, color: "#999" }} />
                        <input
                            type="email"
                            value={email ?? ""}
                            readOnly
                            className="w-full outline-none text-[#111928] text-lg"
                        />
                    </div>
                </div>

                {/* Location */}
                <div className="mb-6">
                    <label className="text-gray-800 text-lg font-semibold">Location</label>
                    <div className="w-full mt-2 p-4 rounded-xl border-gray-300 border bg-white flex items-center gap-3">
                        <LocationOnIcon sx={{ fontSize: 24, color: "#999" }} />
                        <input
                            type="text"
                            value={locationInput}
                            readOnly={!editMode}
                            onChange={(e) => setLocationInput(e.target.value)}
                            className="w-full outline-none text-[#111928] text-lg"
                        />
                    </div>
                </div>

                {/* Phone */}
                <div className="mb-6">
                    <label className="text-gray-800 text-lg font-semibold">Phone Number</label>
                    <div className="w-full mt-2 p-4 rounded-xl border-gray-300 border bg-white flex items-center gap-3">
                        <PhoneIphoneIcon sx={{ fontSize: 24, color: "#999" }} />
                        <input
                            type="text"
                            value={phoneInput}
                            readOnly={!editMode}
                            onChange={(e) => setPhoneInput(e.target.value)}
                            className="w-full outline-none text-[#111928] text-lg"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    {!editMode ? (
                        <button
                            onClick={() => setEditMode(true)}
                            className="bg-main-color text-white px-6 py-3 rounded-lg"
                        >
                            Edit
                        </button>
                    ) : (
                        <button
                            onClick={handleSave}
                            className="bg-green-600 text-white px-6 py-3 rounded-lg"
                        >
                            Save
                        </button>
                    )}
                </div>

                {message && (
                    <p className="text-center text-green-600 mt-4 font-semibold">{message}</p>
                )}
            </div>
        </div>
    );
}
