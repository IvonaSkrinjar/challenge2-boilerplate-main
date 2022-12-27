import React, { useEffect, useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./CartReducer";
import {  ICartProduct, IProduct } from "interfaces";

export interface CartState {
  cart: ICartProduct[], 
  shippingFee: 5,
  totalCartAmount: 0,
  totalCartItems: 0,
}

const getLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  if (cart === "undefined" || cart === null) {
    return [];
  } else {
    return JSON.parse(cart);
  }
};

export type CartContextProps = {
  cart: [];
  addToCart: (amount: number, item: IProduct) => void;
  removeItem: (id: number) => void;
  countCartTotal: () => void;
  clearCart: () => void;
  toggleAmount: (id: number, value: string) => void;
  totalCartAmount: number;
  shippingFee: number;
  totalCartItems: number;
};

const INITIAL_STATE = {
  cart: getLocalStorage(),
  totalCartItems: 0,
  shippingFee: 5,
  totalCartAmount: 0
};

interface props {
  children: JSX.Element;
}

export const CartProvider = ({ children }: props) => {  
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);  

  const addToCart = (amount: number, product: ICartProduct) => {
    dispatch({
      type: "addToCart",
      payload: { amount, product },
    });
  };

  const removeItem = (id: number) => {
    dispatch({ type: "removeItem", payload: id });   
  };
 
  
  const toggleAmount = (id: number, value: number) => {
    dispatch({ type: "toggleAmount", payload: {id, value }});
  };
 
  const clearCart = () => {
    dispatch({ type: "clearCart" });
  };

  const countCartTotal = () => {
    dispatch({ type: "countCartTotal" });
  };
    
  useEffect(() => {
    countCartTotal();
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  
  return (
    <CartContext.Provider
      value={{
        ...state,   
        addToCart,
        removeItem,        
        toggleAmount,
        clearCart,
        countCartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
