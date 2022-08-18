// @ts-ignore
import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
  Store,
} from 'redux';
import {productsReducer} from './products/reducer';
import {productsSaga} from './products/sagas';
import createSagaMiddleware from 'redux-saga';
import {IProductsState} from './products/types';

export interface IApplicationState {
  productsReducer: IProductsState;
}

const rootReducer = combineReducers<IApplicationState>({
  productsReducer: productsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]; // side-effect middleware
const store: Store<IApplicationState, any> = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

sagaMiddleware.run(productsSaga);

export default store;
