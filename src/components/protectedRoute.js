import { Navigate } from "react-router";

function ProtectedRoute({ children }) {
  if (!localStorage.token) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
}
export default ProtectedRoute;
