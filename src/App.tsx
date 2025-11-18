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

import About from "./page/about/About";
import CarMain from "./page/car-booking/Home";
import PickUpPage from "./page/car-booking/PickUp";
import Map from "./page/car-booking/Map";
import CarLayout from "./layouts/CarLayout";
import HotelLayout from "./layouts/HotelLayout";
import HotelsPage from "./page/hotels/HotelsPage";

  const router = createBrowserRouter([
    {
    path: "/",                     // root
    element: <MainLayout />,     
    errorElement: <h1 className="text-red-500 p-8">404 - Page Not Found</h1>,
    children: [
      { index: true, element: <Home /> },  // path: "/" (index route)
      { path: "about", element: <About /> },
        { path: "car-booking", element: <CarMain />},
      { path: "car-booking/pickUp/:id", element: <PickUpPage /> },
      { path: "map", element: <Map /> },
    ],
  },
  {
    path: "/auth",                 
    element: <AuthLayout />,
    children: [
      { index: true, element: <GetStarted /> }, // /auth
      { path: "login", element: <Login /> },    // /auth/login
      { path: "signup", element: <SignUp /> },
      { path: "forget-password", element: <ForgetPassword /> },
      { path: "change-password", element: <ChangePassword /> },
      { path: "OTP", element: <OTP /> },
      { path: "Done", element: <Done /> },
    ],
  },
  {
    path:"/car",
    element:<CarLayout/>,
    children:[
    

    ]
  },{
    path:"/hotel",
    element:<HotelLayout/>,
    children:[
            { index: true, element: <HotelsPage /> }, 

    ]
  }
  
]);

export default function App() {
  return (
    <div className="p-6">
      <RouterProvider router={router} />
    </div>
  );
}