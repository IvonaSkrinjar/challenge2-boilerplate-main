import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cart/CartProvider";
import { ProductProvider } from "./context/product/ProductProvider";
import {
    HomePage,
    NotFoundPage,
    CartPage,
    ProductPage,
    CheckoutPage,
} from "pages";
import { GlobalStyle } from "GlobalStyle";
import { ThemeProvider } from "styled-components";
import { FilterProvider } from "context/filter/FilterProvider";
import React from "react";


function App() {
    const theme = {
        colors: {
            heading: "rgb(24 24 29)",
            text: "rgba(29 ,29, 29, .8)",
            white: "#fff",
            black: " #212529",
            helper: "#8490ff",

            bg: "#F6F8FA",
            footer_bg: "#0a1435",
            btn: "rgb(98 84 243)",
            border: "rgba(98, 84, 243, 0.5)",
            hr: "#ffffff",
            gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
            shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
            shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
        },
        media: {
            mobile: "768px",
            tab: "998px",
        },
    };
 
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ProductProvider>
                <FilterProvider>
                    <CartProvider>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/cart" element={<CartPage />} />
                            <Route path="/product/:id" element={<ProductPage />} />
                            <Route path="/checkout" element={<CheckoutPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </CartProvider>
                </FilterProvider>
            </ProductProvider>
        </ThemeProvider>
    );
}

export default App;
