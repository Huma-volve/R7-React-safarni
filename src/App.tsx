import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/home/Home";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import GetStarted from "./page/GetStart/GetStarted";
export default function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <h1 className="text-red-500 p-8">404 - Page Not Found</h1>,
      children: [
        { index: true, element: <Home /> },
        // { index: true, element: <HomBooking /> },

        { index: true, element: <Home /> },

        { index: true, element: <Home /> },

      ],
    },
    {
      path: "",
      element: <AuthLayout />,
      errorElement: <h1 className="text-red-500 p-8">404 - Page Not Found</h1>,
      children: [
        { path: "/getstaterd", element: <GetStarted /> },
      ],
    }
  ]);
  return (
    <div className="p-6">
      <RouterProvider router={router} />

    </div>
  );
}
