import { put, takeEvery, call } from 'redux-saga/effects';
import { all } from '@redux-saga/core/effects';
import { logIn } from './services';
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

/* Saga watches the actions */
function* watchLoggingIn() {
  yield takeEvery(actionTypes.AUTH_PENDING, loggingIn);
}

/* Saga sends all the watchers to the sagaMiddleware to run. */
export function* authSaga() {
  yield all([watchLoggingIn()]);
}
