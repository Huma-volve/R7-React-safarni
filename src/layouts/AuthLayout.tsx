import { Outlet } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function AuthLayout() {
    return (
        <div className="container">
            <Outlet />

        </div>
    );
}