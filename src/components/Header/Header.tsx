import React, { memo, useContext } from "react";
import logo from "../../assets/images/logo_transparent.png";
import Container from "components/Container";
import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { CartContext } from "context/cart/CartContext";
import { WishlistContext } from "context/wishlist/Wishlist";
import { WishlistDialog } from "components/WishlistDialog";
import LoginIcon from "@mui/icons-material/Login";
import { AuthContext } from "context/auth/AuthContext";
import Dashboard from "components/Dashboard";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as locales from "@mui/material/locale";


export const Header = () => {
    const { totalCartItems } = useContext(CartContext);   
    const { totalFavoriteItems } = useContext(WishlistContext);   
    const { isLoggedIn } = useContext(AuthContext);
    const [locale, setLocale] = React.useState("enUS");
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    

    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <AppBar position="fixed">
                    <Toolbar>
                        <img
                            src={logo}
                            alt="logo"
                            style={{ width: "50px", height: "40px", objectFit: "contain" }}
                        />
                        <ul className={styles.nav_items}>
                            <NavLink to={"/"}>
                                <li className={styles.nav_item}>Home</li>
                            </NavLink>
                        </ul>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <IconButton
                                component={NavLink}
                                to="/cart"
                                size="large"
                                color="inherit"
                            >
                                <Badge badgeContent={totalCartItems} color="error">
                                    <ShoppingCartOutlinedIcon
                                        style={{ color: "white", width: "30px", height: "30px" }}
                                    />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                color="inherit"
                                onClick={handleClickOpen}
                            >
                                <Badge badgeContent={totalFavoriteItems} color="error">
                                    <FavoriteBorderRoundedIcon
                                        style={{ width: "30px", height: "30px" }}
                                    />
                                </Badge>
                            </IconButton>
                            <WishlistDialog open={open} onClose={handleClose} />
                            {!isLoggedIn ? (
                                <IconButton
                                    component={NavLink}
                                    to="/login"
                                    size="large"
                                    color="inherit"
                                >
                                    <LoginIcon style={{ width: "30px", height: "30px" }} />
                                </IconButton>
                            ) : (
                                <Dashboard />
                            )}
                        </Box>
                        <Autocomplete
                            options={Object.keys(locales)}
                            getOptionLabel={(key) =>
                                `${key.substring(0, 2)}-${key.substring(2, 4)}`
                            }
                            style={{ width: 300 }}
                            value={locale}
                            disableClearable
                            onChange={(event, newValue) => {
                                setLocale(newValue);
                            }}
                            renderInput={(params) => (
                                <TextField {...params} label="Locale" fullWidth />
                            )}
                        />
                    </Toolbar>
                </AppBar>
            </Container>
        </Box>
    );
};

export default memo(Header);
