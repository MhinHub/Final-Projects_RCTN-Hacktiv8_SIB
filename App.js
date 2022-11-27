import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './src/router';
import {Provider} from 'react-redux';
import store from './src/context/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
