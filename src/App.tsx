import Home from "./page/home/Home";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import FlightSelector from "./page/flightBooking/FlightSelector";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GetStarted from "./page/GetStarted/GetStarted";
import Login from "./page/Login/Login";
import SignUp from "./page/Signup/SignUp";
import ChangePassword from "./page/ChangePassword/ChangePassword";
import ForgetPassword from "./page/ForgetPassword/ForgetPassword";
import OTP from "./page/OTP/OTP";
import Done from "./page/Done/Done";
import SeatSelector from "./page/flightBooking/chooseSeat";
import Internal from "./page/internal.tsx/internal";
import Favorite from "./page/favorite/favorite";
import Compare from "./page/compare/compare";
import Destination from "./page/destination/destination";
import PaymentPage from "./page/payment/PaymentPage";
import SuccfullyPay from "./page/payment/SuccfullyPay";
import FlightBooking from "./page/flightBooking/flightBooking";
import BoardingPass from "./page/flightBooking/bardindPass";
import Profile from "./page/Profile/Profile";
import Info from "./page/info/info";
import AccountSecurity from "./page/AccountSecurity/AccountSecurity";
import MyBooking from "./page/MyBooking/MyBooking";
import Maps from "./page/maps/Maps";
import SearchPage from "./page/search/SearchPage";
import Results from "./page/results/Results";
import FiltersPanel from "./page/filter/Filter";
import CarMain from "./page/car-booking/Home";
import PickUpPage from "./page/car-booking/PickUp";
import Map from "./page/car-booking/Map";
import HotelsPage from "./page/hotels/HotelsPage";
import PickUp from "./page/hotels/PickUp";
import Room from "./page/hotels/Room";
import HotelReviewForm from "./page/hotels/HotelReviewForm";
import Booking from "./page/hotels/Booking";
import Count from "./page/hotels/Count";
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
      { path: "car-booking", element: <CarMain /> },
      { path: "car-booking/pickUp/:id", element: <PickUpPage /> },
      { path: "map", element: <Map /> },
      { path: "hotels", element: <HotelsPage /> },
      { path: "hotels/pickUp/:id", element: <PickUp /> },
      { path: "hotels/pickUp/:hotelId/room/:roomId", element: <Room /> },
      { path: "hotels/pickUp/:pickId/room/:roomId/review", element: <HotelReviewForm /> },
      { path: "hotels/pickUp/:pickId/room/:roomId/booking", element: <Booking /> },
      { path: "hotels/pickUp/:pickId/room/:roomId/count", element: <Count /> },

      { path: "HotelReviewForm", element: <HotelReviewForm /> },
      { path: "filters-panel", element: <FiltersPanel /> },
      { path: "destination", element: <Destination /> },
      { path: "paymentpage", element: <PaymentPage /> },
      { path: "paymentpage/succfullypay", element: <SuccfullyPay /> },
      { path: "compare", element: <Compare /> },
      { path: "flightbooking", element: <FlightBooking /> },
      { path: "internal", element: <Internal /> },
      { path: "favorite", element: <Favorite /> },
      { path: "flightbooking/flightselector", element: <FlightSelector /> },
      { path: "flightbooking/flightselector/seatselector", element: <SeatSelector /> },
      { path: "flightbooking/flightselector/seatselector/boardingpass", element: <BoardingPass />, },

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

export default function App() {
  return (
    <div className="p-6">
      <RouterProvider router={router} />
    </div>
  );
}
