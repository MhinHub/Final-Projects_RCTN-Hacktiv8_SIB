const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  value: 0,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  console.log(action)
  return state;
};

// Store

const store = createStore();
console.log(store.getState());

// Dispatching Action

store.dispatch({type: 'ADD_CART', age: 1})


// Subscription
