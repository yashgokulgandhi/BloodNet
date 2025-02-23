import { useLocation } from "react-router-dom";

export default function WelcomePage() {
  const location = useLocation();
  const { name } = location.state || { name: "User" }; // Default to "User" if name is not provided

  return (
    <div className="min-vh-100 bg-rose-50 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="text-rose-600">Welcome, {name}!</h1>
        <p className="text-muted">Thank you for logging in!</p>
      </div>
    </div>
  );
}
