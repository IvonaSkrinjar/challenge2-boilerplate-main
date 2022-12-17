
import FilterSection from "components/FilterSection";
import { ProductList } from "components/ProductList";
import { Sort } from "components/Sort";
import styled from "styled-components";
import React, {useContext, useEffect} from "react";
import { CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { FilterContext } from "context/filter/FilterContext";
import { ProductContext } from "context/product/ProductContext";

const Products = () => {

    const filterCtx = useContext(FilterContext);
    const productCtx = useContext(ProductContext);
    const { products, categories, productsLoading } =
      useContext(ProductContext);
  
    useEffect(() => {
        productCtx.getProducts();
        productCtx.getProductsCategories();
    }, []);

    useEffect(() => {
        filterCtx.filterTrigger();
    }, [products, categories, filterCtx.sorting_value, filterCtx.filters]);

    useEffect(() => {
        filterCtx.loadProductWithMaxPrice();
    }, [products]);
    
    if (productsLoading) {
        return (
            <Stack gap={1} justifyContent="center" alignItems="center" marginTop="5rem">
                <CircularProgress color="inherit" />
                <Typography>Loading...</Typography>
            </Stack>
        );
    }
     
    return (
        <Wrapper>
            <Grid
                container
                style={{ paddingTop: "2rem", paddingLeft: "17rem"}}
                spacing={3}
            >
                <Grid item xs={12} sm={3} md={3} sx={{ display: "flex" }}>
                    <FilterSection />
                </Grid>
                <Grid item xs={12} sm={8} md={8} >
                    <Sort />
                    <ProductList />
                </Grid>
            </Grid>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: 768px) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
