export const productReducer = (state: any, action: any) => {
  switch (action.type) {
    case "getProductsRequest":
      return {
        ...state,
        productsLoading: true
      };
    case "getProductsSuccess":
      return {
        ...state,
        products: action.payload.products,
        productsLoading: false
      };
    case "getProductsFailure":
      return {
        ...state,
        products: null,
        productsLoading: false
      };
    case "getProductRequest":
      return {
        ...state,
        singleProductLoading: true
      };
    case "getProductSuccess":
      return {
        ...state,
        singleProduct: action.payload.singleProduct,
        singleProductLoading: false
      };
    case "getProductFailure":
      return {
        ...state,
        singleProductLoading: false
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
