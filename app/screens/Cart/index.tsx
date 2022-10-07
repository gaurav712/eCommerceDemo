import React, { useEffect } from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import GradientBackground from '../../components/GradientBackground';
import Loader from '../../components/Loader';
import { IApplicationState } from '../../store';
import { getCart } from '../../store/auth/actions';
import { IProductModel } from '../../store/products/types';

import { styles } from './styles';

const Cart = () => {
  const dispatch: Dispatch = useDispatch();
  const { cart, cartLoading } = useSelector((state: IApplicationState) => state.authReducer);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  if (cartLoading) {
    return (
      <View style={styles.container}>
        <Loader size={'large'} />
      </View>
    );
  }

  const Item = ({ product }: { product: IProductModel }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: product.imagePath }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.itemTitle}>{product.productName}</Text>
        <Text style={styles.price}>₹{product.unitPrice}</Text>
      </View>
    </View>
  );

  const renderItem = ({ item }: { item: IProductModel }) => <Item product={item} />;

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        {cart.length ? (
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={(_, index) => `${index}`}
            ListHeaderComponent={<Text style={styles.headingText}>Your Cart</Text>}
          />
        ) : (
          <View style={styles.cartEmptyContainer}>
            <Text style={styles.headingText}>Your Cart</Text>
            <View style={styles.cartEmptyContainer}>
              <Text style={styles.cartEmptyText}>No items in cart!</Text>
            </View>
          </View>
        )}
      </SafeAreaView>
    </GradientBackground>
  );
};

export default Cart;
