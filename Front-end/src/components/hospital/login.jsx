import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/login/hospital", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Login successful!");
        navigate("/hospital/welcome", { state: { name: data.username } });
      } else {
        const errorData = await response.json();
        alert(`Login failed: ${errorData.message || "Invalid credentials"}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="mb-4 text-center">
          <div className="flex justify-center mb-4 text-emerald-600 text-2xl font-bold items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 12h4m-2-2v4m9 4v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2m5-8h.01M12 9V3m6 6h.01M4 9h.01M20 9v2m0 4v2m-8-6v4m0 0H8m4 0h4"
              />
            </svg>
            HOSPITAL
          </div>
          <h2 className="text-2xl text-emerald-600 font-semibold">Welcome back</h2>
          <p className="text-gray-600">
            Enter your username and password to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="hospital1"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
              className="w-full border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="w-full border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-2 px-4"
          >
            Sign in
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <a
              href="/hospital/register"
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
