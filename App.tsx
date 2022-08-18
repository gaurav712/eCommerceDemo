import React from 'react';
import {Provider} from 'react-redux';
import store from './app/store';
import Home from './app/screens/Home';

const App = () => {

  return (
    <Provider store={store}>
      <Home/>
    </Provider>
    )
};

export default App
