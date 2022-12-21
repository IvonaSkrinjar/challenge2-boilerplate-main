import React from "react";
import { useFormikContext } from "formik";
import { Typography, Grid } from "@mui/material";
import ProductDetails from "./ProductDetails";
import ShippingDetails from "./ShippingDetails";
import PaymentDetails from "./PaymentDetails";

export default function ReviewOrder() {
    const { values: formValues } = useFormikContext();
    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom>
            Order summary
            </Typography>
            <ProductDetails />
            <Grid container spacing={2} style={{paddingTop: "3rem"}}>
                <ShippingDetails formValues={formValues} />
                <PaymentDetails formValues={formValues} />
            </Grid>
        </React.Fragment>
    );
}
