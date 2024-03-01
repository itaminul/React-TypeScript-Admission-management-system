import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Navigate, Outlet, Route, RouteProps, useNavigate } from "react-router-dom";


const PrivateRoute = () => {
  const navigate = useNavigate();
const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticate);
      return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;