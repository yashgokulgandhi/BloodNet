import { useState } from "react";
import { Heart } from "lucide-react";
import "./registrationPage.css"; // Adjust path as needed

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    bloodGroup: "",
    addresses: [""],
    phone: "",
    age: "",
    weight: "",
  });

  const handleAddressChange = (index, value) => {
    const updatedAddresses = [...formData.addresses];
    updatedAddresses[index] = value;
    setFormData({ ...formData, addresses: updatedAddresses });
  };

  const addAddressField = () => {
    setFormData({ ...formData, addresses: [...formData.addresses, ""] });
  };

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
      age: formData.age,
      weight: formData.weight,
      password: formData.password,
      phone: formData.phone,
      addresses: formData.addresses,
      bloodGroup: formData.bloodGroup, // Will send in enum format
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
        window.location.href = "/login"; // Redirect to login on success
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
              <label htmlFor="bloodGroup" className="block font-medium text-gray-700">
                Blood Group
              </label>
              <select
                id="bloodGroup"
                className="form-control"
                value={formData.bloodGroup}
                onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                required
              >
                <option value="">Select Blood Group</option>
                <option value="A_POSITIVE">A+</option>
                <option value="A_NEGATIVE">A-</option>
                <option value="B_POSITIVE">B+</option>
                <option value="B_NEGATIVE">B-</option>
                <option value="O_POSITIVE">O+</option>
                <option value="O_NEGATIVE">O-</option>
                <option value="AB_POSITIVE">AB+</option>
                <option value="AB_NEGATIVE">AB-</option>
              </select>
            </div>

            {formData.addresses.map((address, index) => (
              <div key={index}>
                <label
                  htmlFor={`address-${index}`}
                  className="block font-medium text-gray-700"
                >
                  Address {index + 1}
                </label>
                <input
                  id={`address-${index}`}
                  type="text"
                  className="form-control"
                  placeholder="Address details"
                  value={address}
                  onChange={(e) => handleAddressChange(index, e.target.value)}
                  required
                />
              </div>
            ))}
            <button
              type="button"
              className="w-full bg-rose-200 text-rose-700 font-medium py-2 rounded-lg hover:bg-rose-300"
              onClick={addAddressField}
            >
              + Add Another Address
            </button>
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
            <a href="/login" className="text-rose-500 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
