
import { FilterContext } from "context/filter/FilterContext";
import React, { useContext } from "react";
import GridView from "../GridView/GridView";
import ListView from "../ListView/ListView";

const ProductList = () => {
  const { filter_products, grid_view } = useContext(FilterContext);
   
  if (grid_view === true) {
    return <GridView products={filter_products} />;
  } else if (grid_view === false) {
    return <ListView products={filter_products} />;
  } else {
    return <GridView products={filter_products} />;
  }
};

export default ProductList;
