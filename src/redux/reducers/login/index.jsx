import { SET_LOGIN_STATE } from "../../actions/authSlice";

const initialState = {
  getLoginResult: false,
  getLoginLoading: false,
  getLoginError: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_STATE:
   
      return {
        ...state,
        getLoginResult: action.payload.data,
        getLoginLoading: action.payload.loading,
        getLoginError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default login;
