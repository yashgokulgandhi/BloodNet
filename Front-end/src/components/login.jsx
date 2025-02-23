import { useState } from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom"; // React Router for navigation
import './login.css';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/login/donor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Login successful!");
        navigate("/welcome", { state: { name: data.username } });
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
    <div className="min-vh-100 bg-rose-50 d-flex align-items-center justify-content-center">
      <div className="card shadow-lg border-0 p-4 w-100" style={{ maxWidth: "400px" }}>
        <div className="text-center mb-4">
          <div className="text-danger fw-bold fs-3 d-flex justify-content-center align-items-center gap-2">
            <Heart size={32} />
            HEALTH
          </div>
          <h3 className="text-rose-600 fw-semibold">Welcome back</h3>
          <p className="text-muted">Enter your username and password to login</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-medium">Username</label>
            <input
              id="username"
              type="text"
              className="form-control bg-light"
              placeholder="donor"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-medium">Password</label>
            <input
              id="password"
              type="password"
              className="form-control bg-light"
              placeholder="donorpass"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="btn btn-danger w-100 mb-3">
            Sign in
          </button>

          <div className="text-center">
            <p className="text-muted">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-danger fw-medium">
                Register here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
