import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import GradientBackground from '../../components/GradientBackground';
import { IApplicationState } from '../../store';
import { addToCart } from '../../store/auth/actions';
import { IProductModel } from '../../store/products/types';
import { styles } from './styles';

const ProductDetails = ({ navigation }: { navigation: NativeStackScreenProps<any> }) => {
  const [product, setProduct] = useState<IProductModel>();
  const { cartLoading } = useSelector((state: IApplicationState) => state.authReducer);

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
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: product?.imagePath }} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{product?.productName}</Text>
            <Text style={styles.price}>₹{product?.unitPrice}</Text>
            <Text style={styles.description}>{product?.description}</Text>
          </View>
        </ScrollView>
        <View style={styles.addCart}>
          <Button label={'Add to Cart'} isLoading={cartLoading} onSubmit={handleAddCart} />
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default ProductDetails;
