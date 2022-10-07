import { IAuthState, actionTypes } from './types';
import { Action } from 'redux';

const initialState: IAuthState = {
  loginCreds: {
    userEmail: '',
    password: '',
    username: '',
    token: '',
  },
  isLoading: false,
  cart: [],
  cartLoading: false,
  error: '',
};

interface IAction extends Action {
  readonly payload?: any;
}

export const authReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case actionTypes.LOGIN_PENDING:
    case actionTypes.SIGNUP_PENDING:
      return { ...state, isLoading: true };
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.SIGNUP_SUCCESS:
      return { ...state, isLoading: false, loginCreds: action.payload };
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.SIGNUP_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    case actionTypes.ADD_CART_PENDING:
      return { ...state, cartLoading: true };
    case actionTypes.ADD_CART_SUCCESS:
      return { ...state, cartLoading: false };
    case actionTypes.ADD_CART_FAILURE:
      return { ...state, cartLoading: false, error: action.payload };

    case actionTypes.GET_CART_PENDING:
      return { ...state, cartLoading: true };
    case actionTypes.GET_CART_SUCCESS:
      return { ...state, cartLoading: false, cart: action.payload };
    case actionTypes.GET_CART_FAILURE:
      return { ...state, cartLoading: false, error: action.payload };

    default:
      return state;
  }
};
