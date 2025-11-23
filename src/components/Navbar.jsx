import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0A1A2F] py-4 px-8 flex justify-between items-center text-white fixed top-0 left-0 z-50 shadow-lg">
      <h1 className="text-2xl font-bold">GM Pro Solution</h1>

      <div className="flex gap-10 text-lg font-semibold">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
