import React from "react";
import { Typography, Grid } from "@material-ui/core";

function PaymentDetails(props: any) {
    const { formValues } = props;
    const { nameOnCard, cardNumber } = formValues;
    return (
        <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
          Payment details
            </Typography>
            <Grid container>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography style={{ fontSize: "14px" }} gutterBottom>
                Card type
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography style={{ fontSize: "14px" }} gutterBottom>
                Visa
                        </Typography>
                    </Grid>
                </React.Fragment>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography style={{ fontSize: "14px" }} gutterBottom>
                Card Name
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography style={{ fontSize: "14px" }} gutterBottom>
                            {nameOnCard}
                        </Typography>
                    </Grid>
                </React.Fragment>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography style={{ fontSize: "14px" }} gutterBottom>
                Card number
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography style={{ fontSize: "14px" }}  gutterBottom>
                            {cardNumber}
                        </Typography>
                    </Grid>
                </React.Fragment>
            </Grid>
        </Grid>
    );
}

export default PaymentDetails;
