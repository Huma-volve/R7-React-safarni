import Main from "./components/main";
import Category from "./components/category";
import Recommendation from "./components/Recommendation";
import AvailableTours from "./components/AvailableTours";




export default function Home() {
    return (
        <div>
            <Main />
            <Category />
            <Recommendation />
            <AvailableTours />

        </div>
    );
}