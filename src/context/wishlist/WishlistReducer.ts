import { IWishlistProduct } from "interfaces";

export const wishlistReducer = (state: any, action: any) => {
    switch (action.type) {
    case "addToWishlist":{
        const { id,  product } = action.payload;

        const tempItem = state.wishlist.find((i: any) => i.id === id);

        if (tempItem) {
            const tempWishlist = state.wishlist.map((item: any) => {
                if (item.id === id) {                 
                    return { ...item};
                }               
            });
            return { ...state, wishlist: tempWishlist };

        } else {
            const newItem = {
                id: id,
                title: product.title,              
                image: product.image,
                price: product.price
            };

            return { ...state, wishlist: [newItem, ...state.wishlist] };
        }
    }
    case "removeFavoriteItem":{
        const tempWishlist = state.wishlist.filter(
            (item: IWishlistProduct) => item.id !== action.payload
        );
        return {
            ...state,
            wishlist: tempWishlist
        };
    }
    case "clearWishlist":
        return {
            ...state,
            wishlist: []
        };

  
    case "countWishlistTotal":{
        const { totalFavoriteItems } = state.wishlist.reduce(
            (total: any) => {          
                total.totalFavoriteItems += 1;               
                return total;
            },
            {
                totalFavoriteItems: 0
            });

        return {
            ...state,
            totalFavoriteItems               
        };
    }   
    
    default:
        return state;
    }
};
