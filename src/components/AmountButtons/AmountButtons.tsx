import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { FaMinus, FaPlus } from "react-icons/fa";
import styles from "./styles.module.css";

interface IProps {
  onIncreaseAmount: () => void;
  onDecreaseAmount: () => void;
  amount: number;
}

const AmountButtons = ({
  onIncreaseAmount,
  onDecreaseAmount,
  amount,
}: IProps) => {
  return (
    <div className={styles.cart_button}>
      <div className={styles.amount_toggle}>
        <Button
          className={styles.amount_button}
          onClick={() => onDecreaseAmount()}
        >
          <FaMinus color="black" />
        </Button>
        <Typography>
          <Box className={styles.amount_style}>{amount}</Box>
        </Typography>
        <Button
          className={styles.amount_button}
          onClick={() => onIncreaseAmount()}        >
          <FaPlus color="black" />
        </Button>
      </div>
    </div>
  );
};

export default AmountButtons;
