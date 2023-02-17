import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
