import React from 'react';
import { Provider } from 'react-redux';
import AppWithNavigation from './app/navigation';
import store from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppWithNavigation />
    </Provider>
  );
};

export default App;
