import { useNavigate } from "react-router-dom";

export default function Categories() {
    const navigate = useNavigate();

    const items = [
        {
            title: "Flight",
            path: "/flight",
            img: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg",
        },
        {
            title: "Cars",
            path: "/car-booking",
            img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
        },
        {
            title: "Tours",
            path: "/tours",
            img: "https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg",
        },
        {
            title: "Hotel",
            path: "/hotels",
            img: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
        },
    ];

    return (
        <div className="w-full px-4 mb-8">
            <h2 className="text-2xl font-semibold text-[#111827] mb-6">Categories</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
                {items.map((item) => (
                    <div
                        key={item.title}
                        onClick={() => navigate(item.path)}
                        className=" flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                    >
                        <div className="w-40 h-40 rounded-full overflow-hidden shadow-md">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <p className="text-blue-600 text-2xl font-semibold mt-3">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
