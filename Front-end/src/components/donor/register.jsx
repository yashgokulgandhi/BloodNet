import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import "./registrationPage.css"; // Adjust path as needed

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    bloodType: "",
    addresses: [], // Will store geolocation silently
    phone: "",
    age: "",
    weight: "",
  });

  // Get user's location when component mounts and store it silently
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newAddress = {
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString(),
          };
          setFormData(prev => ({
            ...prev,
            addresses: [newAddress], // Store geolocation data silently
          }));
        },
        (error) => {
          console.error("Error getting location:", error);
          // Silently fail - no address will be included if geolocation fails
        }
      );
    } else {
      console.warn("Geolocation is not supported by your browser.");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const jsonData = {
      username: formData.username,
      fullName: formData.fullName,
      email: formData.email,
      age: parseInt(formData.age),
      weight: parseInt(formData.weight),
      password: formData.password,
      phone: formData.phone,
      addresses: formData.addresses.map(addr => ({
        latitude: parseFloat(addr.latitude),
        longitude: parseFloat(addr.longitude),
      })),
      bloodType: formData.bloodType,
    };

    try {
      const response = await fetch("http://localhost:8080/registeration/donor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        alert("Registration successful!");
        window.location.href = "/login";
      } else {
        const errorData = await response.json();
        console.error("Submission failed:", errorData);
        alert(`Failed to register: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error during submission:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="bg-v-shape"></div>

      <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-6 sm:p-8">
        <div className="text-center mb-6">
          <div className="text-rose-600 text-3xl font-bold flex items-center justify-center gap-2">
            <Heart className="h-8 w-8" />
            HEALTH BLOOD DONOR
          </div>
          <h2 className="text-2xl font-semibold text-rose-700 mt-3">
            Register as a Blood Donor
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Provide your details to help save lives.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="form-control"
                placeholder="Unique username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="fullName" className="block font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                className="form-control"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="example@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-medium text-gray-700">
                Contact Number
              </label>
              <input
                id="phone"
                type="tel"
                className="form-control"
                placeholder="1234567890"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="age" className="block font-medium text-gray-700">
                Age
              </label>
              <input
                id="age"
                type="number"
                className="form-control"
                placeholder="Your Age"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="weight" className="block font-medium text-gray-700">
                Weight (kg)
              </label>
              <input
                id="weight"
                type="number"
                className="form-control"
                placeholder="Your Weight"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="bloodType" className="block font-medium text-gray-700">
                Blood Type
              </label>
              <select
                id="bloodType"
                className="form-control"
                value={formData.bloodType}
                onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
                required
              >
                <option value="">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="form-control"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-rose-500 text-white font-semibold py-3 rounded-lg hover:bg-rose-600 transition"
          >
            Register as Donor
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already registered?{" "}
            <a href="/donor/login" className="text-rose-500 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}