//@ts-nocheck
import axios from 'axios';
import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Pressable, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { IApplicationState } from '../../store';
import { login } from '../../store/auth/actions';
import { fetchCategories, fetchProducts } from '../../store/products/actions';
import { IProductModel } from '../../store/products/types';

import { styles } from './styles';

const Categories = ({ navigation }) => {
  const dispatch: Dispatch = useDispatch();
  const { loginCreds } = useSelector((state: IApplicationState) => state.authReducer);
  const { categories, isLoading } = useSelector(
    (state: IApplicationState) => state.productsReducer,
  );

  axios.defaults.baseURL = 'http://192.168.1.10:3000/api';

  // Get the list of products
  useEffect(() => {
    dispatch(
      login({
        userEmail: 'someone@a.com',
        password: 'password',
      }),
    );
  }, []);

  useEffect(() => {
    if (loginCreds) {
      axios.defaults.headers.token = loginCreds.token;
      dispatch(fetchCategories());
      dispatch(fetchProducts());
    }
  }, [loginCreds]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  const handleOnPress = (category: string) => {
    navigation.navigate('List', {
      category,
    });
  };

  const Item = ({ category }: { category: string }) => (
    <Pressable style={styles.itemContainer} onPress={() => handleOnPress(category)}>
      <Text style={styles.itemTitle}>{category}</Text>
    </Pressable>
  );

  const renderItem = ({ item }: { item: string }) => <Item category={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};

export default Categories;
