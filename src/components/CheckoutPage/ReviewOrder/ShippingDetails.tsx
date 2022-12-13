import React from "react";
import { Typography, Grid } from "@material-ui/core";

function PaymentDetails(props: any) {
    const { formValues } = props;
    const { firstName, lastName, address } = formValues;
    return (
        <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
          Shipping
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
