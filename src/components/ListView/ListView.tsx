import { Box, Button, IconButton, Typography } from "@mui/material";
import { IProduct, IWishlistProduct } from "interfaces";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import numberFormatCurrency from "../../common/numberFormatCurrency";
import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { AddShoppingCart } from "@mui/icons-material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { WishlistContext } from "context/wishlist/Wishlist";
import { CartContext } from "context/cart/CartContext";

interface IProps {
  products: IProduct[];
}
const ListView = ({ products }: IProps) => {
    const { addToCart } = useContext(CartContext);

    const { addToWishlist, wishlist, removeFavoriteItem } =
    useContext(WishlistContext);

    const handleAddToCart = (        
        amount: number,
        product: IProduct
    ) => addToCart(amount, product);

    return (
        <Wrapper className="section">
            <Grid container spacing={5}>
                {products?.map((product) => (
                    <Grid container key={product.id}>
                        <Grid
                            item
                            xs={12}
                            sm={3}
                            md={3}
                            style={{
                                justifyContent: "center",
                                display: "flex",
                            }}
                        >
                            <Box
                                component="img"
                                sx={{
                                    padding: "1rem 1rem 1rem 1rem",
                                    height: "15rem",
                                    objectFit: "contain",
                                    "&:hover": {
                                        transform: "scale(1.2)",
                                    },
                                }}
                                alt="image"
                                src={product.image}
                            />
                        </Grid>
                        <Grid item xs={12} sm={8} md={8}>
                            <Typography component="h3" variant="h3">
                                {product.title}
                            </Typography>
                            <Typography sx={{ fontSize: "15px", color: "grey" }}>
                                {numberFormatCurrency.formatNumber(product.price)}
                            </Typography>
                            <Typography sx={{ fontSize: "15px" }}>
                                {product.description.slice(0, 90)}...
                            </Typography>
                            <Box>
                                <IconButton
                                    aria-label="Add to Cart"
                                    onClick={() => handleAddToCart(1, product)}
                                >
                                    <AddShoppingCart className="icon-button" />
                                </IconButton>

                                {wishlist.some(
                                    (favorite: IWishlistProduct) => favorite.id === product.id
                                ) ? (
                                        <IconButton onClick={() => removeFavoriteItem(product.id)}>
                                            <FavoriteRoundedIcon className="icon-button" />
                                        </IconButton>
                                    ) : (
                                        <IconButton
                                            onClick={() => addToWishlist(product)}
                                        >
                                            <FavoriteBorderRoundedIcon className="icon-button" />
                                        </IconButton>
                                    )}
                            </Box>
                            <Button
                                component={NavLink}
                                to={`/product/${product.id}`}
                                variant="contained"
                                className="button"
                            >
                                <Typography fontSize="1.5rem" color="white">
                    Read More
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  padding: 2rem 0;
  display: flex;
  .container {
    max-width: 120rem;
  }

  .icon-button {
    width: 25px;
    height: 25px;  
  }

  .button {
    width: 15rem;
    height: 3rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  .grid {
    gap: 3.2rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }

    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);

    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }

    .btn-main .btn:hover {
      color: #fff;
    }
  }
`;

export default ListView;
