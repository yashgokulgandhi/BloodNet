// import React from "react";
import './NavBarHospital.css'; // Import the CSS file

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="text-emerald-600 text-2xl font-bold flex items-center">
          <span className="text-3xl">🏥</span>
          HOSPITAL
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <a href="/hospital/home" className="nav-link">
          Home
        </a>
        <a href="/hospital/contact" className="nav-link">
          Contact
        </a>
        <a href="/hospital/bloodrequest" className="nav-link">
          Blood Request
        </a>
      </div>

      {/* Login Button */}
      <div>
        <a href="/hospital/login">
          <button className="border border-emerald-500 text-emerald-500 rounded-lg py-2 px-4 hover:bg-emerald-50 transition-all duration-200">
            Login
          </button>
        </a>
      </div>
    </nav>
  );
}
