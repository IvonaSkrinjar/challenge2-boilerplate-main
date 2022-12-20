import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { AuthContext } from "context/auth/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Box, Grid, Paper, Stack } from "@mui/material";

const UserProfile = () => {

    const { user } = useContext(AuthContext);

    if (!user)
        return (
            <Box sx={{ display: "flex" }}>
                <CircularProgress />
            </Box>
        );

    return (
        <Grid container>
            <Grid
                item
                xs={12}
                md={12}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Paper
                    component={Stack}
                    direction="column"
                    justifyContent="center"
                    variant="outlined"
                    square
                    sx={{
                        marginTop: "48px",
                        marginBottom: "12rem",
                        padding: "24px",
                        boxShadow: "0px 1px 5px 0px rgb(0 0 0 / 20%)",
                        width: "50rem",
                    }}
                >
                    <Avatar style={{ marginLeft: "20rem" }}>                
                    </Avatar>

                    <Typography
                        style={{
                            paddingBottom: "3rem",
                            display: "grid",
                            justifyContent: "center",
                            fontWeight: "bold",
                            textTransform: "capitalize",
                        }}
                        component="h4"
                        variant="h4"
                    >
                        {user.name.firstname} {user.name.lastname}
                    </Typography>
                    <Typography variant="h4" component="div">
              Username: {user.username}
                    </Typography>
                    <Typography variant="h4" component="div">
              Email: {user.email}
                    </Typography>
                    <Typography variant="h4" component="div">
              Address: {user.address.street} {user.address.number}{" "}
                        {user.address.city} {user.address.zipcode}
                    </Typography>
                    <Typography variant="h4" component="div">
              Phone: {user.phone}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};


export default UserProfile;
