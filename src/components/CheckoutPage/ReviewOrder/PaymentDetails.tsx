import React from "react";
import { Typography, Grid, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

function PaymentDetails(props: any) {
  const { formValues } = props;
  const { nameOnCard, cardNumber } = formValues;
  const { t } = useTranslation();
   
     
  return (
    <Grid item container direction="column" xs={12} sm={6} md={5}>
      <Typography variant="h4" component="h4" gutterBottom>
        {t("payment-details")}
      </Typography>
      <Divider sx={{ width: "40rem" }} />
      <Grid container sx={{ paddingTop: "2rem" }}>
        <Grid item xs={6}>
          <Typography variant="h5" component="h5" gutterBottom>
            {t("card-type")}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" component="h5" gutterBottom>
            Visa
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" component="h5" gutterBottom>
            {t("nameOnCard")}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" component="h5" gutterBottom>
            {nameOnCard}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" component="h5" gutterBottom>
            {t("cardNumber")}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" component="h5" gutterBottom>
            {cardNumber}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PaymentDetails;
