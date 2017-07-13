import { combineReducers } from 'redux';
import shopBasket from './basket';
import products from './products';

const rootReducer = combineReducers({
  shopBasket,
  products
})

export default rootReducer;