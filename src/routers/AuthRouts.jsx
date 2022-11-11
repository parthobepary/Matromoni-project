import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function AuthRoute({ children }) {
  let location = useLocation();
  const { authenticated, loading } = useSelector((state) => state.authValue);

  return authenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default AuthRoute;
