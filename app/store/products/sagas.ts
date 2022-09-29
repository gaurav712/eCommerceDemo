import { put, takeEvery, call } from 'redux-saga/effects';
import { all } from '@redux-saga/core/effects';
import { getProducts, getCategories } from './services';
import { actionTypes, IError, IProductFetchParams, IProductResponse } from './types';

/*function generator implementations of Saga */
function* fetchingProducts({ params }: { params: IProductFetchParams }) {
  try {
    const { data }: { data: IProductResponse } = yield call(getProducts, params); // saga

    const { skip } = params;
    if (skip) {
      yield put({ type: actionTypes.FETCH_PRODUCTS_ADD_SUCCESS, payload: data.products });
    } else {
      yield put({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: data.products });
    }
  } catch (e) {
    yield put({
      type: actionTypes.FETCH_PRODUCTS_FAILURE,
      payload: (e as IError).message,
    });
  }
}

function* fetchingCategories() {
  try {
    const { data }: { data: any } = yield call(getCategories); // saga

    if (!data?.status) throw 'failed to fetch categories!';

    yield put({ type: actionTypes.FETCH_CATEGORIES_SUCCESS, payload: data.categories });
  } catch (e) {
    yield put({
      type: actionTypes.FETCH_CATEGORIES_FAILURE,
      payload: (e as IError).message,
    });
  }
}

/* Saga watches the actions */
function* watchFetchingProducts() {
  yield takeEvery(actionTypes.FETCH_PRODUCTS_PENDING, fetchingProducts);
}
function* watchFetchingCategories() {
  yield takeEvery(actionTypes.FETCH_CATEGORIES_PENDING, fetchingCategories);
}

/* Saga sends all the watchers to the sagaMiddleware to run. */
export function* productsSaga() {
  yield all([watchFetchingProducts(), watchFetchingCategories()]);
}
