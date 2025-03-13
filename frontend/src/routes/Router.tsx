import Layout from "@/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}
