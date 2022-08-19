//@ts-nocheck
import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Pressable, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { IApplicationState } from '../../store';
import { fetchProducts } from '../../store/products/actions';
import { IProductModel } from '../../store/products/types';

import { styles } from './styles';

const Categories = () => {
  const dispatch: Dispatch = useDispatch();
  const { productList, isLoading } = useSelector(
    (state: IApplicationState) => state.productsReducer,
  );

  // Get the list of products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  const groupByKey = (_data: IProductModel[], _key: string) => {
    return _data.reduce((result: IProductModel, next: IProductModel) => {
      const key = next[_key];
      result[key] = result[key]?.length ? [...result[key], next] : [next];
      return result;
    }, {});
  };

  const handleOnPress = (category: string) => {
    console.log(category);
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
        data={Object.keys(groupByKey(productList, 'category'))}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </SafeAreaView>
  );
};

export default Categories;
