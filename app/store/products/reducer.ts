import {IProductsState, actionTypes} from './types';
import {Action} from 'redux';

const initialState: IProductsState = {
  productList: [],
  isLoading: false,
  error: '',
};

interface IAction extends Action {
  readonly payload?: any;
}

export const productsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_PENDING:
      return {...state, isLoading: true};
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {...state, isLoading: false, productList: action.payload};
    case actionTypes.FETCH_PRODUCTS_PENDING:
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
};
