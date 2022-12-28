import React from "react";
import { Typography, Grid, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

function ShippingDetails(props: any) {
  const { formValues } = props;
  const { firstName, lastName, address, city, country, zipcode } = formValues;
  const { t } = useTranslation();

  return (
    <Grid item xs={12} sm={6} md={7}>
      <Typography variant="h4" gutterBottom>
        {t("shipping")}
      </Typography>
      <Divider className={styles.divider} />
      <Typography
        className={styles.first_name}
        variant="h5"
        component="h5"
        gutterBottom
      >{`${firstName} ${lastName}`}</Typography>
      <Typography variant="h5" component="h5" gutterBottom>
        {`${address}`} {`${city}`}
      </Typography>
      <Typography variant="h5" component="h5" gutterBottom>
        {`${zipcode}`} {`${country}`}
      </Typography>
    </Grid>
  );
}

export default ShippingDetails;
