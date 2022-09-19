import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/auth/actions';
import { IProductModel } from '../../store/products/types';
import { styles } from './styles';

const ProductDetails = ({ navigation }: { navigation: NativeStackScreenProps<any> }) => {
  const [product, setProduct] = useState<IProductModel>();

  useEffect(() => {
    if (navigation) {
      //@ts-ignore
      const navigationState = navigation.getState();
      const { index } = navigationState;
      const { product } = navigationState.routes[index].params;
      setProduct(product);
    }
  }, [navigation]);

  const dispatch = useDispatch();

  const handleAddCart = () => {
    if (product) {
      dispatch(addToCart(product?._id));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image style={styles.image} source={{ uri: product?.imagePath }} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{product?.productName}</Text>
          <Text style={styles.price}>₹{product?.unitPrice}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>
        <Pressable style={styles.addCart} onPress={handleAddCart}>
          <Text style={styles.addCartText}>{'Add to Cart'}</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
