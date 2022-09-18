import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image style={styles.image} source={{ uri: product?.imagePath }} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{product?.productName}</Text>
          <Text style={styles.price}>₹{product?.unitPrice}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
