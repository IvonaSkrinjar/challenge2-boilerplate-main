import { ProductContext } from "context/product/ProductContext";
import React, { useContext, useReducer } from "react";
import { FilterContext } from "./FilterContext";
import filterReducer from "./FilterReducer";

export interface FilterState {
  filter_products: [];
  all_products: [];
  searched_products: [];
  grid_view: true;
  sorting_value: string;
  filters: {
    text: "";
    category: "all";
    maxPrice: 0;
    price: 0;
    minPrice: 0;
  };
}

export type FilterContextProps = {
  sorting_value: string;
  filterState: FilterState;
  setGridView(): void;
  setListView(): void;
  sorting(event: any): void;
  updateFilterValue(event: any): void;
  clearFilters(): void;
  filterTrigger(): void;
  loadProductWithMaxPrice(): void;
  sortingProducts(): void;
  grid_view: any;
  filter_products: any;
  all_products: any;
  filters: any;
};

const INITIAL_STATE = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },
};
interface props {
  children: JSX.Element;
}

export const FilterProvider = ({ children }: props) => {
    const { products } = useContext(ProductContext);

    const [state, dispatch] = useReducer(filterReducer, INITIAL_STATE);

    const setGridView = () => {
        return dispatch({ type: "setGridView" });
    };

    const setListView = () => {
        return dispatch({ type: "setListView" });
    };

    const sorting = (event: any) => {
        const userValue = event.target.value;
        dispatch({ type: "getSortValue", payload: userValue });
    };

    const updateFilterValue = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;

        return dispatch({ type: "updateFiltersValue", payload: { name, value } });
    };

    const loadProductWithMaxPrice = () => {
        dispatch({ type: "loadFilterProducts", payload: products });
    };

    const filterTrigger = () => {
        dispatch({ type: "filterProducts" });
    };

    const sortingProducts = () => {
        dispatch({ type: "sortingProducts" });
    };

    const clearFilters = () => {
        dispatch({ type: "clearFilters" });
    };  
  

    return (
        <FilterContext.Provider
            value={{
                ...state,
                setGridView,
                setListView,
                sorting,
                updateFilterValue,
                clearFilters,
                filterTrigger,
                loadProductWithMaxPrice,
                sortingProducts
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};
