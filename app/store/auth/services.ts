import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ILoginCredsModel } from './types';

export const logIn = async (loginCreds: ILoginCredsModel) => {
  const res = await axios.post('/login', loginCreds);
  return res;
};

export const addProductToCart = async ({ productId }: { productId: string }) => {
  const token: string = (await AsyncStorage.getItem('token')) as string;
  const res = await axios.post(`/cart/${productId}`, {
    token,
  });
  return res;
};

export const getCart = async () => {
  const token: string = (await AsyncStorage.getItem('token')) as string;
  const res = await axios.post('/cart', {
    token,
  });
  return res;
};
