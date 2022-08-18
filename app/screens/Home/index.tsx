import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { IApplicationState } from '../../store';
import { fetchProducts } from '../../store/products/actions';

const Home = () => {

  const dispatch: Dispatch = useDispatch();
  const {productList, isLoading} = useSelector(
    (state: IApplicationState) => state.productsReducer,
  );

  useEffect(() => {
      dispatch(fetchProducts())
    }, [])

  useEffect(() => {
      if(productList) console.log('hey', JSON.stringify(productList, null, 2))
    }, [productList])

  return <></>;
};

export default Home;
