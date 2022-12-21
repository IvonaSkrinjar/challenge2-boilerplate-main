import React from "react";
import { useFormikContext } from "formik";
import { Typography, Grid } from "@mui/material";
import ProductDetails from "./ProductDetails";
import ShippingDetails from "./ShippingDetails";
import PaymentDetails from "./PaymentDetails";
import { useTranslation } from "react-i18next";

export default function ReviewOrder() {
    const { values: formValues } = useFormikContext();
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom>
                {t("order-summary")}
            </Typography>
            <ProductDetails />
            <Grid container spacing={2} style={{ paddingTop: "3rem" }}>
                <ShippingDetails formValues={formValues} />
                <PaymentDetails formValues={formValues} />
            </Grid>
        </React.Fragment>
    );
}
