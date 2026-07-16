import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PublicRoute({ children }) {
  const { currentUser } = useAuth();

  console.log("PublicRoute currentUser:", currentUser);

  return children;
}

export default PublicRoute;