// @ts-ignore
import {
  combineReducers,
  createStore,
  applyMiddleware,
  Store,
} from 'redux';
import { productsReducer } from './products/reducer';
import { productsSaga } from './products/sagas';
import createSagaMiddleware from 'redux-saga';
import { IProductsState } from './products/types';
import { IAuthState } from './auth/types';
import { authReducer } from './auth/reducer';
import { authSaga } from './auth/sagas';

export interface IApplicationState {
  productsReducer: IProductsState;
  authReducer: IAuthState;
}

const rootReducer = combineReducers<IApplicationState>({
  productsReducer: productsReducer,
  authReducer: authReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]; // side-effect middleware
const store: Store<IApplicationState, any> = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

sagaMiddleware.run(productsSaga);
sagaMiddleware.run(authSaga);

export default store;
