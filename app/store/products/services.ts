import axios from 'axios';
import { IProductFetchParams } from './types';

export const getProducts = async (params: IProductFetchParams) => {
  const { category, limit, skip } = params;
  const res = await axios.get(`/products/${category}/${limit}/${skip}`);
  return res;
};

export const getCategories = async () => {
  const res = await axios.get('/categories');
  return res;
};
