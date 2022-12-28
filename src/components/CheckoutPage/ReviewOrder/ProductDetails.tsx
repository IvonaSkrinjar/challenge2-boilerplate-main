import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { CartContext } from "context/cart/CartContext";
import { ICartProduct } from "interfaces";
import { Box, Grid } from "@mui/material";
import numberFormatCurrency from "common/numberFormatCurrency";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

function ProductDetails() {
  const { cart, totalCartAmount, shippingFee } = useContext(CartContext);
  const { t } = useTranslation();

  return (
    <Box className={styles.product_details}>
      <Grid container >
        {cart.map((item: ICartProduct) => (
          <Grid
            className={styles.product_details_container}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            key={item.id}
          >
            <Grid item xs={12} sm={2} md={2} key={item.id}>
              <Box
                className={styles.product_details_image}
                component="img"
                sx={{
                  maxHeight: { xs: 100, md: 100 },
                  maxWidth: { xs: 100, md: 100 },
                }}
                alt="image"
                src={item.image}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              md={7}
              className={styles.product_details_title}
            >
              <Typography
                className={styles.product_details_title_amount}
                variant="h5"
                component="h5"
              >
                {item.title} x {item.amount}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3} md={3} className={styles.product_price}>
              <Typography variant="h5" component="h5">
                {numberFormatCurrency.formatNumber(item.price * item.amount)}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        className={styles.subtotal_container}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={6} sm={7} md={9}>
          <Typography
            className={styles.subtotal}
            variant="h5"
            component="h5"
            gutterBottom
          >
            {t("subtotal")}:
          </Typography>
        </Grid>
        <Grid item xs={6} sm={7} md={3}>
          <Typography
            className={styles.amount}
            variant="h5"
            component="h5"
            gutterBottom
          >
            {numberFormatCurrency.formatNumber(totalCartAmount)}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={7} md={9}>
          <Typography
            className={styles.shipping}
            gutterBottom
            variant="h5"
            component="h5"
          >
            {t("shipping")}:
          </Typography>
        </Grid>
        <Grid item xs={6} sm={7} md={3}>
          <Typography
            className={styles.amount}
            gutterBottom
            variant="h5"
            component="h5"
          >
            {numberFormatCurrency.formatNumber(shippingFee)}
          </Typography>
        </Grid>

        <Grid item xs={6} sm={7} md={9}>
          <Typography
            className={styles.total_cost}
            gutterBottom
            variant="h5"
            component="h5"
          >
            {t("total-cost")}:
          </Typography>
        </Grid>
        <Grid item xs={6} sm={7} md={3}>
          <Typography
            className={styles.amount}
            gutterBottom
            variant="h5"
            component="h5"
          >
            {numberFormatCurrency.formatNumber(totalCartAmount + shippingFee)}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductDetails;
