/* action creators of Saga */
import { ILoginCredsModel, actionTypes } from './types';

export const login = (creds: ILoginCredsModel) => ({
  payload: creds,
  type: actionTypes.LOGIN_PENDING,
});

export const signUp = (creds: ILoginCredsModel) => ({
  payload: creds,
  type: actionTypes.SIGNUP_PENDING,
});

export const addToCart = (productId: string) => ({
  productId,
  type: actionTypes.ADD_CART_PENDING,
});

export const getCart = () => ({
  type: actionTypes.GET_CART_PENDING,
});
