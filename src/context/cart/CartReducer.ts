import { ICartProduct } from "interfaces";

export const cartReducer = (state: any, action: any) => {
    switch (action.type) {
    case "addToCart":{
        const { id, amount, product } = action.payload;

        const tempItem = state.cart.find((i: any) => i.id === id);

        if (tempItem) {
            const tempCart = state.cart.map((cartItem: any) => {
                if (cartItem.id === id) {
                    const newAmount = cartItem.amount + amount;

                    return { ...cartItem, amount: newAmount };
                }
                else {
                    return cartItem;
                }
            });
            return { ...state, cart: tempCart };

        } else {
            const newItem = {
                id: id,
                title: product.title,
                amount,
                image: product.image,
                price: product.price
            };

            return { ...state, cart: [newItem, ...state.cart] };
        }
    }
    case "removeItem":{
        const tempCart = state.cart.filter(
            (item: ICartProduct) => item.id !== action.payload
        );
        return {
            ...state,
            cart: tempCart,
        };
    }
    case "clearCart":
        return {
            ...state,
            cart: [],
        };

    case "toggleAmount":{
        const { value } = action.payload;
        const tempCartItem = state.cart.map((item: any) => {
            if (item.id === action.payload.id)
                if (value === "inc") {
                    let incAmount = item.amount + 1;

                    if (incAmount >= item.max) {
                        incAmount = item.max;
                    }

                    return {
                        ...item,
                        amount: incAmount,
                    };
                }
            if (value === "desc") {
                let decAmount = item.amount - 1;

                if (decAmount < 1) {
                    decAmount = 1;
                }

                return {
                    ...item,
                    amount: decAmount,
                };
            }
            else {
                return item;
            }
        });
        return {
            ...state,
            cart: tempCartItem,
        };
    }
    case "countCartTotal":{
        const { total_items, total_amount } = state.cart.reduce(
            (total: any, cartItem: ICartProduct) => {
                const { amount, price } = cartItem;
                total.total_items += amount;
                total.total_amount += price * amount;
                return total;
            },
            {
                total_items: 0,
                total_amount: 0
            });

        return {
            ...state,
            total_items,
            total_amount,
        };
    }
    default:
        return state;
    }
};
