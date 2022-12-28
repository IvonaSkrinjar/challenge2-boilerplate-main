import React from "react";
import { Button, Grid } from "@mui/material";
import { CartItem } from "components/CartItem";
import CartSummaryItem from "components/CartSummaryItem";
import { CartContext } from "context/cart/CartContext";
import { ICartProduct } from "interfaces";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const CartContent = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { t } = useTranslation();


  return (
    <Grid container columnSpacing={5} className={styles.cart_container}>
      <Grid item xs={12} sm={12} md={5} lg={5}>
        <Grid container spacing={3}>
          {cart?.map((item: ICartProduct) => (
            <Grid item key={item.id}>
              <CartItem key={item.id} {...item} />
            </Grid>
          ))}
          <Grid
            className={styles.cart_buttons}
            item
            xs={5}
            sm={5}
            md={5}
            lg={5}
          >
            <Button
              className={styles.continue_shopping}
              sx={{
                fontSize: "12px",
              }}
              component={NavLink}
              to={"/"}
              variant="contained"
            >
              {t("continue-shopping")}
            </Button>
          </Grid>
          <Grid
            className={styles.cart_buttons}
            item
            xs={5}
            sm={5}
            md={5}
            lg={5}
          >
            <Button
              className={styles.clear_cart}
              sx={{
                backgroundColor: "red",
                color: "white",
                fontSize: "12px",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#3c52b2",
                  opacity: 1,
                },
              }}
              onClick={() => clearCart()}
            >
              {t("clear-cart")}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={styles.summary_items} item xs={12} sm={12} md={7} lg={7}>
        <CartSummaryItem />
      </Grid>
    </Grid>
  );
};

export default CartContent;
