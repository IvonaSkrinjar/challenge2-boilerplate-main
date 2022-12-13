import React from "react";
import { Typography } from "@material-ui/core";

function CheckoutSuccess() {
    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>
        Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
        Your order number is #515. We have emailed your order confirmation.
            </Typography>
        </React.Fragment>
    );
}

export default CheckoutSuccess;
