import { put, takeEvery, call } from 'redux-saga/effects';
import { all } from '@redux-saga/core/effects';
import { getProducts } from './services';
import { actionTypes, IError, IProductModel } from './types';

const categories = ['Category First', 'Category Second', 'Category Third'];

/*function generator implementations of Saga */
function* fetchingProducts() {
  try {
    let { data }: { data: IProductModel[] } = yield call(getProducts); // saga

    // randomly assign some category
    data = data.map((product) => ({
      ...product,
      category: categories[Math.floor(Math.random() * 3)],
    }));

    yield put({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (e) {
    yield put({
      type: actionTypes.FETCH_PRODUCTS_FAILURE,
      payload: (e as IError).message,
    });
  }
}

/* Saga watches the actions */
function* watchFetchingProducts() {
  yield takeEvery(actionTypes.FETCH_PRODUCTS_PENDING, fetchingProducts);
}

/* Saga sends all the watchers to the sagaMiddleware to run. */
export function* productsSaga() {
  yield all([watchFetchingProducts()]);
}
