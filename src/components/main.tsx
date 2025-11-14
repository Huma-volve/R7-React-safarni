import mainLogo from "../assets/main-image.png"
export default function Main() {
    return (
        <section className="px-6 py-24 flex  gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6 ">
                <h1 className="text-[51px]  font-bold text-gray-900 leading-tight">
                    Visit The Most <br />
                    <span className="text-[#1E429F]">Beautiful Places</span> In <br />
                    The World
                </h1>
                <p className="text-[#4B5563] text-lg md:text-xl max-w-lg">
                    "Explore stunning destinations around the globe. Find travel inspiration, top attractions, and plan your next adventure—all from one platform."
                </p>
            </div>

            {/* Image Grid */}
            <img
                src={mainLogo}
                alt="Place 1"
                className="w-1/2 h-full object-cover rounded-lg row-span-2"
            />
        </section>
    )
}
