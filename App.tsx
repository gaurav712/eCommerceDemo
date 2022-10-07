import axios from 'axios';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { Colors } from './app/config';
import AppWithNavigation from './app/navigation';
import store from './app/store';

const App = () => {
  axios.defaults.baseURL = 'http://172.16.146.192:3000/api';

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={Colors.accent} />
      <AppWithNavigation />
    </Provider>
  );
};

export default App;
