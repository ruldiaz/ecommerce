import axios from 'axios';
import { getUsers, userDelete, resetError, setError, setLoading, orderDelete, setDeliveredFlag, getOrders } from '../slices/admin';
import { setProducts, setProductUpdateFlag, setReviewRemovalFlag } from '../slices/products';
import configProxy from '../../proxy';

export const getAllUsers = () => async (dispatch, getState) => {
  const {
    user: { userInfo },
  } = getState();

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Content-Type': 'application/json',
      },
    }
    const {data} = await axios.get(`${configProxy.backendRoute}/api/users`, config);
    dispatch(getUsers(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        ? error.message
        : 'Users could not be fetched.'
      )
    )
  }
}

export const deleteUser = (id) => async (dispatch, getState) => {
  const {
    user: { userInfo },
  } = getState();

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Content-Type': 'application/json',
      },
    }
    const {data} = await axios.delete(`${configProxy.backendRoute}/api/users/${id}`, config);
    dispatch(userDelete(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        ? error.message
        : 'Users could not be fetched.'
      )
    )
  }
}

export const getAllOrders = () => async (dispatch, getState) => {
  dispatch(setLoading(true));
  const {
    user: { userInfo },
  } = getState();

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Content-Type': 'application/json',
      },
    }
    const {data} = await axios.get(`${configProxy.backendRoute}/api/orders`, config);
    dispatch(getOrders(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        ? error.message
        : 'Orders could not be fetched.'
      )
    )
  }
}

export const deleteOrder = (id) => async (dispatch, getState) => {
  const {
    user: { userInfo },
  } = getState();

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Content-Type': 'application/json',
      },
    }
    const {data} = await axios.delete(`${configProxy.backendRoute}/api/orders/${id}`, config);
    dispatch(orderDelete(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        ? error.message
        : 'Orders could not be removed.'
      )
    )
  }
}

export const setDelivered = (id) => async (dispatch, getState) => {
  dispatch(setLoading(true));
  const {
    user: { userInfo },
  } = getState();

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Content-Type': 'application/json',
      },
    }
    const {data} = await axios.put(`${configProxy.backendRoute}/api/orders/${id}`, {}, config);
    dispatch(setDeliveredFlag());
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        ? error.message
        : 'Order could not be updated.'
      )
    )
  }
}

export const resetErrorAndRemoval = () => async(dispatch) => {
  dispatch(resetError());
}

// update product
export const updateProduct = (brand, name, category, stock, price, id, productIsNew, description, image) => async(dispatch, getState) => {
  const {
    user: { userInfo },
  } = getState();

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Content-Type': 'application/json',
      },
    }
    const {data} = await axios.put(`${configProxy.backendRoute}/api/products`, {brand, name, category, stock, price, id, productIsNew, description, image}, config);
    dispatch(setProducts(data));
    dispatch(setProductUpdateFlag());
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        ? error.message
        : 'Product could not be updated.'
      )
    )
  }
}

// delete a product
export const deleteProduct = (id) => async(dispatch, getState) => {
  const {
    user: { userInfo },
  } = getState();

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Content-Type': 'application/json',
      },
    }
    const {data} = await axios.delete(`${configProxy.backendRoute}/api/products/${id}`, config);
    dispatch(setProducts(data));
    dispatch(setProductUpdateFlag());
    dispatch(resetError());
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        ? error.message
        : 'Product could not be removed.'
      )
    )
  }
}

// upload a product
export const uploadProduct = (newProduct) => async(dispatch, getState) => {
  const {
    user: { userInfo },
  } = getState();

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Content-Type': 'application/json',
      },
    }
    const {data} = await axios.post(`${configProxy.backendRoute}/api/products`, newProduct, config);
    dispatch(setProducts(data));
    dispatch(setProductUpdateFlag());
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        ? error.message
        : 'Product could not be uploaded.'
      )
    )
  }
}

export const removeReview = (productId, reviewId) => async(dispatch, getState) => {
  const {
    user: { userInfo },
  } = getState();

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Content-Type': 'application/json',
      },
    }
    const {data} = await axios.put(`${configProxy.backendRoute}/api/products/${productId}/${reviewId}`, {}, config);
    dispatch(setProducts(data));
    dispatch(setReviewRemovalFlag());
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        ? error.message
        : 'Review could not be removed.'
      )
    )
  }
}