import React from 'react';
import CartItem from './CartItem';


class CartItems extends React.Component {
  render() {
    // GET INDIVIDUAL CART ITEM
    // NOTE: cartItem = { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 }
    const itemsList = this.props.cartItemsList.map( item =>
      <CartItem
        cartItem={ item }
        key={ item.id }
      />
    );

    // GET CART TOTAL
    let total = 0.00;
    let cartItems = this.props.cartItemsList;
    for (let each in cartItems) {
      let price = cartItems[each]['product']['priceInCents'];
      let qty = cartItems[each]['quantity'];
      total += price * qty;
    }

    return (
      <div className='container'>
        <div><hr /></div>
        <div className='card bg-info'>
          <div className='card-body'>

            <h1 className='card-title text-white'>Cart Items</h1>

            <div className='list-group'>
              <div className='list-group-item d-flex justify-content-between align-items-center'>
                <span className='align-self-left'>Product</span>
                <span className='align-self-center'>Quantity</span>
                <span className='align-self-right'>Price</span>
              </div>
            </div>

            { itemsList }

            <div>
              <h3 className='bg-warning text-mutted text-danger'>Total: ${ (total/100).toFixed(2) }</h3>
            </div>

          </div>
        </div>
        <div><hr /></div>
      </div>
    );
  };
};

export default CartItems;
