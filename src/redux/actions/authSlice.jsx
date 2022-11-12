import axios from "axios";

export const SET_LOGIN_STATE = "SET_LOGIN_STATE";

export const getLogin = (email, password) => {
  let users;
  console.log("2. Masuk Action");
  return (dispatch) => {
    // loading
    dispatch({
      type: SET_LOGIN_STATE,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/users",
      timeout: 120000,
    })
      .then((response) => {
        console.log(response.data);
        response.data.map((item, index) => {
          if (item.email == email && item.password == password) {
            localStorage.setItem("user", JSON.stringify(item));
          } else {
            console.log("gagal login");
          }
        });
        // berhasil get API

        // dispatch({
        //   type: SET_LOGIN_STATE,
        //   payload: {
        //     loading: true,
        //     data: response.data,
        //     errorMessage: false,
        //   },
        // });
      })
      .catch((error) => {
        // console.log("3. Gagal dapat data: ", error);
        // dispatch({
        //   type: SET_LOGIN_STATE,
        //   payload: {
        //     loading: false,
        //     data: false,
        //     errorMessage: error.message,
        //   },
        // });
      });

    console.log("user" + users);
  };
};
