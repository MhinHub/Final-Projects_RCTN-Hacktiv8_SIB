import { GET_LIST_PRODUCTS } from "../../actions/productAction";

const initialState = {
  getListProductsResult: false,
  getListProductsLoading: false,
  getListProductError: false,
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
    default:
      return state;
  }
};

export default products;
