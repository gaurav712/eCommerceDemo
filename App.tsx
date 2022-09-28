import axios from 'axios';
import React from 'react';
import { Provider } from 'react-redux';
import AppWithNavigation from './app/navigation';
import store from './app/store';

const App = () => {
  axios.defaults.baseURL = 'http://172.16.146.192:3000/api';

  return (
    <Provider store={store}>
      <AppWithNavigation />
    </Provider>
  );
};

export default App;
