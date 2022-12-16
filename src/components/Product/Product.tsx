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
    const handleAddToCart = () => addToCart(product.id, 1, product);
    const { addToWishlist, wishlist, removeFavoriteItem } = useContext(WishlistContext);
    
    const isFavorite = wishlist.some(
        (favorite: IWishlistProduct) => favorite.id === product.id
    ); 
   

    function handleWishlist () {
        if (isFavorite) {
            removeFavoriteItem(product.id);
        } else {
            addToWishlist(product.id, product);
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
                                style={{
                                    width: "20px",
                                    height: "20px",
                                }}
                            />
                        </IconButton>
                        <IconButton onClick={handleWishlist}>
                            {isFavorite ? <FavoriteRoundedIcon/> : <FavoriteBorderRoundedIcon/>}
                        </IconButton>                      
                    </CardActions>
                </CardContent>
            </Card>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  .filled-heart {
    opacity: 1;
  }

  .outline-heart {
    opacity: 0.51;
  }
`;

export default Product;
