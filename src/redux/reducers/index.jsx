import { combineReducers } from "redux";
import ProductsReducer from "./products";
import LoginReducer from "./login";

export default combineReducers({ ProductsReducer, LoginReducer });
