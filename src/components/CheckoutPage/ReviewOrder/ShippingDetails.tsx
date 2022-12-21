import React from "react";
import { Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

function PaymentDetails(props: any) {
    const { formValues } = props;
    const { firstName, lastName, address } = formValues;
    const { t } = useTranslation();

    return (
        <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
                {t("shipping")}
            </Typography>
            <Typography
                style={{ fontSize: "14px" }}
                gutterBottom
            >{`${firstName} ${lastName}`}</Typography>
            <Typography
                style={{ fontSize: "14px" }}
                gutterBottom
            >{`${address}`}</Typography>
        </Grid>
    );
}

export default PaymentDetails;
