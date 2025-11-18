
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';

export default function HotelLayout() {
    return (
        <div className="container">

            <Navbar />
            <Outlet />
        </div>
    )
}
