import React from 'react';
import './productName.css';

export const getPromotionMsg = (discount) => {
  if (discount) {
    const {genPromotion, promotion, minQuantityState} = discount;
    return minQuantityState === 0 ? promotion || genPromotion : genPromotion;
  }
  return '';
}

export const ProductName = ({name, discount}) => {
  let promotionMsg = getPromotionMsg(discount);
  return (
    <h4>
      {name}
      {promotionMsg ? <span className="promotion"> - {promotionMsg}</span> : '' }
    </h4>
  )
}