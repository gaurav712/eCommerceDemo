/* action creators of Saga */
import { actionTypes, IProductFetchParams } from './types';

export const fetchProducts = (params: IProductFetchParams) => ({
  params,
  type: actionTypes.FETCH_PRODUCTS_PENDING,
});

export const fetchCategories = () => ({
  type: actionTypes.FETCH_CATEGORIES_PENDING,
});
