import React from "react";
import { Typography, Grid } from "@material-ui/core";

function PaymentDetails(props: any) {
    const { formValues } = props;
    const { nameOnCard, cardNumber } = formValues;
    return (
        <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom >
          Payment details
            </Typography>
            <Grid container>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography gutterBottom>Card type</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom>Visa</Typography>
                    </Grid>
                </React.Fragment>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography gutterBottom>Card Name</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{nameOnCard}</Typography>
                    </Grid>
                </React.Fragment>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography gutterBottom>Card number</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{cardNumber}</Typography>
                    </Grid>
                </React.Fragment>              
            </Grid>
        </Grid>
    );
}

export default PaymentDetails;
