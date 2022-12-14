import FilterSection from "components/FilterSection";
import { ProductList } from "components/ProductList";
import { Sort } from "components/Sort";
import styled from "styled-components";
import React, { useContext, useEffect } from "react";
import { CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { FilterContext } from "context/filter/FilterContext";
import { ProductContext } from "context/product/ProductContext";
import { useTranslation } from "react-i18next";

const Products = () => {
  const filterCtx = useContext(FilterContext);
  const productCtx = useContext(ProductContext);
  const { t } = useTranslation();
  const { products, categories, areProductsLoading } =
    useContext(ProductContext);

  useEffect(() => {
    productCtx.getProducts();
    productCtx.getProductsCategories();
  }, []);

  useEffect(() => {
    filterCtx.filterTrigger();
    filterCtx.sortingProducts();
  }, [
    products,
    categories,
    filterCtx.filter_products,
    filterCtx.sorting_value,
    filterCtx.filters,
  ]);

  useEffect(() => {
    filterCtx.loadProductWithMaxPrice();
  }, [products]);

  if (areProductsLoading) {
    return (
      <Stack
        gap={1}
        justifyContent="center"
        alignItems="center"
        marginTop="5rem"
      >
        <CircularProgress style={{ color: "#1976d2" }} />
        <Typography>{t("loading")}</Typography>
      </Stack>
    );
  }

  return (
    <Wrapper>
      <Grid
        container
        style={{
          paddingTop: "2rem",
          paddingLeft: "3rem",
          paddingBottom: "15rem",
        }}
        spacing={1}
        columnSpacing={1}
      >
        <Grid item sm={4} md={3}>
          <FilterSection />
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
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
