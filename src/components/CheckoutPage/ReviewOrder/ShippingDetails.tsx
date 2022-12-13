import React from "react";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";

function PaymentDetails(props: any) {
    const { formValues } = props;
    const classes = useStyles();
    const { firstName, lastName, address } = formValues;
    return (
        <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
        Shipping
            </Typography>
            <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
            <Typography gutterBottom>{`${address}`}</Typography>
        </Grid>
    );
}

export default PaymentDetails;
