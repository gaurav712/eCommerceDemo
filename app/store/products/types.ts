export interface IProductsState {
  readonly productList: IProductModel[];
  readonly isLoading: boolean;
  readonly error: string;
}

export interface IProductModel {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRatingModel;
}

interface IRatingModel {
  rate: number;
  count: number;
}

export interface IError {
  message: string
}

export const actionTypes = {
  FETCH_PRODUCTS_PENDING: 'FETCH_PRODUCTS_PENDING',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE: 'FETCH_PRODUCTS_FAILURE',
};
