import image from "../../assets/map1.png"
import SearchInput from "../../components/SearchInput"
import CategoriesTabs from "./components/CategoriesTab";


export default function Maps() {
    return (
        <>
            <div className="absolute top-0 left-0 w-full h-screen -z-10" style={{ backgroundImage: `url(${image})` }}>
            </div>
            <SearchInput />
            <CategoriesTabs />
        </>
    )


}