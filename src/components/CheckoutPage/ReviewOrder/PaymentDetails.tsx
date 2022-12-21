import React from "react";
import { Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

function PaymentDetails(props: any) {
    const { formValues } = props;
    const { nameOnCard, cardNumber } = formValues;
    const { t } = useTranslation();
   
     
    return (
        <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
                {t("payment-details")}
            </Typography>
            <Grid container>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography style={{ fontSize: "14px" }} gutterBottom>
                            {t("card-type")}
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
                            {t("nameOnCard")}
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
                            {t("cardNumber")}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography style={{ fontSize: "14px" }} gutterBottom>
                            {cardNumber}
                        </Typography>
                    </Grid>
                </React.Fragment>
            </Grid>
        </Grid>
    );
}

export default PaymentDetails;
