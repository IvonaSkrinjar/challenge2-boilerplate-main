import { CartContext } from "context/cart/CartContext";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CartButtons = () => {
 /*
  const { total_items } = useContext(CartContext);
  return (
    <Wrapper className="cart-btn-wrapper">
      <NavLink to={"/cart"} className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
        </span>
        <span className="cart-value">{total_items}</span>
      </NavLink>
    </Wrapper>
  );*/
};

const Wrapper = styled.section`
  display: grid;
  grid-tempate-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: grey;
    font-size: 1.5rem;
    display: flex;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      magin-left: px;
    }
    .cart-value {
      display: flex;
      position: absolute;
      top: -10px;
      right: -16px;
      width: 16px;
      height: 16px;
      align-items: center;
      jusify-content: center;
      border-radius: 50%;
      font-size: 0.75 rem;
      color: white;
      pading: 12px;
    }
  }
`;
export default CartButtons;
