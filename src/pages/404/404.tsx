import { AppLayout } from "components/Layouts";
import styles from "./styles.module.css";
import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const NotFound = () => {
  return (
    <AppLayout>
      <Typography component="h1" variant="h1" className={styles.title}>       
        <Box className={styles.title_box}>404 not found</Box>
      </Typography>
    </AppLayout>
  );
};

export default NotFound;