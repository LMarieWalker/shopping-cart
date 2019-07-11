import React from 'react';

const CartItem = ({ cartItem }) => {

  return (

    <div className='list-group'>
      <div className='list-group-item d-flex justify-content-between align-items-center'>
        <span>{ cartItem.product.name }</span>
        <span>{ cartItem.quantity }</span>
        <span className='align-self-right badge badge-primary badge-pill'>${ (cartItem.product.priceInCents/100).toFixed(2) }</span>
      </div>
    </div>
  );
};

export default CartItem;
