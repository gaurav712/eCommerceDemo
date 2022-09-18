import axios from 'axios';

export const getProducts = async () => {
  const res = await axios.get('/products');
  return res;
};

export const getCategories = async () => {
  const res = await axios.get('/categories');
  return res;
};
