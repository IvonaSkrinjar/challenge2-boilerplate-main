export const filterReducer = (state: any, action: any) => {
    switch (action.type) {
    case "loadFilterProducts":{
        const priceArr = action.payload.map((product: { price: number; }) => product.price);

        const maxPrice = Math.max(...priceArr);

        return {
            ...state,
            filter_products: [...action.payload],
            all_products: [...action.payload],
            filters: { ...state.filters, maxPrice, price: maxPrice },
        };
    }
    case "setGridView":
        return {
            ...state,
            grid_view: true,
        };

    case "setListView":
        return {
            ...state,
            grid_view: false,
        };

    case "getSortValue":
        return {
            ...state,
            sorting_value: action.payload,
        };

    case "sortingProducts":{        
        const { filter_products, sorting_value } = state;
        const tempSortProduct = [...filter_products];

        const sortingProducts = (a: any, b: any) => {
            if (sorting_value === "lowest") {
                return a.price - b.price;
            }

            if (sorting_value === "highest") {
                return b.price - a.price;
            }

            if (sorting_value === "asc") {
                return a.title.localeCompare(b.title);
            }

            if (sorting_value === "desc") {
                return b.title.localeCompare(a.title);
            }
        };

        const newSortData = tempSortProduct.sort(sortingProducts);

        return {
            ...state,
            filter_products: newSortData,
        };
    }
    case "updateFiltersValue":{
        const { name, value } = action.payload;

        return {
            ...state,
            filters: {
                ...state.filters,
                [name]: value
            },
        };
    }      
    case "filterProducts":{
        const { all_products } = state;
        let tempFilterProduct = [...all_products];

        const { text, category, price } = state.filters;

        if (text) {
            tempFilterProduct = tempFilterProduct.filter((product) => {
                return product.title.toLowerCase().includes(text.title.toLowerCase());
            });
        }

        if (category !== "all") {
            tempFilterProduct = tempFilterProduct.filter(
                (curElem) => curElem.category === category
            );
        }

        if (price === 0) {
            tempFilterProduct = tempFilterProduct.filter(
                (curElem) => curElem.price === price
            );
        } else {
            tempFilterProduct = tempFilterProduct.filter(
                (curElem) => curElem.price <= price
            );
        }
        return {
            ...state,
            filter_products: tempFilterProduct,
        };
    }
    case "clearFilters":
        return {
            ...state,
            filters: {
                ...state.filters,
                text: "",
                category: "all",
                minPrice: 0,
                price: state.filters.maxPrice,
                maxPrice: state.filters.maxPrice,
            },
        };

    default:
        return state;
    }
};

export default filterReducer;
