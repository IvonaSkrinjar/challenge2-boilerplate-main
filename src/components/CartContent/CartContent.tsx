import { Container, Button, Box, CssBaseline, Grid } from "@mui/material";
import { CartItem } from "components/CartItem";
import CartSummaryItem from "components/CartSummaryItem";
import { CartContext } from "context/cart/CartContext";
import { ICartProduct } from "interfaces";
import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CartContent = () => {
    const { cart, clearCart } = useContext(CartContext);

    return (
        <Wrapper>
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Grid container spacing={3}>
                        {cart.map((item: ICartProduct) => (
                            <Grid item xs={12} sm={6} md={7} lg={7} key={item.id}>
                                <Grid container>
                                    <Grid item xs>
                                        <CartItem key={item.id} {...item} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}

                        <Grid item xs={12} sm={6} md={5} lg={5}>
                            <CartSummaryItem />
                        </Grid>
                    </Grid>

                    <Box className="link-container">
                        <Button
                            component={NavLink}
                            to={"/"}
                            variant="contained"
                            className="shopping-button"
                        >
                Continue Shopping
                        </Button>
                        <Button
                            sx={{
                                marginLeft: "27rem",
                                height: "3rem",
                                backgroundColor: "red",
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "#fff",
                                    color: "#3c52b2",
                                    opacity: 1,
                                },
                            }}
                            onClick={() => clearCart()}
                        >
                Clear Shopping Cart
                        </Button>
                    </Box>
                </Container>
            </React.Fragment>
        </Wrapper>
    );
};

const Wrapper = styled.section`  
  .link-container {
    padding-top: 1rem;   
    
  }
  .link-button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    color: white;
    font-weight: 400;
    cursor-pointer;
    border-radius: 1rem;
  }
  .clear-button {
    background:black
  } 
 
`;
export default CartContent;
