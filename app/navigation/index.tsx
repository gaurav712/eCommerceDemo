import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../screens/Categories';
import ProductListScreen from '../screens/ProductList';
import ProductDetailsScreen from '../screens/ProductDetails';

const Stack = createNativeStackNavigator();

const AppWithNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={MainScreen} />
        <Stack.Screen name="List" component={ProductListScreen} />
        <Stack.Screen name="Details" component={ProductDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppWithNavigation;
