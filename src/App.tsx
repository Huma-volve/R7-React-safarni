import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/home/Home";
import About from "./page/about/About";
import CarMain from "./page/car-booking/Home";
import PickUpPage from "./page/car-booking/pickUp";
import Map from "./page/car-booking/Map";
export default function App() {
  return (
    <div className="p-6">
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
