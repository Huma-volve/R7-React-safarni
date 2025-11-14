import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/home/Home";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import GetStarted from "./page/GetStarted/GetStarted";
import Login from "./page/Login/Login";
import SignUp from "./page/Signup/SignUp";
import ChangePassword from "./page/ChangePassword/ChangePassword";
import ForgetPassword from "./page/ForgetPassword/ForgetPassword";
import OTP from "./page/OTP/OTP";
import Done from "./page/Done/Done";

import { Link, Route, Routes } from "react-router-dom";
import About from "./page/about/About";
import CarMain from "./page/car-booking/Home";
import PickUpPage from "./page/car-booking/PickUp";
import Map from "./page/car-booking/Map";
export default function App() {


  const router = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      errorElement: <h1 className="text-red-500 p-8">404 - Page Not Found</h1>,
      children: [
        { path: "home", element: <Home /> },
        // { path: "home", element: <Home /> },
        // { path: "home", element: <Home /> },
        // { path: "home", element: <Home /> },


      ],
    },
    {
      path: "",
      element: <AuthLayout />,
      errorElement: <h1 className="text-red-500 p-8">404 - Page Not Found</h1>,
      children: [
        { path: "", index: true, element: <GetStarted /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
        { path: "forget-password", element: <ForgetPassword /> },
        { path: "change-password", element: <ChangePassword /> },
        { path: "OTP", element: <OTP /> },
        { path: "Done", element: <Done /> },

      ],
    }
  ]);
  return (
    <div className="p-6">
      <RouterProvider router={router} />

      <nav className="mb-4">
        <Link to="/" className="bg-dark-blue mr-4">Home</Link>
        <Link to="/about" className="bg-secondary">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/car-booking" element={<CarMain />} />
        <Route path="/pickUp/:id" element={<PickUpPage />} />
        <Route path="/map" element={<Map />} />

      </Routes>
    </div>
  );
}
