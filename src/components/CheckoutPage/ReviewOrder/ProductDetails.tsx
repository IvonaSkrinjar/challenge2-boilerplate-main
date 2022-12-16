import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { CartContext } from "context/cart/CartContext";
import { ICartProduct } from "interfaces";
import { Box, Grid } from "@mui/material";
import numberFormatCurrency from "common/numberFormatCurrency";

function ProductDetails() {
    const { cart, totalCartAmount, shippingFee } = useContext(CartContext);

    return (
        <Box sx={{ marginTop: "3rem" }}>
            <Grid container>
                {cart.map((item: ICartProduct) => (
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        key={item.id}
                        sx={{ paddingTop: "3rem", justifyContent: "flex-start" }}
                    >
                        <Grid item xs={12} sm={2} md={2} key={item.id}>
                            <Box
                                component="img"
                                sx={{
                                    paddingLeft: "2rem",
                                    maxHeight: { xs: 180, md: 100 },
                                    maxWidth: { xs: 3200, md: 100 },
                                    objectFit: "contain",
                                }}
                                alt="image"
                                src={item.image}
                            />
                        </Grid>
                        <Grid item sx={{ paddingRight: "35rem" }}>
                            <Typography
                                style={{ fontSize: "14px", width: "300px" }}
                                variant="h6"
                            >
                                {item.title} x {item.amount}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" style={{ fontWeight: "bold" }}>
                                {numberFormatCurrency.formatNumber(item.price * item.amount)}
                            </Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ paddingTop: "3rem", justifyContent: "flex-start" }}
            >
                <Grid item xs={12} sm={7} md={9}>
                    <Typography
                        style={{ fontSize: "14px", float: "right", paddingRight: "2rem" }}
                        variant="subtitle1"
                    >
            Subtotal:
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="h6"
                        style={{
                            fontWeight: "bold",
                            paddingLeft: "1rem",
                            flex: "1",
                        }}
                    >
                        {numberFormatCurrency.formatNumber(totalCartAmount)}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                    <Typography
                        style={{ fontSize: "14px", float: "right", paddingRight: "2rem" }}
                        variant="subtitle1"
                    >
            Shipping:
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="h6"
                        style={{
                            fontWeight: "bold",
                            paddingLeft: "1rem",
                            flex: "1",
                        }}
                    >
                        {numberFormatCurrency.formatNumber(shippingFee)}
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={7} md={9}>
                    <Typography
                        style={{
                            fontSize: "14px",
                            fontWeight: "bold",
                            float: "right",
                            paddingRight: "2rem",
                        }}
                        variant="subtitle1"
                    >
            Total Cost:
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="h6"
                        style={{
                            fontWeight: "bold",
                            paddingLeft: "1rem",
                            flex: "1",
                        }}
                    >
                        {numberFormatCurrency.formatNumber(totalCartAmount + shippingFee)}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProductDetails;
