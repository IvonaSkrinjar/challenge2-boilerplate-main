import FilterSection from "components/FilterSection";
import { ProductList } from "components/ProductList";
import { Sort } from "components/Sort";
import styled from "styled-components";
import React from "react";
import { Grid } from "@mui/material";

const Products = () => {
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
