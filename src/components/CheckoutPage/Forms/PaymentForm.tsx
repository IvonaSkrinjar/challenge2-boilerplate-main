import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { InputField } from "../../InputField";
import { useTranslation } from "react-i18next";
import visa from "../../../assets/images/visa.png";
import mastercard from "../../../assets/images/mastercard.png";
import styles from "./styles.module.css";

export default function PaymentForm(props: any) {
  const {
    formField: { nameOnCard, cardNumber, cvv, expiryDate },
  } = props;  
 
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography
            className={styles.payment_method}
            variant="h4"
            gutterBottom
          >
            {t("payment-method")}
          </Typography>
        </Grid>
        <Grid className={styles.credit_cards} item xs={12} md={6}>
          <Box
            className={styles.visa_card}
            component="img"
            src={visa}
            alt="visa"
          />
          <Box
            className={styles.master_card}          
            component="img"
            src={mastercard}
            alt="MasterCard"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField
            name={nameOnCard.name}
            label={t("nameOnCard")}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={cardNumber.name}
            label={t("cardNumber")}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={expiryDate.name}
            label={t("expiryDate")}
            fullWidth
            inputProps={{
              maxLength: 5,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={cvv.name}
            label={t("cvv")}
            fullWidth
            inputProps={{
              maxLength: 3,
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
