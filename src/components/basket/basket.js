import React from 'react';
import { BasketProducts } from '../basketProducts';
import './basket.css';

export const Basket = (props) => {
  return (
    <div className="basket">
      <div className="basket-content">
        <h3>Product cart</h3>
        <BasketProducts {...props }/>
      </div>
    </div>
  )
}