import React from "react";
import { Grid, Typography } from "@mui/material";
import { InputField } from "../../InputField";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";


export default function AddressForm(props: any) {
  const {
    formField: {
      firstName,
      lastName,
      email,
      address,
      city,
      zipcode,
      country
    }
  } = props;

  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        {t("shipping-address")}
      </Typography>
      <Grid
        container
        spacing={3}
        className={styles.address_form}
      >
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={t("firstname")} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={t("lastname")} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={email.name} label={t("email")} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={address.name} label={t("address")} fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputField name={city.name} label={t("city")} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={country.name} label={t("country")} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={zipcode.name} label={t("zipcode")} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

