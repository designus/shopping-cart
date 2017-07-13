import React from 'react';
import { calculateAndRoundSum } from '../../helpers';
import './basketProducts.css';

export const getTotal = (items) => {
  return Object.keys(items).reduce((acc, key) => calculateAndRoundSum(acc += items[key].sum, 1), 0);
}

export const BasketProducts = ({basket, removeFromCart}) => {

  const productIds = Object.keys(basket);
  const firstProduct = basket[productIds[0]] || {};
  const visibleKeys = Object.keys(firstProduct).slice(1);

  return productIds.length ? (
    <table className="basket-products">
      <thead> 
        <tr>
          { visibleKeys.map((key, i) => (<th key={i}>{key}</th>)) }
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          productIds.map((id) => {
            return (
              <tr key={id}>
                { Object.keys(basket[id]).slice(1).map((key, i) => (<td key={i}>{ basket[id][key] }</td>)) }
                <td className="remove-column">
                  <span onClick={() => removeFromCart(id)} className="remove">x</span>
                </td>
              </tr>
            )
          })
        }
        <tr>
          <td colSpan={visibleKeys.length - 1} className="align-right">Total</td>
          <td>{getTotal(basket)}</td>
        </tr>
      </tbody>
    </table>
  ) : (<div>Product cart is empty</div>)
}