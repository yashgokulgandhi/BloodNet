import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import "./registrationPage.css"; // Adjust the path as needed

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    bloodType: "",
    addresses: {}, // Geolocation data
    phone: "",
    age: "",
    weight: "",
  });

  // Get user's location when component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prev) => ({
            ...prev,
            addresses: {
              latitude: position.coords.latitude.toString(),
              longitude: position.coords.longitude.toString(),
            },
          }));
        },
        (error) => {
          console.error("Error getting location:", error);
          // Set default location if geolocation fails
          setFormData((prev) => ({
            ...prev,
            addresses: {
              latitude: "0.0",
              longitude: "0.0",
            },
          }));
        }
      );
    } else {
      console.warn("Geolocation is not supported by your browser.");
    }
  }, []);

  // Handle form submission
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
      addresses: {
        latitude: parseFloat(formData.addresses.latitude),
        longitude: parseFloat(formData.addresses.longitude),
      },
      bloodType: formData.bloodType,
    };

    try {
      const response = await fetch("http://localhost:8080/registration/donor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

      if (response.ok) {
        alert("Registration successful!");
        window.location.href = "/donor/login";
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
            {["username", "fullName", "email", "phone", "age", "weight"].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block font-medium text-gray-700">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  id={field}
                  type={field === "age" || field === "weight" ? "number" : "text"}
                  className="form-control"
                  placeholder={`Enter ${field}`}
                  value={formData[field]}
                  onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                  required
                />
              </div>
            ))}

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
                {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {["password", "confirmPassword"].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block font-medium text-gray-700">
                {field === "confirmPassword" ? "Confirm Password" : "Password"}
              </label>
              <input
                id={field}
                type="password"
                className="form-control"
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                required
              />
            </div>
          ))}

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
