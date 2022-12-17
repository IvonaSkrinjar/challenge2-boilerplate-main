import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import numberFormatCurrency from "common/numberFormatCurrency";
import { CartContext } from "context/cart/CartContext";
import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CartSummaryItem = () => {
    const { totalCartAmount, countCartTotal, shippingFee } = useContext(CartContext);
    
    useEffect(() => {
        countCartTotal();   
    }, [totalCartAmount]);
  
    return (
        <Wrapper>
            <Card className="root" elevation={15}>
                <CardContent>
                    <Typography
                        sx={{ fontSize: "14px" }}
                        className="title"
                        color="textSecondary"
                        gutterBottom
                    >
              Shopping Cart
                    </Typography>
                    <Typography variant="h3" component="h3">
              Order Summary
                    </Typography>
                    <Typography variant="subtitle2">
                        <hr />
                    </Typography>
                    <Grid container>
                        <Grid item xs={11} sm={11} md={11} lg={11}>
                            <Typography
                                variant="body1"
                                component="div"
                                sx={{ fontSize: "14px" }}
                            >
                  Subtotal:
                            </Typography>
                        </Grid>
                        <Grid item xs={1} sm={1} md={1} lg={1}>
                            <Typography variant="h6" component="div">
                                {numberFormatCurrency.formatNumber(totalCartAmount)}
                            </Typography>
                        </Grid>
                        <Grid item xs={11} sm={11} md={11} lg={11}>
                            <Typography
                                variant="body1"
                                component="div"
                                sx={{ fontSize: "14px" }}
                            >
                  Shipping:
                            </Typography>
                        </Grid>
                        <Grid item xs={1} sm={1} md={1} lg={1}>
                            <Typography variant="h6" component="div">
                                {numberFormatCurrency.formatNumber(shippingFee)}
                            </Typography>
                        </Grid>
                        <Grid item xs={11} sm={11} md={11} lg={11}>
                            <Typography
                                variant="body1"
                                component="div"
                                sx={{ fontWeight: "bold", fontSize: "14px" }}
                            >
                  Order Total:
                            </Typography>
                        </Grid>
                        <Grid item xs={1} sm={1} md={1} lg={1}>
                            <Typography
                                style={{ fontWeight: "bold", fontSize: "14px" }}
                                variant="h6"
                                component="div"
                            >
                                {numberFormatCurrency.formatNumber(
                                    totalCartAmount + shippingFee
                                )}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button
                        component={NavLink}
                        to={"/checkout"}
                        variant="contained"
                        className="shopping-button"
                        size="large"
                        sx={{
                            fontSize: "12px",
                            "&:hover": {
                                opacity: 1,
                            },
                        }}
                    >
              Proceed To Checkout
                    </Button>
                </CardActions>
            </Card>
        </Wrapper>
    );
};

const Wrapper = styled.section`

.root{
 
  position: sticky;
  top: 1rem;
width: 400px;
}
.title: {
  font-size: 24px
},
.shopping-button: {
  margin-bottom: 12px
  padding: 1rem
}
`;
export default CartSummaryItem;
