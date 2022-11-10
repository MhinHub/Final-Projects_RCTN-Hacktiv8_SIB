import axios from "axios";

export const GET_LIST_PRODUCTS = "GET_LIST_PRODUCTS";

export const getListProducts = () => {
  console.log("2. Masuk Action");
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_LIST_PRODUCTS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
      timeout: 120000,
    })
      .then((response) => {
        console.log("3. Berhasil dapat data", response.data);
        // berhasil get api

        dispatch({
          type: GET_LIST_PRODUCTS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal get api
        console.log("3. Gagal dapat data: ", error);

        dispatch({
          type: GET_LIST_PRODUCTS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
