import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Inspection from "./pages/Inspection";
import Taxes from "./pages/Taxes";
import Contact from "./pages/Contact";
import Values from "./pages/Values";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/inspection" element={<Inspection />} />
        <Route path="/taxes" element={<Taxes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/values" element={<Values />} />
      </Routes>
    </BrowserRouter>
  );
}
