export interface IProductsState {
  readonly categories: [];
  readonly productList: IProductModel[];
  readonly isLoading: boolean;
  readonly error: string;
}

export interface IProductModel {
  _id: string;
  productName: string;
  unitPrice: number;
  description: string;
  category: string;
  imagePath: string;
}

export interface IError {
  message: string;
}

export const actionTypes = {
  FETCH_PRODUCTS_PENDING: 'FETCH_PRODUCTS_PENDING',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE: 'FETCH_PRODUCTS_FAILURE',

  FETCH_CATEGORIES_PENDING: 'FETCH_CATEGORIES_PENDING',
  FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILURE: 'FETCH_CATEGORIES_FAILURE',
};
