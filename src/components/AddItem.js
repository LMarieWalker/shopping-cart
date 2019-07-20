import React, { Component } from 'react';

class AddItem extends Component {

  state =
  {
    id: 1,
    product:
    {
      id: 20,
      name: 'Mediocre',
      priceInCents: 234,
    },
    quantity: 0,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.itemAdded(this.state);
  }

  handleProductList = (e) => {
    e.preventDefault();
    let myItem = this.props.products.filter(product => product.name === e.target.value);
    this.setState({ product: myItem[0] });
    this.setState({ id: (this.props.cartItemsList.length + 1) });
  }

  handleQuantity = (e) => {
    e.preventDefault();
    this.setState({ quantity: this.state.quantity + parseInt(e.target.value) });
  }

  render() {
    let productList = this.props.products.map( product => {
      return ( <option key={product.id}> { product.name } </option> );
    });

    return (
      <div className='container'>
        <div className='card bg-info'>
          <div className='card-body'>
            <form onSubmit={this.handleSubmit}>
              <h1 className='card-title text-white'>Add An Item To Your Cart</h1>


              <select
                defaultValue={'default'}
                onChange={this.handleProductList}
              >
                <option disabled value='default'>Choose Product</option>
                { productList }
              </select>

              <select defaultValue={'default'} onChange={this.handleQuantity}>
                <option disabled value='default'>Select Quantity</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>

              <input type='submit' value='Create Item' />
            </form>
          </div>
        </div>
      </div>
    );
  };
};

export default AddItem;
