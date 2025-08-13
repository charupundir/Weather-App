import React from "react";
import { NavLink } from "react-router-dom";
import AppRoutes from "./routes";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-3 flex justify-between items-center">
        {/* Left Side - Title */}
        <h1 className="text-lg font-extrabold italic tracking-wide hover:text-yellow-300 transition-colors duration-300">
          Weather Tracker
        </h1>

        {/* Right Side - Links */}
        <div className="flex gap-4">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:underline">
            About
          </NavLink>
          <NavLink to="/settings" className="hover:underline">
            Settings
          </NavLink>
        </div>
      </nav>

      {/* Routes */}
      <AppRoutes />
    </div>
  );
}

export default App;

