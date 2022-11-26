import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducer';

const store = configureStore({
  reducer: userReducer,
});

export default store;
