
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';

export default function CarLayout() {
    return (
        <div className="container">

            <Navbar />
            <Outlet />
        </div>
    )
}
