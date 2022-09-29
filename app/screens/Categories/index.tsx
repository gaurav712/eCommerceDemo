import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Pressable, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { IApplicationState } from '../../store';
import { fetchCategories } from '../../store/products/actions';
import { INavigation } from '../../types';

import { styles } from './styles';

const Categories = ({ navigation }: { navigation: INavigation }) => {
  const dispatch: Dispatch = useDispatch();
  const { loginCreds } = useSelector((state: IApplicationState) => state.authReducer);
  const { categories, isLoading } = useSelector(
    (state: IApplicationState) => state.productsReducer,
  );

  // Get the list of products
  useEffect(() => {
    if (loginCreds) {
      dispatch(fetchCategories());
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
      <FlatList data={categories} renderItem={renderItem} keyExtractor={(_, index) => index} />
    </SafeAreaView>
  );
};

export default Categories;
