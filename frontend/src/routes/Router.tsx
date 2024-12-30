import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import About from "../pages/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
