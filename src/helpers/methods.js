export const getDiscountedPrice = (price, rate, minQuantityState) => {
  if (minQuantityState === 0) {
    return price - (price * rate / 100);
  }
  return price;
}

export const getProductWithDiscount = (product, quantity = 0) => {
  if (product.discount) {

    const {rate, minQuantity, minQuantityState } = product.discount;
    const adjustedQuantity = minQuantityState ? minQuantityState - quantity : minQuantity;
    const price = getDiscountedPrice(product.price, rate, adjustedQuantity);
    
    return {
      ...product,
      discount: {
        ...product.discount,
        price,
        minQuantityState: adjustedQuantity
      }
    }
  }
  return product;
}

export const normalizeData = (items) => items.reduce((acc, item) => ({...acc, [item.id]: getProductWithDiscount(item)}), {})

export const calculateAndRoundSum = (price, quantity) => {
  return parseFloat((price * quantity).toFixed(2));
}