import React from 'react';
import './price.css';

export const Price = ({price, currency = '', className = 'price'}) => {
  return (
    <span className={className}>
      {price} {currency}
    </span>
  )
}