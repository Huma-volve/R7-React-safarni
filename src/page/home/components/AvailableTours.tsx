import StarRoundedIcon from "@mui/icons-material/StarRounded";

export default function AvailableTours() {
    const tours = [
        {
            title: "Luxor",
            img: "https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg",
            price: 150,
            rating: 4.3,
        },
        {
            title: "Dahab",
            img: "https://images.pexels.com/photos/460376/pexels-photo-460376.jpeg",
            price: 250,
            rating: 4.5,
        },
        {
            title: "Fayoum",
            img: "https://images.pexels.com/photos/533944/pexels-photo-533944.jpeg",
            price: 200,
            rating: 4.2,
        },
        {
            title: "Marsa Alam",
            img: "https://images.pexels.com/photos/3899711/pexels-photo-3899711.jpeg",
            price: 220,
            rating: 4.8,
        },
    ];

    return (
        <div className="w-full px-4 mt-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-semibold text-[#1F2937]">
                    Available Tours
                </h2>
                <button className="text-blue-600 font-semibold text-lg">
                    View all
                </button>
            </div>

            {/* Grid: 2 × 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {tours.map((tour, index) => (
                    <div
                        key={index}
                        className="flex-col sm:flex-row flex items-center gap-5 p-4 rounded-[40px] bg-white shadow-[0_0_25px_rgba(30,58,138,0.15)] border border-gray-100"
                    >
                        {/* Image */}
                        <div className="w-32 h-32 rounded-[20px] overflow-hidden shrink-0">
                            <img
                                src={tour.img}
                                alt={tour.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Text Area */}
                        <div className="flex-1">
                            <p className="text-gray-500 text-lg font-medium">
                                Full Day Tour
                            </p>

                            <h3 className="text-2xl font-semibold text-[#111827] mb-1">
                                {tour.title}
                            </h3>

                            <p className="text-gray-600 text-lg">
                                From{" "}
                                <span className="text-blue-600 font-semibold">
                                    {tour.price}$
                                </span>{" "}
                                Per Person
                            </p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 text-yellow-500 text-lg">
                            <StarRoundedIcon sx={{ fontSize: 26, color: "#facc15" }} />
                            <span className="text-gray-700">{tour.rating}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
