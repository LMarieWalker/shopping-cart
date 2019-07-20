import React from 'react';

const CartItem = ({ cartItem }) => {

  return (

    <tbody>
      <tr>
        <th scope='row'>{ cartItem.id }</th>
        <th scope='row'>{ cartItem.product.id }</th>
        <td>{ cartItem.product.name }</td>
        <td>{ cartItem.quantity }</td>
        <td>${ (cartItem.product.priceInCents/100).toFixed(2) }</td>
      </tr>
    </tbody>

  );
};

export default CartItem;
