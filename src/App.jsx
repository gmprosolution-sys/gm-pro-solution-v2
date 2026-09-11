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
  );
}
