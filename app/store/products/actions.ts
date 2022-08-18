/* action creators of Saga */
import {IProductModel, actionTypes} from './types';

export const fetchProducts = () => ({
  type: actionTypes.FETCH_PRODUCTS_PENDING,
});
