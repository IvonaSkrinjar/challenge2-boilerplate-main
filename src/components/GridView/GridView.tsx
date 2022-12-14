import { Grid } from "@mui/material";
import { IProduct } from "interfaces";
import Product from "../Product/Product";
import React from "react";

interface IProps {
  products: IProduct[];
}

const GridView = ({ products }: IProps) => {
    return (      
        <Grid container spacing={3} columnSpacing={2}>
            {products?.map((item) => (
                <Grid item  key={item.id}>
                    <Product {...item} />
                </Grid>
            ))}
        </Grid>
    );
};


export default GridView;
