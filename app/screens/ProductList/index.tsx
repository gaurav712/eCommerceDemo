import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../../store';
import { IProductModel } from '../../store/products/types';

import { styles } from './styles';

const ProductList = ({ navigation }: { navigation: NativeStackScreenProps<any> }) => {
  const { productList } = useSelector((state: IApplicationState) => state.productsReducer);

  const [category, setCategory] = useState('');

  useEffect(() => {
    if (navigation) {
      //@ts-ignore
      const navigationState = navigation.getState();
      const { index } = navigationState;
      const { category } = navigationState.routes[index].params;
      setCategory(category);
    }
  }, [navigation]);

  const handleOnPress = (product: IProductModel) => {
    //@ts-ignore
    navigation.navigate('Details', { product });
  };

  const Item = ({ product }: { product: IProductModel }) => (
    <Pressable style={styles.itemContainer} onPress={() => handleOnPress(product)}>
      <Text style={styles.itemTitle}>{product.title}</Text>
    </Pressable>
  );

  const renderItem = ({ item }: { item: IProductModel }) => <Item product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={productList.filter((item) => item.category === category)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default ProductList;
