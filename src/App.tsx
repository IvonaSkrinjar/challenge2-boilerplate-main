import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy, useContext, useEffect } from "react";
import { AuthContext } from "context/auth/AuthContext";
import { PrivateRoute } from "components/PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("pages/home"));
const CartPage = lazy(() => import("pages/cart"));
const ProductPage = lazy(() => import("pages/product"));
const LoginPage = lazy(() => import("pages/login"));
const CheckoutPage = lazy(() => import("pages/checkout"));
const ProfilePage = lazy(() => import("pages/profile"));
const NotFoundPage = lazy(() => import("pages/404"));

function App() {

  const { loadUser, isLoggedIn, isLoading } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      loadUser(token);
    }
  }, []);

  return (  
    <Suspense fallback={<div>isLoading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/checkout"
          element={
            isLoading
              ? null : (
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <CheckoutPage />
                </PrivateRoute>
              )                 
          }
        />
        <Route
          path="/profile"
          element={
            !isLoading ? (
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <ProfilePage />
              </PrivateRoute>
            ) : null
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>    
  );
}

export default App;
