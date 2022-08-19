import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { IProductModel } from '../../store/products/types';

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

  return <></>;
};

export default ProductDetails;
