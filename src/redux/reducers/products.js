import { RECEIVE_DATA, UPDATE_PRODUCT_DISCOUNT, REVERT_PRODUCT_DISCOUNT } from '../actions';
import { getProductWithDiscount, getDiscountedPrice } from '../../helpers';

const products = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.products;
    case UPDATE_PRODUCT_DISCOUNT: 
      return {...state, [action.id]: getProductWithDiscount(state[action.id], action.quantity)}
    case REVERT_PRODUCT_DISCOUNT:
      const product = state[action.id];
      const discountState = product.discount;
      if (discountState) {
        return {
          ...state,
          [action.id]: {
            ...product,
            discount: {
              ...discountState,
              minQuantityState: discountState.minQuantity,
              price: getDiscountedPrice(product.price, discountState.rate, discountState.minQuantity)
            }
          }
        }
      }
      return state;
    default:
      return state;
  }
}

export default products;