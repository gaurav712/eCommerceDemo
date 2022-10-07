export interface IAuthState {
  readonly loginCreds: IAuthUserData;
  readonly isLoading: boolean;
  readonly cart: [];
  readonly cartLoading: boolean;
  readonly error: string;
}

export interface ILoginCredsModel {
  username?: string;
  userEmail: string;
  password: string;
}

export interface IAuthUserData {
  userEmail: string;
  password: string;
  username: string;
  token: string;
}

export interface IAuthResult {
  status: boolean;
  user: IAuthUserData;
}

export interface IAction {
  payload: ILoginCredsModel;
  type: typeof actionTypes.LOGIN_PENDING;
}

export interface IError {
  message: string;
}

export const actionTypes = {
  LOGIN_PENDING: 'LOGIN_PENDING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',

  SIGNUP_PENDING: 'SIGNUP_PENDING',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'SIGNUP_FAILURE',

  ADD_CART_PENDING: 'ADD_CART_PENDING',
  ADD_CART_SUCCESS: 'ADD_CART_SUCCESS',
  ADD_CART_FAILURE: 'ADD_CART_FAILURE',

  GET_CART_PENDING: 'GET_CART_PENDING',
  GET_CART_SUCCESS: 'GET_CART_SUCCESS',
  GET_CART_FAILURE: 'GET_CART_FAILURE',
};
