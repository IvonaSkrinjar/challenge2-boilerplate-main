import { CounterState } from "./CounterProvider";


type CounterAction =
  | { type: "Addition"; payload: null }
  | { type: "Subtraction"; payload: null}
  | { type: "removeFromCart"; payload: number }
  | { type: "updateQuantity"; payload: [] }
  | { type: "amountUpdate" };

export const cartReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
    
  switch (action.type) {
    case "Addition":
      return {
        ...state,
        total: state.total + 1,
      };

    case "Subtraction":
      return {
        ...state,
        total: state.total - 1,
      };

  

    default:
      return state;
  }
};
