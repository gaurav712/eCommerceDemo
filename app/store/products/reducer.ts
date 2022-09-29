import { IProductsState, actionTypes } from './types';
import { Action } from 'redux';

const initialState: IProductsState = {
  categories: [],
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
      return { ...state, isLoading: true };
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, productList: action.payload };
    case actionTypes.FETCH_PRODUCTS_ADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productList: [...state.productList, ...action.payload],
      };
    case actionTypes.FETCH_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    case actionTypes.FETCH_CATEGORIES_PENDING:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, categories: action.payload };
    case actionTypes.FETCH_CATEGORIES_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
