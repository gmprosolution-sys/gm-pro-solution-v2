<<<<<<< HEAD
import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./About";
import Services from "./pages/Services";
import Values from "./pages/Values";
import Contact from "./Contact";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Values />
      <Contact />
    </LanguageProvider>
=======
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
>>>>>>> 6c5515b99044498b761a4481d496e840d47c83af
  );
}
