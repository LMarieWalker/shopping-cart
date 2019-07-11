import React, { Component } from 'react';
import CartHeader from './CartHeader';
import AddItem from './AddItem';
import CartItems from './CartItems';
import CartFooter from './CartFooter';

class Cart extends Component {

  render() {
    return (
      <div>
        <CartHeader />

        <CartItems
          cartItemsList={this.props.cartItemsList}
        />

        <AddItem
          products={this.props.products}
          itemAdded={this.props.itemAdded}
          cartItemsList={this.props.cartItemsList}
        />

        <CartFooter
          year={this.props.year}
        />

      </div>
    );
  };
};

export default Cart;
