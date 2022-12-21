import React from "react";
import { Grid, Typography } from "@mui/material";
import { InputField } from "../../InputField";
import { useTranslation } from "react-i18next";

export default function PaymentForm(props: any) {
    const {
        formField: { nameOnCard, cardNumber, cvv, expiryDate },
    } = props;

    const { t } = useTranslation();
    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom>
                {t("payment-method")}
            </Typography>
            <Grid container spacing={3} sx={{ paddingTop: "3rem" }}>
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
