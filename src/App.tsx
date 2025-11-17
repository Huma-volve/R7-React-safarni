import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/home/Home";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import FlightSelector from "./page/flightBooking/flightSearch";
import { Routes, Route, Link } from "react-router-dom";
import GetStarted from "./page/GetStarted/GetStarted";
import Login from "./page/Login/Login";
import SignUp from "./page/Signup/SignUp";
import ChangePassword from "./page/ChangePassword/ChangePassword";
import ForgetPassword from "./page/ForgetPassword/ForgetPassword";
import OTP from "./page/OTP/OTP";
import Done from "./page/Done/Done";
import Destination from "./page/destination/destination";
import PaymentPage from "./payment/PaymentPage";
import SuccfullyPay from "./payment/SuccfullyPay";
import FlightBooking from "./page/flightBooking/flightBooking";
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
    },
  ]);
  return (
    <div className="p-6">
      <RouterProvider router={router} />
    </div>
    // <Routes>
    //   <Route path="/asc" element={<Destination />} />
    //   <Route path="/paymentpage" element={<PaymentPage />} />
    //   <Route path="/succfullyPay" element={<SuccfullyPay />} />
    //   <Route path="/" element={<FlightSelector />} />
    //   <Route path="/FlightBooking" element={<FlightBooking />} />
    // </Routes>
  );
}
