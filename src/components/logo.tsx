import logoImage from "../assets/logo.png"
export default function Logo() {
    return (
        <div className="flex flex-col items-center">
            <img className="w-[65px] h-[62px] " src={`${logoImage}`} alt="" />
            <h2 className="font-semibold text-lg text-main-color">Safarni</h2>
        </div>
    )
}
