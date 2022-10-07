import { put, takeEvery, call } from 'redux-saga/effects';
import { all } from '@redux-saga/core/effects';
import { addProductToCart, getCart, logIn, signUp } from './services';
import { actionTypes, IAction, IAuthResult, IError } from './types';

/*function generator implementations of Saga */
function* loggingIn(action: IAction) {
  try {
    const { data }: { data: IAuthResult } = yield call(logIn, action.payload);
    const { status, user } = data;

    if (!status) throw 'authorisation failed!';

    yield put({ type: actionTypes.LOGIN_SUCCESS, payload: user });
  } catch (e) {
    yield put({
      type: actionTypes.LOGIN_FAILURE,
      payload: (e as IError).message,
    });
  }
}

function* signingUp(action: IAction) {
  try {
    const { data }: { data: IAuthResult } = yield call(signUp, action.payload);
    const { status, user } = data;

    if (!status) throw 'authorisation failed!';

    yield put({ type: actionTypes.SIGNUP_SUCCESS, payload: user });
  } catch (e) {
    yield put({
      type: actionTypes.SIGNUP_FAILURE,
      payload: (e as IError).message,
    });
  }
}

function* addToCart(productId: string) {
  try {
    const data = yield call(addProductToCart, productId); // saga

    if (!data?.status) throw 'failed to add product to cart!';

    yield put({ type: actionTypes.ADD_CART_SUCCESS, payload: data });
  } catch (e) {
    yield put({
      type: actionTypes.ADD_CART_FAILURE,
      payload: (e as IError).message,
    });
  }
}

function* fetchingCart() {
  try {
    const { data } = yield call(getCart); // saga

    const { status, cart } = data;
    if (!status) throw 'failed to fetch cart!';

    yield put({ type: actionTypes.GET_CART_SUCCESS, payload: cart });
  } catch (e) {
    yield put({
      type: actionTypes.GET_CART_FAILURE,
      payload: (e as IError).message,
    });
  }
}

/* Saga watches the actions */
function* watchLoggingIn() {
  yield takeEvery(actionTypes.LOGIN_PENDING, loggingIn);
}
function* watchSigningUp() {
  yield takeEvery(actionTypes.SIGNUP_PENDING, signingUp);
}
function* watchAddToCart() {
  yield takeEvery(actionTypes.ADD_CART_PENDING, addToCart);
}
function* watchFetchingCart() {
  yield takeEvery(actionTypes.GET_CART_PENDING, fetchingCart);
}

/* Saga sends all the watchers to the sagaMiddleware to run. */
export function* authSaga() {
  yield all([watchLoggingIn(), watchSigningUp(), watchAddToCart(), watchFetchingCart()]);
}
