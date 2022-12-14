import React, { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, RefreshControl, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import GradientBackground from '../../components/GradientBackground';
import Loader from '../../components/Loader';
import { Colors } from '../../config';
import { IApplicationState } from '../../store';
import { fetchProducts } from '../../store/products/actions';
import { IProductModel } from '../../store/products/types';
import { INavigation } from '../../types';

import { styles } from './styles';

const ProductList = ({ navigation }: { navigation: INavigation }) => {
  const dispatch = useDispatch();
  const { productList, isLoading } = useSelector(
    (state: IApplicationState) => state.productsReducer,
  );

  const [category, setCategory] = useState('');

  useEffect(() => {
    if (navigation) {
      const navigationState = navigation.getState();
      const { index } = navigationState;
      const { category } = navigationState.routes[index].params;
      setCategory(category);
    }
  }, [navigation]);

  const getProducts = ({ refresh = false }: { refresh?: boolean }) => {
    const limit = 20; // default limit
    const skip = refresh
      ? 0
      : productList.filter((product) => product.category === category).length;
    dispatch(
      fetchProducts({
        category,
        limit,
        skip,
      }),
    );
  };

  useEffect(() => {
    if (category) {
      getProducts({ refresh: true });
    }
  }, [category]);

  if (isLoading && !productList.length) {
    return (
      <View style={styles.container}>
        <Loader size={'large'} />
      </View>
    );
  }

  const handleOnPress = (product: IProductModel) => {
    navigation.navigate('Details', { product });
  };

  const Item = ({ product }: { product: IProductModel }) => (
    <Pressable style={styles.itemContainer} onPress={() => handleOnPress(product)}>
      <Image source={{ uri: product.imagePath }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.itemTitle} numberOfLines={2}>
          {product.productName}
        </Text>
        <Text style={styles.price}>???{product.unitPrice}</Text>
      </View>
    </Pressable>
  );

  const renderItem = ({ item }: { item: IProductModel }) => <Item product={item} />;

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={productList.filter((item) => item.category === category)}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          numColumns={3}
          onEndReached={() => getProducts({})}
          onEndReachedThreshold={0.25}
          ListHeaderComponent={<Text style={styles.headingText}>{category}</Text>}
          ListFooterComponent={() => <Loader size={'large'} />}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => getProducts({ refresh: true })}
              colors={[Colors.accent]}
            />
          }
        />
      </SafeAreaView>
    </GradientBackground>
  );
};

export default ProductList;
