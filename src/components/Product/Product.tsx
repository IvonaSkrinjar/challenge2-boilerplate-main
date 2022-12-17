import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import numberFormatCurrency from "../../common/numberFormatCurrency";
import { AddShoppingCart } from "@mui/icons-material";
import React, { useContext } from "react";
import { CartContext } from "context/cart/CartContext";
import { IProduct, IWishlistProduct } from "interfaces";
import { WishlistContext } from "context/wishlist/Wishlist";
import styled from "styled-components";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const Product = (product: IProduct) => {
    const { id, category, title, image, price } = product;
    const { addToCart } = useContext(CartContext);
    const handleAddToCart = () => addToCart(1, product);
    const { addToWishlist, wishlist, removeFavoriteItem } =
    useContext(WishlistContext);

    const isFavorite = wishlist.some(
        (favorite: IWishlistProduct) => favorite.id === product.id
    );

    function handleWishlist() {
        if (isFavorite) {
            removeFavoriteItem(product.id);
        } else {
            addToWishlist(product);
        }
    }

    return (
        <Wrapper className="section">
            <Card
                elevation={15}
                raised
                sx={{
                    width: "18rem",
                    height: "27rem",
                    margin: "0 auto",
                    padding: "0.1rem",
                }}
            >
                <Box>
                    <NavLink to={`/product/${id}`}>
                        <CardMedia
                            component="img"
                            alt="image"
                            sx={{
                                padding: "1rem 1rem 0 1rem",
                                height: "15rem",
                                objectFit: "contain",
                                "&:hover": {
                                    transform: "scale(1.2)",
                                },
                            }}
                            image={image}
                        />
                    </NavLink>
                </Box>
                <CardContent>
                    <NavLink style={{ color: "black" }} to={`/product/${id}`}>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h5"
                            sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: "2",
                                WebkitBoxOrient: "vertical",
                                color: "grey",
                                textTransform: "capitalize",
                            }}
                            color="text.secondary"
                        >
                            {category}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h5"
                            sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: "1",
                                WebkitBoxOrient: "vertical",
                                fontWeight: "bold",
                            }}
                        >
                            {title}
                        </Typography>
                    </NavLink>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h5"
                        sx={{
                            color: "grey",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        {numberFormatCurrency.formatNumber(price)}
                    </Typography>
                    <CardActions
                        style={{ display: "flex", float: "right", marginTop: "-2rem" }}
                    >
                        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
                            <AddShoppingCart
                                className="icon-button"             
                            />
                        </IconButton>
                        <IconButton onClick={handleWishlist}>
                            {isFavorite ? (
                                <FavoriteRoundedIcon
                                    className="icon-button"                 
                                />
                            ) : (
                                <FavoriteBorderRoundedIcon
                                    className="icon-button"                
                                />
                            )}
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  .icon-button {
    width: 25px;
    height: 25px;
  }
`;

export default Product;
