import React, { Component } from 'react'

class CartHeader extends Component {
  render () {
    return (
      <nav className='navbar navbar-dark bg-primary'>
        <a href='./Cart.js' className='navbar-brand'>Shopping Cart</a>
      </nav>

    );
  };
};

export default CartHeader;
