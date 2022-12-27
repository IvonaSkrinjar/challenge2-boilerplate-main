import { Box, Rating } from "@mui/material";
import React from "react";

interface IProps {
  stars: number;
  reviews: number;
}

const Star = ({ stars, reviews }: IProps) => {
  return (
    <Box
      sx={{
        width: 500,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        value={stars}
        sx={{ fontSize: "3rem" }}
        precision={0.5}
        readOnly
      />
      <Box sx={{ fontSize: "2rem" }}>{reviews} customer reviews</Box>
    </Box>
  );
};

export default Star;
