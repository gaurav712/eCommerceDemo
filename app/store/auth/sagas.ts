import { put, takeEvery, call } from 'redux-saga/effects';
import { all } from '@redux-saga/core/effects';
import { addProductToCart, logIn } from './services';
import { actionTypes, IAction, IAuthResult, IError } from './types';

/*function generator implementations of Saga */
function* loggingIn(action: IAction) {
  try {
    const { data }: { data: IAuthResult } = yield call(logIn, action.payload);
    const { status, user } = data;

    if (!status) throw 'authorisation failed!';

    yield put({ type: actionTypes.AUTH_SUCCESS, payload: user });
  } catch (e) {
    yield put({
      type: actionTypes.AUTH_FAILURE,
      payload: (e as IError).message,
    });
  }
}

function* addToCart(productId: string) {
  try {
    const data  = yield call(addProductToCart, productId); // saga

    if (!data?.status) throw 'failed to add product to cart!';

    yield put({ type: actionTypes.ADD_CART_SUCCESS, payload: data });
  } catch (e) {
    yield put({
      type: actionTypes.ADD_CART_FAILURE,
      payload: (e as IError).message,
    });
  }
}

/* Saga watches the actions */
function* watchLoggingIn() {
  yield takeEvery(actionTypes.AUTH_PENDING, loggingIn);
}
function* watchAddToCart() {
  yield takeEvery(actionTypes.ADD_CART_PENDING, addToCart);
}

/* Saga sends all the watchers to the sagaMiddleware to run. */
export function* authSaga() {
  yield all([watchLoggingIn(), watchAddToCart()]);
}
