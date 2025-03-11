import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function Router() {
  return (
    <BrowserRouter basename="/my-portfolio-web">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
