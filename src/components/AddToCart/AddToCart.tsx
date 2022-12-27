import React from "react";
import { Box, Button, Typography } from "@mui/material";
import AmountButtons from "components/AmountButtons";
import { CartContext } from "context/cart/CartContext";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { IProduct } from "interfaces";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

interface IProps {
  product: IProduct;
}
const AddToCart = ({ product }: IProps) => {
  const { addToCart } = useContext(CartContext);
  const [amount, setAmount] = useState(1);
  const { t } = useTranslation();

  const onDecreaseAmount = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount - 1;
      if (newAmount < 1) {
        newAmount = 1;
      }
      return newAmount;
    });
  };

  const onIncreaseAmount = () => {
    setAmount((oldAmount) => {
      return oldAmount + 1;
    });
  };

  return (
    <>
      <AmountButtons
        onIncreaseAmount={onIncreaseAmount}
        onDecreaseAmount={onDecreaseAmount}
        amount={amount}
      />
      <Button
        component={NavLink}
        to="/cart"
        variant="contained"
        className={styles.button}
        onClick={() => addToCart(amount, product)}
      >
        <Typography className={styles.headline}>
          <Box className={styles.add_to_cart}> {t("add-to-cart")}</Box>
        </Typography>
      </Button>
    </>
  );
};

export default AddToCart;
