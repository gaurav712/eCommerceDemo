import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../../screens/Categories';
import ProductListScreen from '../../screens/ProductList';
import ProductDetailsScreen from '../../screens/ProductDetails';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Categories" component={MainScreen} />
      <Stack.Screen
        name="List"
        component={ProductListScreen}
        options={{
          title: 'Browse Products',
        }}
      />
      <Stack.Screen
        name="Details"
        component={ProductDetailsScreen}
        options={{
          title: 'Product Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
