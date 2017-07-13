import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import { fetchData } from '../apiMock';
import { 
  addToCart,
  updateCart,
  receiveData,
  updateProductDiscount, 
  removeFromCart,
  revertProductDiscount
} from '../redux/actions';
import { ProductList } from '../components/productList';
import { Basket } from '../components/basket';

import './app.css';

class App extends Component {

  componentDidMount() {
    fetchData(500)
      .then((data) => this.props.dispatch(receiveData(data)))
      .catch(err => console.error(err))
  }

  updateBasket(product, quantity) {
    if (!this.props.basket[product.id]) {
      this.props.dispatch(addToCart(product, quantity));
    } else {
      this.props.dispatch(updateCart(product, quantity));
    }
  }

  updateProduct(product, quantity) {
    this.props.dispatch(updateProductDiscount(product.id, quantity))
  }

  addToCart(product, quantity) {
    this.updateBasket(product, quantity);
    this.updateProduct(product, quantity);
  }

  removeFromCart(id) {
    this.props.dispatch(removeFromCart(id));
    this.props.dispatch(revertProductDiscount(id))
  }

  render() {

    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h3>An apple a day keeps doctor away. <br />Buy fruits and stay healthy</h3>
        </div>
        <div className="app-content">
          <ProductList 
            products={this.props.products}
            addToCart={this.addToCart.bind(this)}
          />
          <Basket 
            basket={this.props.basket}
            removeFromCart={(this.removeFromCart.bind(this))}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    basket: state.shopBasket,
    products: state.products
  };
}

export default connect(mapStateToProps)(App);
