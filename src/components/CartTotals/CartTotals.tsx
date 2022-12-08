import numberFormatCurrency from "common/numberFormatCurrency";
import { CartContext } from "context/cart/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CartTotals = () => {
/*  const { total_amount, shipping_fee } = useContext(CartContext);

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            Subtotal :{" "}
            <span>{numberFormatCurrency.formatNumber(total_amount)}</span>
          </h5>
          <p>
            Shipping fee :{" "}
            <span>{numberFormatCurrency.formatNumber(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            Order Total :{" "}
            <span>
              {numberFormatCurrency.formatNumber(total_amount + shipping_fee)}
            </span>
          </h4>
        </article>
        <NavLink to={"/checkout"} className="btn">
          Proceed To Checkout
        </NavLink>
      </div>
    </Wrapper>
  );*/
};

const Wrapper = styled.section`  
margin-top: 3rem;
display: flex;
justify-content: center;
article{
  border: 1px solid grey;
  border-radius: var(--radius);
  padding: 1.5rem 3rem;
},
h4,h5,p{
  display:grid;
  grid-template-columns: 200px 1fr;
}
   } 
`;
export default CartTotals;
