import {
  Badge,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import numberFormatCurrency from "../../common/numberFormatCurrency";
import styled from "styled-components";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { AddShoppingCart } from "@mui/icons-material";
import { useContext } from "react";
import { CartContext } from "context/cart/CartContext";

const Product = (product: any) => {
  const { id, category, title, image, price } = product;
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => addToCart(product.id, 1, product);
  return (
    <Card
      elevation={15}
      raised
      sx={{
        width: "18rem",
        height: "27rem",
        margin: "0 auto",
        padding: "0.1em",
      }}
    >
      <Box>
        <NavLink to={`/product/${id}`}>
          <CardMedia
            component="img"
            alt="image"
            sx={{
              padding: "1em 1em 0 1em",
              height: "15rem",
              objectFit: "contain",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
            image={image}
          />
        </NavLink>
      </Box>
      <CardContent>
        <NavLink style={{ color: "black" }} to={`/product/${id}`}>
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              color: "grey",
              textTransform: "capitalize",
            }}
            color="text.secondary"
          >
            {category}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
        </NavLink>
        <Typography
          gutterBottom
          variant="h5"
          component="h5"
          sx={{
            color: "grey",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {numberFormatCurrency.formatNumber(price)}
        </Typography>
        <CardActions
          style={{ display: "flex", float: "right", marginTop: "-2rem" }}
        >
          <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
            <AddShoppingCart
              style={{
                width: "20px",
                height: "20px",
              }}
            />
          </IconButton>
          <FavoriteBorderRoundedIcon
            style={{
              width: "20px",
              height: "20px",
              color: "grey",
            }}
          />
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Product;