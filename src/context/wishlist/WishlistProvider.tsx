import React, { useEffect, useReducer } from "react";
import { WishlistContext } from "./Wishlist";
import { wishlistReducer } from "./WishlistReducer";
import { IProduct, IWishlistProduct } from "interfaces";


export interface WishlistState {
  wishlist: IWishlistProduct[];
  totalFavoriteItems: 0;
}
const getLocalStorage = () => {
  const wishlist = localStorage.getItem("wishlist");
  if (wishlist === "undefined" || wishlist === null) {
    return [];
  } else {
    return JSON.parse(wishlist);
  }
};

export type WishlistContextProps = {
  wishlist: [];
  addToWishlist: (item: IProduct) => void;
  removeFavoriteItem: (id: number) => void;
  countWishlistTotal: () => void;
  clearWishlist: () => void;
  isCartOpen: false;
  totalFavoriteItems: number;
};

const INITIAL_STATE = {
  wishlist: getLocalStorage(),
  totalFavoriteItems: 0,
  isCartOpen: false
};

interface props {
  children: JSX.Element;
}

export const WishlistProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(wishlistReducer, INITIAL_STATE);

  const addToWishlist = (              
    product: IProduct
  ) => {
    dispatch({
      type: "addToWishlist",
      payload: { product },
    });
  };

  const removeFavoriteItem = (id: number) => {
    dispatch({ type: "removeFavoriteItem", payload: id });
  };   

  const clearWishlist = () => {
    dispatch({ type: "clearWishlist" });
  };
   
  const countWishlistTotal = () => {
    dispatch({ type: "countWishlistTotal" });
  };   
 

  useEffect(() => {
    dispatch({ type: "countWishlistTotal" });
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  return (
    <WishlistContext.Provider
      value={{
        ...state,
        addToWishlist,
        removeFavoriteItem,
        clearWishlist,
        countWishlistTotal,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
