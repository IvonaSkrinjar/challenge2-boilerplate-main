import React, { useContext } from "react";
import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import numberFormatCurrency from "common/numberFormatCurrency";
import AmountButtons from "components/AmountButtons";
import { CartContext } from "context/cart/CartContext";
import DeleteTwoToneIcon from "@mui/icons-material/Delete";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

interface IProps {
  id: number;
  image: string;
  title: string;
  price: number;
  amount: number;
}
const CartItem = ({ id, image, title, price, amount }: IProps) => {
  const { removeItem, toggleAmount } = useContext(CartContext);

  const onDecreaseAmount = () => {
    toggleAmount(id, "desc");
  };

  const onIncreaseAmount = () => {
    toggleAmount(id, "inc");
  };

  const { t } = useTranslation();

  return (
    <Card
      className={styles.card_item}
      elevation={15}
      sx={{
        maxHeight: { xs: "40rem", md: "25rem" },
        maxWidth: { xs: "50rem", md: "65rem" },
      }}
    >     
      <CardMedia 
        className={styles.card_media}      
        component="img"
        image={image}
        sx={{ width: "12rem", objectFit: "contain", paddingLeft: "1rem" }}
      />   
      <Box className={styles.card_content}>
        <CardContent>
          <Typography variant="h4" component="h4">
            {title}
          </Typography>
          <Divider />

          <Grid container className={styles.card_container} spacing={2}>
            <Grid item xs={4} sm={4} md={4}>
              <Typography variant="h5" component="h5">
                <Box className={styles.card_item_title}> {t("price")}</Box>
              </Typography>
            </Grid>

            <Grid item xs={5} sm={2} md={2}>
              <Typography variant="h5" component="h5">
                <Box className={styles.card_item_title}> {t("quantity")}</Box>
              </Typography>
            </Grid>

            <Grid item xs={3} sm={4} md={4}>
              <Typography variant="h5" component="h5">
                <Box className={styles.card_item_total}>{t("total-price")}</Box>
              </Typography>
            </Grid>
            <Grid item xs={4} sm={3} md={3}>
              <Typography variant="h5" component="div">
                {numberFormatCurrency.formatNumber(price)}
              </Typography>
            </Grid>
            <Grid item xs={4} sm={3} md={3}>
              <Typography>
                <AmountButtons
                  amount={amount}
                  onDecreaseAmount={onDecreaseAmount}
                  onIncreaseAmount={onIncreaseAmount}
                />
              </Typography>
            </Grid>
            <Grid item xs={3} sm={4} md={4}>
              <Typography variant="h5" component="div">
                <Box className={styles.card_total_price}>
                  {numberFormatCurrency.formatNumber(price * amount)}
                </Box>
              </Typography>
            </Grid>
            <Grid className={styles.remove_item} item xs={1} sm={2} md={2}>
              <Typography variant="h4" component="h4">
                <DeleteTwoToneIcon onClick={() => removeItem(id)} />
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CartItem;
