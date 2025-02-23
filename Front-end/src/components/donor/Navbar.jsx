import { FaSearch } from "react-icons/fa";
import './navbar.css'
import { useNavigate } from "react-router-dom"; // React Router hook for navigation

export default function NavBar() {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = () => {
    localStorage.removeItem("username")
    localStorage.removeItem("role")

    navigate("/"); // Navigate to login page on button click
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="text-red-500 text-2xl font-extrabold flex items-center">
          <span className="text-3xl">❤️</span>
          <span className="ml-1 tracking-wide">BloodNet</span>
        </div>
      </div>

      {/* Themed Navigation Links with underline effect */}
      <div className="hidden md:flex items-center gap-10">
        <a href="/donor/home" className="nav-link home">
          Home
        </a>
        <a href="/donor/service" className="nav-link service">
          Dashboard
        </a>
       
        <a href="/donor/check" className="nav-link contact">
          Check Eligibility
        </a>
        <a href="/donor/notification" className="nav-link product">
          Notifications
        </a>
        <a href="/donor/contact" className="nav-link contact">
          Contact
        </a>
      </div>

      {/* Search Bar & Login Button */}
      {/* <div className="flex items-center gap-3">
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 w-[220px] bg-rose-50 border border-gray-300 rounded-full py-2 outline-none focus:ring-2 focus:ring-rose-600 transition-all"
          />
        </div> */}
        {/* <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
          Search
        </button> */}
        <div>
        <button
          onClick={handleLogin}
          className="bg-rose-500 hover:bg-rose-600 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
