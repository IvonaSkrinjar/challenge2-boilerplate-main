import { Button, Typography } from "@mui/material";
import AmountButtons from "components/AmountButtons";
import { CartContext } from "context/cart/CartContext";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import { IProduct } from "interfaces";
import { useTranslation } from "react-i18next";

interface IProps {
  product: IProduct;
}
const AddToCart = ({ product }: IProps) => {
    const { addToCart } = useContext(CartContext);
    const [amount, setAmount] = useState(1);
    const { t } = useTranslation();
    const setDecrease = () => {
        setAmount((oldAmount) => {
            let newAmount = oldAmount - 1;
            if (newAmount < 1) {
                newAmount = 1;
            }
            return newAmount;
        });
    };

    const setIncrease = () => {
        setAmount((oldAmount) => {
            return oldAmount + 1;
        });
    };

    return (
        <Wrapper>
            <AmountButtons
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />
            <Button
                component={NavLink}
                to="/cart"
                variant="contained"
                className="button"
                onClick={() => addToCart(amount, product)}
            >
                <Typography fontSize="1.5rem" color="white">
                    {t("add-to-cart")}
                </Typography>
            </Button>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .button {
    height: 3rem;
  }
`;
export default AddToCart;
