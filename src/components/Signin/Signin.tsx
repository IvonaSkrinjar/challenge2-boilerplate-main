import React, { useContext, useState } from "react";
import { useFormik } from "formik";

import TextField from "@material-ui/core/TextField";
import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import formInitialValues from "./FormModel/formInitialValues";
import signinFormModel from "./FormModel/signinFormModel";
import signinValidationSchema from "./FormModel/validationSchema";
import { AuthContext } from "context/auth/AuthContext";
import LockIcon from "@mui/icons-material/Lock";
import styled from "styled-components";
import { Label } from "@mui/icons-material";

const Signin = () => {
    const { formId, formField } = signinFormModel;
    const [username, setUserName] = useState("");

    const [password, setPassword] = useState("");
    const { login, errorMessage, isLoggedIn } = useContext(AuthContext);
    const location = useLocation();

    const formik = useFormik({
        initialValues: formInitialValues,
        validationSchema: signinValidationSchema,
        onSubmit: (values) => {
            handleLogin();
        },
    });

    function handleLogin() {
        setUserName(formik.values.username);
        setPassword(formik.values.password);
        const token = login(formik.values.username, formik.values.password);
    }
    
    return (
        <Wrapper>
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
                        variant="outlined"
                        square
                        sx={{
                            marginTop: "48px",
                            marginBottom: "12rem",
                            padding: "24px",
                            boxShadow: "0px 1px 5px 0px rgb(0 0 0 / 20%)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "50rem",
                        }}
                    >
                        <Avatar
                            sx={{
                                margin: "8px",
                                backgroundColor: "#f50057",
                            }}
                        >
                            <LockIcon />
                        </Avatar>
                        <form onSubmit={formik.handleSubmit}>
                            <Typography
                                sx={{
                                    paddingBottom: "3rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: "bold",
                                }}
                                component="h4"
                                variant="h4"
                            >
                  Sign in
                            </Typography>
                            <TextField
                                fullWidth
                                id="username"
                                name={formField.username.name}
                                label={formField.username.label}
                                onChange={formik.handleChange}
                                InputProps={{
                                    disableUnderline: true,
                                    classes: {
                                        input: "input-field",
                                    },
                                }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                error={
                                    formik.touched.username && Boolean(formik.errors.username)
                                }
                                helperText={formik.touched.username && formik.errors.username}
                            />
                            <TextField
                                fullWidth
                                id="password"
                                name={formField.password.name}
                                label={formField.password.label}
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                style={{ marginTop: "2rem" }}
                                InputProps={{
                                    disableUnderline: true,
                                    classes: {
                                        input: "input-field",
                                    },
                                }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                error={
                                    formik.touched.password && Boolean(formik.errors.password)
                                }
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{
                                    fontSize: "12px",
                                    mt: "3rem",
                                    width: "10rem",
                                    height: "3rem",
                                    "&:hover": {
                                        opacity: 1,
                                    },
                                }}
                            >
                  Sign In
                            </Button>
                            {errorMessage ? (
                                <Typography
                                    variant="body1"
                                    component="div"
                                    sx={{
                                        fontSize: "12px",
                                        color: "red",
                                        paddingTop: "1rem",
                                    }}
                                >
                                    {errorMessage}
                                </Typography>
                            ) : (
                                ""
                            )}
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  .input-field {
    font-size: 14px;
    text-transform: none;
    padding: 1rem;
  }
  .MuiFormHelperText-root {
    font-size: 12px;
  }
`;

export default Signin;
