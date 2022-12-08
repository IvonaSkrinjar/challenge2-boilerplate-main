import React, { useContext } from "react";
import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import { CartContext } from "context/cart/CartContext";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CartContent } from "components/CartContent";
import { Button } from "@mui/material";

const CartPage = () => {
    const { cart } = useContext(CartContext);
    if (cart.length < 1) {
        return (
            <Wrapper className="page-100">
                <div className="empty">
                    <h2>No products in the cart.</h2>
                    <Button
                        component={NavLink}
                        to={"/"}
                        variant="contained"
                        className="start-button"
                    >
            Start Shopping
                    </Button>
                </div>
            </Wrapper>
        );
    }

    return (
        <Wrapper className="page">
            <AppLayout>
                <Headline title="Cart" />
                <CartContent />
            </AppLayout>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
  .cartPage {
    display: grid;
    margin: 2.375rem 0;
    gap: 30px;
    grid-template-columns: 1fr 400px;
  }
  .cartItems {
    margin-top: 30px;
  }
  .proceedBtn {
    margin-top: 20px;
    background: #232326;
    color: #fff;
    font-size: 16px;
  }

  .cartTotalWrapp {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media only screen and (max-width: 1024px) {
    .cartPage {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      grid-row-gap: 15px;
      row-gap: 15px;
    }
  }
  .clear-button {
    width: 45rem;
    height: 7rem;
  }
`;

export default CartPage;
