import {
  GET_LIST_PRODUCTS,
  GET_DETAIL_PRODUCT,
} from "../../actions/productAction";

const initialState = {
  getListProductsResult: false,
  getListProductsLoading: false,
  getListProductError: false,

  getDetailProductResult: false,
  getDetailProductLoading: false,
  getDetailProductError: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCTS:
      return {
        ...state,
        getListProductsResult: action.payload.data,
        getListProductsLoading: action.payload.loading,
        getListProductError: action.payload.errorMessage,
      };

    case GET_DETAIL_PRODUCT:
      return {
        ...state,
        getDetailProductResult: action.payload.data,
        getDetailProductLoading: action.payload.loading,
        getDetailProductError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default products;
