import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/home/Home";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import FlightSelector from "./page/flightBooking/flightSearch";
import GetStarted from "./page/GetStarted/GetStarted";
import Login from "./page/Login/Login";
import SignUp from "./page/Signup/SignUp";
import ChangePassword from "./page/ChangePassword/ChangePassword";
import ForgetPassword from "./page/ForgetPassword/ForgetPassword";
import OTP from "./page/OTP/OTP";
import Done from "./page/Done/Done";



import Profile from "./page/Profile/Profile";
import Info from "./page/info/info";
import AccountSecurity from "./page/AccountSecurity/AccountSecurity";
import MyBooking from "./page/MyBooking/MyBooking";
import Maps from "./page/maps/Maps";
import SearchPage from "./page/search/SearchPage";
import Results from "./page/results/Results";
import FiltersPanel from "./page/filter/Filter";





export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <h1 className="text-red-500 p-8">404 - Page Not Found</h1>,
      children: [
        { path: "home", element: <Home /> },
        { path: "profile", element: <Profile /> },
        { path: "personal-information", element: <Info /> },
        { path: "account-security", element: <AccountSecurity /> },
        { path: "my-booking", element: <MyBooking /> },
        { path: "maps", element: <Maps /> },
        { path: "search", element: <SearchPage /> },
        { path: "flight-selector", element: <FlightSelector /> },
        { path: "results", element: <Results /> },
        { path: "filters-panel", element: <FiltersPanel /> },




      ],
    },
    {
      path: "/",
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

  );
}
