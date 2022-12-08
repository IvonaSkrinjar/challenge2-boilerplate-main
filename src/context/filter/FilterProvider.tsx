import { ProductContext } from "context/product/ProductContext";
import React, { useContext, useEffect, useReducer } from "react";
import { FilterContext } from "./FilterContext";
import filterReducer from "./FilterReducer";

export interface FilterState {
  filter_products: [];
  all_products: [];
  searched_products: [];
  grid_view: true;
  sorting_value: "lowest";
  filters: {
    text: "";
    category: "all";
    maxPrice: 0;
    price: 0;
    minPrice: 0;
  };
}

export type FilterContextProps = {
  filterState: FilterState;
  setGridView(): void;
  setListView(): void;
  sorting(event: any): void;
  updateFilterValue(event: any): void;
  clearFilters(): void;
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
    const { products, categories } = useContext(ProductContext);

    const [state, dispatch] = useReducer(filterReducer, INITIAL_STATE);

    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
    };

    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
    };

    const sorting = (event: any) => {
        const userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue });
    };

    const updateFilterValue = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;

        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    };

    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" });
    };

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({ type: "SORTING_PRODUCTS" });
    }, [products, categories, state.sorting_value, state.filters]);

    return (
        <FilterContext.Provider
            value={{
                ...state,
                setGridView,
                setListView,
                sorting,
                updateFilterValue,
                clearFilters,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};
