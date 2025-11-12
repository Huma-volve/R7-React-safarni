import logoImage from "../assets/logo.png"
export default function Logo() {
    return (
        <div className="flex flex-col items-center">
            <img className="w-[45px] h-[42px] mb-2" src={`${logoImage}`} alt="" />
            <h2 className="font-semibold text-lg text-[#1E429F]">Safarni</h2>
        </div>
    )
}
