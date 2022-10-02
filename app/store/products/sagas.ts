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
    //const { data }: { data: any } = yield call(getCategories); // saga
    const data = {
      status: true,
      categories: [
        {
          category: 'Headphones',
          image:
            'https://static.wixstatic.com/media/2cd43b_c2f357568a8d4e6daa483796dd4450ad~mv2_d_2561_2910_s_4_2.png/v1/fill/w_165,h_187,fp_0.50_0.50/2cd43b_c2f357568a8d4e6daa483796dd4450ad~mv2_d_2561_2910_s_4_2.png',
        },
        {
          category: 'Speakers',
          image:
            'https://static.wixstatic.com/media/2cd43b_c5777b3867a9491585e433ecb063e16f~mv2.png/v1/fill/w_180,h_180,fp_0.50_0.50/2cd43b_c5777b3867a9491585e433ecb063e16f~mv2.png',
        },
        {
          category: 'Cell Phones and accessories',
          image: 'https://hotemoji.com/images/emoji/5/6l3ep9b9jl5.png',
        },
        {
          category: 'Headphones',
          image:
            'https://static.wixstatic.com/media/2cd43b_c2f357568a8d4e6daa483796dd4450ad~mv2_d_2561_2910_s_4_2.png/v1/fill/w_165,h_187,fp_0.50_0.50/2cd43b_c2f357568a8d4e6daa483796dd4450ad~mv2_d_2561_2910_s_4_2.png',
        },
        {
          category: 'Speakers',
          image:
            'https://static.wixstatic.com/media/2cd43b_c5777b3867a9491585e433ecb063e16f~mv2.png/v1/fill/w_180,h_180,fp_0.50_0.50/2cd43b_c5777b3867a9491585e433ecb063e16f~mv2.png',
        },
        {
          category: 'Cell Phones and accessories',
          image: 'https://hotemoji.com/images/emoji/5/6l3ep9b9jl5.png',
        },
        {
          category: 'Headphones',
          image:
            'https://static.wixstatic.com/media/2cd43b_c2f357568a8d4e6daa483796dd4450ad~mv2_d_2561_2910_s_4_2.png/v1/fill/w_165,h_187,fp_0.50_0.50/2cd43b_c2f357568a8d4e6daa483796dd4450ad~mv2_d_2561_2910_s_4_2.png',
        },
        {
          category: 'Speakers',
          image:
            'https://static.wixstatic.com/media/2cd43b_c5777b3867a9491585e433ecb063e16f~mv2.png/v1/fill/w_180,h_180,fp_0.50_0.50/2cd43b_c5777b3867a9491585e433ecb063e16f~mv2.png',
        },
        {
          category: 'Cell Phones and accessories',
          image: 'https://hotemoji.com/images/emoji/5/6l3ep9b9jl5.png',
        },
      ],
    };

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
  // @ts-ignore
  yield takeEvery(actionTypes.FETCH_PRODUCTS_PENDING, fetchingProducts);
}
function* watchFetchingCategories() {
  yield takeEvery(actionTypes.FETCH_CATEGORIES_PENDING, fetchingCategories);
}

/* Saga sends all the watchers to the sagaMiddleware to run. */
export function* productsSaga() {
  yield all([watchFetchingProducts(), watchFetchingCategories()]);
}
