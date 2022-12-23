import React, { useReducer } from "react";
import { ProductContext } from "./ProductContext";
import { IProduct } from "interfaces";
import { productReducer } from "./ProductReducer";
import { productServices } from "services/product.services";
import { useNavigate } from "react-router-dom";

export interface ProductState {
  products: IProduct[];
  singleProduct: IProduct;
  categories: [];
  singleProductLoading: false;
  productsLoading: false;
}

export type ProductContextProps = {
  productState: ProductState;
  getSingleProduct(id: number): IProduct;
  singleProduct: IProduct;
  products: IProduct[];
  featureProducts: IProduct[];
  getProductsCategories(): [];
  getProducts() : [];
  categories: [];
  singleProductLoading: false;
  productsLoading: false;
};

const INITIAL_STATE = {
    products: [],
    singleProduct: null,
    categories: [],
    singleProductLoading: false,
    productsLoading: false,
};

interface props {
  children: JSX.Element;
}

export const ProductProvider = ({ children }: props) => {
    const [state, dispatch] = useReducer(productReducer, INITIAL_STATE);
    const navigate = useNavigate();
    
    const getProducts = async () => {
        dispatch({
            type: "getProductsRequest",
        });
        await productServices
            .getAll()
            .then((response) => {
                dispatch({
                    type: "getProductsSuccess",
                    payload: {
                        products: response.data,
                    },
                });
            })
            .catch((error) => {
                console.error(error);
                dispatch({
                    type: "getProductsFailure",
                });
            });
    };

    const getSingleProduct = async (productId: number) => {
        dispatch({
            type: "getProductRequest",
        });
        await productServices
            .getById(productId)
            .then((response) => {
                if (!response.data){                   
                    navigate("*");
                }
                dispatch({
                    type: "getProductSuccess",
                    payload: {
                        singleProduct: response.data,
                    },
                });              
            })
            .catch(() => {
                dispatch({
                    type: "getProductFailure",
                });
            });
    };

    const getProductsCategories = async () => {
        dispatch({
            type: "getProductsCategoriesRequest",
        });
        await productServices
            .getProductsCategories()
            .then((response) => {
                dispatch({
                    type: "getProductsCategoriesSuccess",
                    payload: {
                        categories: response.data,
                    },
                });
            })
            .catch((error) => {
                console.error(error);
                dispatch({
                    type: "getProductsCategoriesFailure",
                });
            });
    };

    return (
        <ProductContext.Provider
            value={{ ...state, getProducts, getSingleProduct, getProductsCategories }}
        >
            {children}
        </ProductContext.Provider>
    );
};
