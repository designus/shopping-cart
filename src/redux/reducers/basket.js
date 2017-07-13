import { ADD_TO_CART, UPDATE_CART, REMOVE_FROM_CART } from '../actions';
import { calculateAndRoundSum } from '../../helpers';

const shopBasket = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_CART:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          qty: state[action.id].qty + action.qty,
          sum: calculateAndRoundSum(state[action.id].sum + action.sum, 1)
        }
      };
    case REMOVE_FROM_CART:
      return Object.keys(state)
        .filter(id => id !== action.id)
        .reduce((acc, id) => {
          return {...acc, [id]: {...state[id]}}
        }, {});
    default:
      return state;
  }
}

export default shopBasket;