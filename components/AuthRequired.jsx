import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthRequired() {
  const authenticated = localStorage.getItem("loggedIn");
  const location = useLocation();

  return (
    <>
      {authenticated ? (
        <Outlet />
      ) : (
        <Navigate
          to="/login"
          state={{ message: "You must login first", from: location.pathname }}
          replace
        />
      )}
    </>
  );
}
