import { useEffect, useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./CartReducer";
import {  ICartProduct, IProduct } from "interfaces";

type PaymentMathodType = "cash_delivery" | "bank_transfer" | "paypal";

export interface CartState {
  cart: ICartProduct[], 
  shipping_fee: 5,
  //tax: 20,
  total_amount: 0,
  total_items: 0,
  paymentMethod: PaymentMathodType;
}
const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart === 'undefined' || cart === null) {
    return [];
  } else {
    return JSON.parse(cart)
  }
};

export type CartContextProps = { 
  cart :  [];
  addToCart: (id: number, amount: number ,item: IProduct) => void;
  removeItem: (id: number) => void;
  countCartTotal(): any,
  clearCart:() => void,
  toggleAmount: (id: number, value: any) => void; 
  total_amount: 0,
  shipping_fee: 5,
  total_items: 0
};

const INITIAL_STATE = {
  cart: getLocalStorage(),
  total_items: 0,
  shipping_fee: 5,
  tax: 20,
  total_amount: 0,
  paymentMethod: "cash_delivery",
};

interface props {
  children: JSX.Element;
}

export const CartProvider = ({ children }: props) => {  
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  

  const addToCart = (id: any, amount: any, product: any) => {  
    dispatch({
      type: "addToCart",
      payload: { id, amount, product},
    });
  };

  const removeItem = (id: number) => {
    dispatch({ type: "removeFromCart", payload: id });   
  };
 
  
  const toggleAmount = (id: number,value: number) => {
    dispatch({ type: "toggleAmount", payload: {id, value }});
  };
 
  const clearCart = () => {
    dispatch({ type: "clearCart" });
  };

  const countCartTotal = () => {
    dispatch({ type: "countCartTotal" });
  };

  useEffect(() => {
    // dispatch({ type: "countCartTotal" });
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
        countCartTotal,
        total_amount: 0,
        shipping_fee: 5,
        total_items: 0
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
