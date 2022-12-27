import React, { useContext, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import numberFormatCurrency from "common/numberFormatCurrency";
import { CartContext } from "context/cart/CartContext";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const CartSummaryItem = () => {
  const { totalCartAmount, countCartTotal, shippingFee } =
    useContext(CartContext);
  const { t } = useTranslation();

  useEffect(() => {
    countCartTotal();
  }, [totalCartAmount]);

  return (
    <Card elevation={15} className={styles.card_summary}>
      <CardContent>
        <Typography
          variant="h5"
          component="h5"
          color="textSecondary"
          gutterBottom
        >
          {t("shopping-cart")}
        </Typography>
        <Typography variant="h3" component="h3">
          {t("order-summary")}
        </Typography>
        <Divider />
        <Grid container className={styles.container} spacing={1}>
          <Grid item xs={11} sm={11} md={10}>
            <Typography variant="h5" component="h5">
              {t("subtotal")}:
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={2}>
            <Typography
              variant="h5"
              component="div"
              className={styles.card_action}
            >
              {numberFormatCurrency.formatNumber(totalCartAmount)}
            </Typography>
          </Grid>
          <Grid item xs={11} sm={11} md={10}>
            <Typography variant="h5" component="h5">
              {t("shipping")}:
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={2}>
            <Typography
              className={styles.card_action}
              variant="h5"
              component="div"
            >
              {numberFormatCurrency.formatNumber(shippingFee)}
            </Typography>
          </Grid>
          <Grid item xs={11} sm={11} md={10}>
            <Typography variant="h5" component="h5">
              <Box className={styles.card_title}>{t("order-total")}:</Box>
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={2}>
            <Typography variant="h5" component="div">
              <Box className={styles.card_total}>
                {numberFormatCurrency.formatNumber(
                  totalCartAmount + shippingFee
                )}
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={styles.card_action}>
        <Button
          component={NavLink}
          to={"/checkout"}
          variant="contained"
          size="large"
          sx={{
            fontSize: "12px",
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          {t("proceed-checkout")}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartSummaryItem;
