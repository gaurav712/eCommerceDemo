export interface IAuthState {
  readonly loginCreds: IAuthUserData;
  readonly isLoading: boolean;
  readonly error: string;
}

export interface ILoginCredsModel {
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
  type: typeof actionTypes.AUTH_PENDING;
}

export interface IError {
  message: string;
}

export const actionTypes = {
  AUTH_PENDING: 'AUTH_PENDING',
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_FAILURE: 'AUTH_FAILURE',

  ADD_CART_PENDING: 'ADD_CART_PENDING',
  ADD_CART_SUCCESS: 'ADD_CART_SUCCESS',
  ADD_CART_FAILURE: 'ADD_CART_FAILURE',
};
