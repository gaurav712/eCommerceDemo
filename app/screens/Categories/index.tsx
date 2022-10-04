import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import GradientBackground from '../../components/GradientBackground';
import CategoriesCover from '../../components/Svg/CategoriesCover';
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

  const handleOnPress = (category: any) => {
    navigation.navigate('List', {
      category: category.category,
    });
  };

  const Item = ({ category }: { category: any }) => (
    <Pressable style={styles.itemContainer} onPress={() => handleOnPress(category)}>
      <Image source={{ uri: category.image }} style={styles.itemImage} />
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>{category.category}</Text>
      </View>
    </Pressable>
  );

  const renderItem = ({ item }: { item: string }) => <Item category={item} />;

  const FlatlistHeader = () => (
    <View style={styles.flatlistHeader}>
      <Text style={styles.headingText}>{'Shop\nFor..'}</Text>
      <CategoriesCover />
    </View>
  );

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(_, index) => `${index}`}
          numColumns={2}
          ListHeaderComponent={<FlatlistHeader />}
        />
      </SafeAreaView>
    </GradientBackground>
  );
};

export default Categories;
