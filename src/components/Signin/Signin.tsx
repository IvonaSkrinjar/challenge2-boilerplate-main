import React, { useContext } from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import formInitialValues from "./FormModel/formInitialValues";
import signinFormModel from "./FormModel/signinFormModel";
import signinValidationSchema from "./FormModel/validationSchema";
import { AuthContext } from "context/auth/AuthContext";
import LockIcon from "@mui/icons-material/Lock";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

const Signin = () => {
  const { formField } = signinFormModel;
  const { login, errorMessage } = useContext(AuthContext);
  const location = useLocation(); 
  const navigate = useNavigate();
  const { t } = useTranslation();
   

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: signinValidationSchema,
    onSubmit: () => {          
      handleLogin();             
          
      if(location.state?.from){
        navigate(location.state.from.pathname); 
      }   
      else{
        navigate("/"); 
      }                   
    },
  });

  function handleLogin() {       
    login(formik.values.username, formik.values.password);
  }

  return (
    <Wrapper>
      <Grid container className={styles.signin}>
        <Grid item xs={12} md={12}>
          <Paper className={styles.paper} variant="outlined" square>
            <Avatar className={styles.avatar}>
              <LockIcon />
            </Avatar>
            <form onSubmit={formik.handleSubmit}>
              <Typography
                className={styles.signin_header}
                component="h4"
                variant="h4"
              >
                {t("sign-in")}
              </Typography>
              <TextField
                fullWidth
                id="username"
                name={formField.username.name}
                label={t("username")}
                variant="standard"
                onChange={formik.handleChange}
                InputProps={{
                  className: styles.input_field,
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
                label={t("password")}
                onChange={formik.handleChange}
                style={{ marginTop: "2rem" }}
                variant="standard"
                InputProps={{
                  className: styles.input_field,
                }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                className={styles.signin_button}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                {t("sign-in")}
              </Button>
              {errorMessage ? (
                <Typography
                  className={styles.signin_validation}
                  variant="body1"
                  component="div"                
                >
                  {errorMessage}
                </Typography>
              ) : (
                ""
              )}
              <Box sx={{ paddingTop: "1rem" }}>
                <Typography>johnd</Typography>
                <Typography>m38rmF$</Typography>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.section` 
  .MuiFormHelperText-root {
    font-size: 12px;
  }
  .MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault{
    margin-left: 20rem
  }
`;

export default Signin;
