import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/home/Home";
import About from "./page/about/About";
import NavBar from "./navBar/navbar";
export default function App() {
  return (
    <div className="p-6">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
