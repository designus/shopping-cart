import React, { Component } from 'react';
import { DiscountedPrice } from '../discountedPrice';
import { Price } from '../price';
import { ProductName } from '../productName';
import './productList.css';

export class ProductList extends Component {
  
  render() {
    const { products, addToCart } = this.props;
    
    return (
      <div className="product-list">
        {Object.keys(products).map((key, i) => {
          
          const { name, price, discount, currency } = products[key];
          const latestPrice = discount ? discount.price : price;

          return (
            <div className="product-item" key={i}>
              <ProductName name={name} discount={discount} />
              <div>Price:
                {
                  discount 
                    ? <DiscountedPrice currency={currency} oldPrice={price} {...discount} /> 
                    : <Price price={price} currency={currency} />
                }
              </div>
              <div 
                className="add-to-cart"
                onClick={() => addToCart({...products[key], price: latestPrice }, 1)}>
                Add to cart
              </div>
            </div>
          )
        })}
      </div>    
    )
  }
}