import React from 'react';
import { Price } from '../price';
import './discountedPrice.css';

export const DiscountedPrice = ({price, oldPrice, currency}) => {
  return (
    <span>
      {
        oldPrice !== price ? 
          <span>
            <Price price={oldPrice} className='old-price'/>
            <Price price={price} currency={currency} className='new-price' />
          </span> 
        : <Price price={price} currency={currency} />
      }
    </span>
  )
}