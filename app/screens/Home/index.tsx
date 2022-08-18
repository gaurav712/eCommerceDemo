import React, { useEffect } from 'react';
import { FlatList, Pressable, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { IApplicationState } from '../../store';
import { fetchProducts } from '../../store/products/actions';
import { IProductModel } from '../../store/products/types';

import { styles } from './styles';

const Home = () => {
  const dispatch: Dispatch = useDispatch();
  const { productList, isLoading } = useSelector(
    (state: IApplicationState) => state.productsReducer,
  );

  // Get the list of products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleOnPress = (product: IProductModel) => {
    console.log(JSON.stringify(product, null, 2));
  };

  const Item = ({ product }: { product: IProductModel }) => (
    <Pressable style={styles.itemContainer} onPress={() => handleOnPress(product)}>
      <Text style={styles.itemTitle}>{product.title}</Text>
    </Pressable>
  );

  const renderItem = ({ item }: { item: IProductModel }) => <Item product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={productList} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
};

export default Home;
