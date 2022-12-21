import React, { memo, useContext, useState } from "react";
import logo from "../../assets/images/logo_transparent.png";
import Container from "components/Container";
import {
    AppBar,
    Badge,
    Box,
    Button,
    Divider,
    IconButton,
    Toolbar
} from "@mui/material";
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
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

export const Header = () => {
    const { totalCartItems } = useContext(CartContext);
    const { totalFavoriteItems } = useContext(WishlistContext);
    const { isLoggedIn } = useContext(AuthContext);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { t, i18n } = useTranslation();
    const changeLanguage = (lng: any) => {       
        i18n.changeLanguage(lng);
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
                                <li className={styles.nav_item}>{t("home")}</li>
                            </NavLink>
                        </ul>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <Button                                
                                onClick={() => changeLanguage("gb")}
                            >
                                <ReactCountryFlag
                                    countryCode="GB"
                                    svg
                                    style={{
                                        width: "3em",
                                        height: "3em",
                                    }}
                                    title="United Kingdom"
                                />
                            </Button>
                            <Divider
                                orientation="vertical"
                                variant="middle"
                                flexItem
                                color="white"
                            />
                            <Button                               
                                onClick={() => {
                                    changeLanguage("rs");
                                }}
                            >
                                <ReactCountryFlag
                                    countryCode="RS"
                                    svg
                                    style={{
                                        width: "3em",
                                        height: "3em",
                                    }}
                                    title="Serbia"
                                />
                            </Button>
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
                    </Toolbar>
                </AppBar>
            </Container>
        </Box>
    );
};

export default memo(Header);
