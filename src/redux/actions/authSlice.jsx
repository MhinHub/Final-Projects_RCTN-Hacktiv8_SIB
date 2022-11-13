import axios from "axios";

export const SET_LOGIN_STATE = "SET_LOGIN_STATE";

export const getLogin = (username, password) => {
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
      method: "POST",
      url: "https://fakestoreapi.com/auth/login",
      data: {
        username: username,
        password: password,
      },
      timeout: 120000,
    })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("user", response.data.token);
        // response.data.map((item, index) => {
        //   if (item.username == username && item.password == password) {
        //     localStorage.setItem("user", JSON.stringify(item));
        //   } else {
        //     console.log("gagal login");
        //   }
        // });
      })
      .catch((error) => {
        console.log("gagal login");
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
