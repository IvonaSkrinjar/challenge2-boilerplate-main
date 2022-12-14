import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { ProductProvider } from "context/product/ProductProvider";
import { FilterProvider } from "context/filter/FilterProvider";
import { CartProvider } from "context/cart/CartProvider";
import { WishlistProvider } from "context/wishlist/WishlistProvider";
import { AuthProvider } from "context/auth/AuthProvider";
import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <AuthProvider>
      <ProductProvider>
        <FilterProvider>
          <CartProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </CartProvider>
        </FilterProvider>
      </ProductProvider>
    </AuthProvider>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
