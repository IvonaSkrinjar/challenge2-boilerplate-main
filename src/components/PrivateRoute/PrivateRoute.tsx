import React, { ReactNode} from "react";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  isLoggedIn: boolean;
  children: ReactNode;
}

export function PrivateRoute({ isLoggedIn, children }: IProps): JSX.Element {
  const location = useLocation();
  return (
    <>
      {isLoggedIn ? (
        children
      ) : (
        <Navigate to="/login" replace  state={{ from: location }} />
      )}
    </>
  );
}

export default PrivateRoute;
