import { normalizeData, calculateAndRoundSum } from '../helpers';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const UPDATE_PRODUCT_DISCOUNT = 'UPDATE_PRODUCT_DISCOUNT';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const REVERT_PRODUCT_DISCOUNT = 'REVERT_PRODUCT_DISCOUNT';

export const receiveData = (products) => {
  return {
    type: RECEIVE_DATA,
    products: normalizeData(products)
  }
}

export const addToCart = ({id, price, name}, qty = 1) => {
  return {
    type: ADD_TO_CART,
    payload: { 
      id,
      name,
      price,
      qty,
      sum: calculateAndRoundSum(price, qty)
    }
  }
}

export const updateCart = ({id, price}, qty = 1) => {
  return {
    type: UPDATE_CART,
    id,
    price,
    qty,
    sum: calculateAndRoundSum(price, qty)
  }
}

export const updateProductDiscount = (id, quantity) => {
  return {
    type: UPDATE_PRODUCT_DISCOUNT,
    id,
    quantity
  }
}

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}

export const revertProductDiscount = (id) => {
  return {
    type: REVERT_PRODUCT_DISCOUNT,
    id
  }
}