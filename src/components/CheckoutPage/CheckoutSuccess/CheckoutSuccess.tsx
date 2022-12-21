import React from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function CheckoutSuccess() {
    const { t } = useTranslation();
   
    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom>
                {t("thanks")}
            </Typography>     
        </React.Fragment>
    );
}

export default CheckoutSuccess;
