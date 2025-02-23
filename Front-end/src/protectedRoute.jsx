import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ role, redirectPath = "/" }) => {
  const storedRole = localStorage.getItem("role");
  const isAuthenticated = localStorage.getItem("username");

  // If not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  // If role is specified and doesn't match, redirect to the home page
  if (role && storedRole !== role) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, allow access to the route
  return <Outlet />;
};

export default ProtectedRoute;