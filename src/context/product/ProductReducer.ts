export const productReducer = (state: any, action: any) => {
  switch (action.type) {
  case "getProductsRequest":
    return {
      ...state,
      areProductsLoading: true
    };
  case "getProductsSuccess":
    return {
      ...state,
      products: action.payload.products,
      areProductsLoading: false
    };
  case "getProductsFailure":
    return {
      ...state,
      products: null,
      areProductsLoading: false
    };
  case "getProductRequest":
    return {
      ...state,
      isSingleProductLoading: true
    };
  case "getProductSuccess":
    return {
      ...state,
      singleProduct: action.payload.singleProduct,
      isSingleProductLoading: false
    };
  case "getProductFailure":
    return {
      ...state,
      isSingleProductLoading: false
    };

  case "getProductsCategoriesRequest":
    return {
      ...state
    };
  case "getProductsCategoriesSuccess":
    return {
      ...state,
      categories: action.payload.categories,
    };
  case "getProductsCategoriesFailure":
    return {
      ...state,
      categories: null,
    };
  default:
    return state;
  }
};
