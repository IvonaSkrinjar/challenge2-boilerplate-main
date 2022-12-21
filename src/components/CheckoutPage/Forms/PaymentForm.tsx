import React from "react";
import { Grid, Typography } from "@mui/material";
import { InputField } from "../../InputField";

export default function PaymentForm(props: any) {
    const {
        formField: { nameOnCard, cardNumber, cvv, expiryDate },
    } = props;

    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom>
          Payment method
            </Typography>
            <Grid container spacing={3} sx={{paddingTop: "3rem"}}>
                <Grid item xs={12} md={6}>
                    <InputField
                        name={nameOnCard.name}
                        label={nameOnCard.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField
                        name={cardNumber.name}
                        label={cardNumber.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField
                        name={expiryDate.name}
                        label={expiryDate.label}
                        fullWidth
                        inputProps={{
                            maxLength: 5,
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField
                        name={cvv.name}
                        label={cvv.label}
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
