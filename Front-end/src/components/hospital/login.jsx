  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import "./hospitalLogin.css"; // Import the CSS file

  export default function HospitalLoginPage() {
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
          localStorage.setItem("username",username)
          localStorage.setItem("role","hospital")
          navigate("/hospital/home", { state: { name: data.username } });
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
        <div className="card shadow-lg p-6 w-full max-w-md">
          <div className="text-center mb-4">
            <div className="text-emerald font-bold text-2xl flex items-center justify-center gap-2">
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
            <h2 className="text-2xl text-emerald font-semibold">Welcome back</h2>
            <p className="text-muted">Enter your username and password to login</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="hospital1"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-emerald w-full">
              Sign in
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-muted">
              Don&apos;t have an account?{" "}
              <a href="/hospital/register" className="text-emerald">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
