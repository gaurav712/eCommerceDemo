/* action creators of Saga */
import { actionTypes } from './types';

export const fetchProducts = () => ({
  type: actionTypes.FETCH_PRODUCTS_PENDING,
});

export const fetchCategories = () => ({
  type: actionTypes.FETCH_CATEGORIES_PENDING,
});
