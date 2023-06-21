import axios from 'axios';

import { setProducts, setLoading, setError, setProduct } from '../slices/products';

export const getProducts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get('http://localhost:3001/api/products');
    dispatch(setProducts(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message ? error.response.data.message : error.message ? error.message : 'An unexpected error has occurred. Please try again later.'
      )
    )
  }
}

export const getProduct = (id) => async(dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(`http://localhost:3001/api/products/${id}`);
    dispatch(setProduct(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message ? error.response.data.message : error.message ? error.message : 'An unexpected error has occurred. Please try again later.'
      )
    )
  }
}