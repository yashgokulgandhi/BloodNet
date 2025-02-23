// import React from "react";

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
        <a href="/hospital/home" className="text-emerald-600 hover:text-emerald-700">
          Home
        </a>
        <a href="/hospital/services" className="text-emerald-600 hover:text-emerald-700">
          Services
        </a>
        <a href="/hospital/doctors" className="text-emerald-600 hover:text-emerald-700">
          Doctors
        </a>
        <a href="/hospital/contact" className="text-emerald-600 hover:text-emerald-700">
          Contact
        </a>
      </div>

      {/* Search and Buttons */}
      <div className="flex items-center gap-2">
        {/* Search Input */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-2 top-2.5 h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16l-4-4m0 0l4-4m-4 4h12m4 8a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="pl-8 w-[200px] bg-emerald-50 border rounded-lg py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        {/* Search Button */}
        <button className="bg-emerald-500 text-white rounded-lg py-2 px-4 hover:bg-emerald-600">
          Search
        </button>
        {/* Login Button */}
        <a href="/hospital/login">
          <button className="border border-emerald-500 text-emerald-500 rounded-lg py-2 px-4 hover:bg-emerald-50">
            Login
          </button>
        </a>
      </div>
    </nav>
  );
}
