import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Logout from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";
import { AuthContext } from "context/auth/AuthContext";
import { useContext } from "react";

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { logout } = useContext(AuthContext);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Box
                sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
            >
                <IconButton
                    onClick={handleClick}
                    size="small"
                    color="inherit"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                >
                    <PersonIcon style={{ width: "30px", height: "30px" }} />
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                                width: 25,
                                height: 25,
                                ml: -0.5,
                                mr: 1,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                    <MenuItem
                        sx={{ fontSize: "14px" }}
                        component={NavLink}
                        to="/profile"
                    >
                        <Avatar /> Profile
                    </MenuItem>
                    <Divider />
                    <MenuItem
                        sx={{ fontSize: "14px" }}
                        onClick={logout}
                        component={NavLink}
                        to="/"
                    >
                        <ListItemIcon>
                            <Logout />
                        </ListItemIcon>
              Logout
                    </MenuItem>
                </Menu>
            </Box>
        </React.Fragment>
    );
}
