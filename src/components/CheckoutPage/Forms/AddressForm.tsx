import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { InputField } from "../../InputField";


export default function AddressForm(props: any) {
    const {
        formField: {
            firstName,
            lastName,
            email,
            address,
            city,
            zipcode,
            country
        }
    } = props;
  
    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom>
          Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <InputField
                        name={firstName.name}
                        label={firstName.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={lastName.name} label={lastName.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={email.name} label={email.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={address.name} label={address.label} fullWidth />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <InputField name={city.name} label={city.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={country.name} label={country.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={zipcode.name} label={zipcode.label} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

