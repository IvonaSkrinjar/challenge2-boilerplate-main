import {
    Card,
    Typography,
    CardContent,
    CardMedia,
    Grid,
    Box    
} from "@mui/material";
import numberFormatCurrency from "common/numberFormatCurrency";
import AmountButtons from "components/AmountButtons";
import { CartContext } from "context/cart/CartContext";
import React, { useContext } from "react";
import DeleteTwoToneIcon from "@mui/icons-material/Delete";

interface IProps {
  id: number;
  image: string;
  title: string;
  price: number;
  amount: number;
}
const CartItem = ({ id, image, title, price, amount }: IProps) => {
    const { removeItem, toggleAmount } = useContext(CartContext);

    const setDecrease = () => {
        toggleAmount(id, "desc");
    };

    const setIncrease = () => {
        toggleAmount(id, "inc");
    };

    return (
        <Card sx={{ display: "flex" }}>
            <CardMedia
                component="img"
                sx={{ width: "15rem", objectFit: "contain" }}
                image={image}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography variant="h4" component="h4">
                        {title}
                    </Typography>
                    <Typography variant="h4" component="h4">                        
                        <DeleteTwoToneIcon 
                            sx={{ float: "right", marginTop: "-2rem" }}
                            onClick={() => removeItem(id)}                       
                        />
                    </Typography>
                    <Typography sx={{ width: "48rem" }} variant="subtitle2">
                        <hr />
                    </Typography>

                    <Grid container sx={{ paddingTop: "3rem" }}>
                        <Grid
                            item
                            xs={11}
                            sm={11}
                            md={11}
                            lg={11}
                            sx={{ display: "contents" }}
                        >
                            <Typography
                                variant="body1"
                                component="div"
                                sx={{ fontSize: "14px" }}
                            >
                  Price
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={1}
                            sm={1}
                            md={1}
                            lg={1}
                            sx={{ marginLeft: "37rem" }}
                        >
                            <Typography variant="h4" component="div">
                                {numberFormatCurrency.formatNumber(price)}
                            </Typography>
                        </Grid>
                        <Grid item xs={11} sm={11} md={11} lg={11}>
                            <Typography
                                variant="body1"
                                component="div"
                                sx={{ fontSize: "14px" }}
                            >
                  Quantity
                            </Typography>
                        </Grid>
                        <Grid item xs={1} sm={1} md={1} lg={1}>
                            <Typography
                                variant="h4"
                                component="div"
                                sx={{ marginLeft: "-9rem" }}
                            >
                                <AmountButtons
                                    amount={amount}
                                    setDecrease={setDecrease}
                                    setIncrease={setIncrease}
                                />
                            </Typography>
                        </Grid>
                        <Grid item xs={10} sm={9} md={10} lg={10}>
                            <Typography
                                variant="body1"
                                component="div"
                                style={{ fontWeight: "bold", fontSize: "14px" }}
                            >
                  Total Price
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={1}>
                            <Typography
                                variant="h4"
                                component="div"
                                style={{ fontWeight: "bold", color: "#1976d2" }}
                            >
                                {numberFormatCurrency.formatNumber(price * amount)}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Box>
        </Card>
    );
};

export default CartItem;
