import {
    Typography,    
    Box,    
    Button,
    List,
    ListItem,
    Drawer,
    ListItemText,
    Divider,
    IconButton
} from "@mui/material";
import numberFormatCurrency from "common/numberFormatCurrency";
import { CartContext } from "context/cart/CartContext";
import React, { useContext } from "react";
import DeleteTwoToneIcon from "@mui/icons-material/Delete";
import { WishlistContext } from "context/wishlist/Wishlist";
import { NavLink } from "react-router-dom";
import { IWishlistProduct } from "interfaces";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";


function WishlistDialog(props : any) {
    const { wishlist, removeFavoriteItem } = useContext(WishlistContext);
    const { onClose, open } = props;
    const { addToCart } = useContext(CartContext);

  
    const handleClose = () => {
        onClose();
    };    

    const handleAddToCart = (id: number, product: IWishlistProduct) => {
        {
            addToCart(id, 1, product);
            onClose();
        }
    };

    const list = () => (
        <List sx={{ width: 450, maxHeight: 200 }}>
            {wishlist.length > 0 ? (
                wishlist.map((product: IWishlistProduct) => (
                    <Box key={product.id}>
                        <ListItem>
                            <Box
                                component="img"
                                sx={{
                                    objectFit: "contain",
                                    height: "8rem",
                                    width: "8rem",
                                }}
                                alt="favorite product"
                                src={product.image}
                            />

                            <ListItemText
                                sx={{ paddingLeft: "3rem" }}
                                primary={
                                    <Typography style={{ fontSize: "14px" }}>
                                        {" "}
                                        {product.title}{" "}
                                    </Typography>
                                }
                                secondary={
                                    <Typography style={{ fontSize: "14px" }}>
                                        {" "}
                                        {numberFormatCurrency.formatNumber(product.price)}{" "}
                                    </Typography>
                                }
                            />
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => removeFavoriteItem(product.id)}
                            >
                                <DeleteTwoToneIcon
                                    sx={{ float: "right", marginTop: "-2rem" }}
                                />
                            </IconButton>
                        </ListItem>
                        <Button
                            sx={{ ml: 2, fontSize: "12px" }}
                            component={NavLink}
                            to={"/cart"}
                            onClick={() => handleAddToCart(product.id, product)}
                        >
                Add to cart
                        </Button>
                    </Box>
                ))
            ) : (
                <ListItem>
                    <FavoriteBorderRoundedIcon
                        style={{ width: "50px", height: "50px", color: "grey" }}
                    />
                    <ListItemText
                        sx={{ paddingLeft: "3rem" }}
                        primary={
                            <Typography style={{ fontSize: "14px" }}>
                  There are no products on the wishlist!
                            </Typography>
                        }
                        secondary={
                            <Button
                                component={NavLink}
                                to={"/"}
                                onClick={() => handleClose()}
                            >
                                <Typography fontSize="14px" color="#1976d2">
                    Start Shopping
                                </Typography>
                            </Button>
                        }
                    />
                </ListItem>
            )}
        </List>
    );

    return (
        <Drawer open={open} anchor={"right"} onClose={handleClose}>
            <Typography
                variant="h4"
                component="h4"
                sx={{ marginTop: "3rem", marginBottom: "3rem", marginLeft: "1rem", fontWeight: "bold" }}
            >
          Your Wishlist
            </Typography>
            <Divider />
            {list()}
        </Drawer>
    );
}


export default WishlistDialog;
