import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, user }) {
  if (user) {
    return children;
  } else {
    return <Navigate to="/register" />;
  }
}

export default ProtectedRoute;
