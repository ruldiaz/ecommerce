import axios from 'axios';
import configProxy from '../../proxy';
import { setProducts, setLoading, setError, setProduct, productReviewed, resetError } from '../slices/products';

export const getProducts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(`${configProxy.backendRoute}/api/products`);
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
    const { data } = await axios.get(`${configProxy.backendRoute}/api/products/${id}`);
    dispatch(setProduct(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message ? error.response.data.message : error.message ? error.message : 'An unexpected error has occurred. Please try again later.'
      )
    )
  }
}

export const createProductReview = (productId, userId, comment, rating, title) => async(dispatch, getState) => {
  dispatch(setLoading(true));
  const { 
    user: {userInfo},
   } = getState();

   try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(`${configProxy.backendRoute}/api/products/reviews/${productId}`, {comment, userId, rating, title}, config);
    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch(productReviewed());
   } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message 
        ? error.response.data.message 
        : error.message 
        ? error.message 
        : 'An unexpected error has occurred. Please try again later.'
      )
    )
   }
}

export const resetProductError = () => async (dispatch) => {
  dispatch(resetError());
}