import { useState } from "react";
import "./hospitalReg.css";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const hospitalData = {
      username: formData.username,
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      address: formData.address,
    };

    try {
      const response = await fetch("http://localhost:8080/registeration/hospital", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hospitalData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Hospital registered successfully!");
        console.log("Response:", data);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "Failed to register hospital."}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while registering the hospital.");
    }
  };

  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-emerald-600 text-2xl font-bold flex items-center justify-center gap-2">
            <span className="h-8 w-8">🏥</span>
            HOSPITAL
          </div>
          <h2 className="text-2xl text-emerald-600 font-semibold">Create an account</h2>
          <p className="text-gray-600">
            Enter your information to create your hospital account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
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

          {/* Full Name */}
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="City Hospital"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
              className="w-full border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Address */}
          <div className="space-y-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="123, Main Street, City Name"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
              className="w-full border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="city.hospital@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="1234567890"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="w-full border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Password */}
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

          {/* Confirm Password */}
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
              className="w-full border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-2 px-4"
          >
            Create account
          </button>
        </form>

        {/* Footer */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/hospital/login" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
