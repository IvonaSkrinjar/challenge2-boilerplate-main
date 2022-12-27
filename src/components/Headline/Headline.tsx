import styles from "./styles.module.css";
import React from "react";
import { Box, Typography } from "@mui/material";

interface IProps {
  title: string;
}
const Headline = ({ title }: IProps) => {
  return (
    <div className={styles.headline}>
      <Typography className={styles.headline} component="h2" variant="h2">
        <Box className={styles.headline_box}>{title}</Box>
      </Typography>
    </div>
  );
};

export default Headline;
