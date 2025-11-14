import { Outlet } from 'react-router-dom';
import Logo from '../components/logo'

export default function AuthLayout() {
    return (
        <div className="container">
            <div className='flex justify-end mb-12'>
                <Logo />
            </div>
            <div className="flex items-center gap-16 justify-between max-lg:flex-col max-lg:justify-center">
                <Outlet />
            </div>
        </div>
    );
}