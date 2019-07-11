import React, { Component } from 'react';
import Cart from './components/Cart';


class App extends Component {
  state = {
    year: '2019',
    cartItemsList:
    [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
    counter: 4,
  };

  itemAdded = (itemInfo) => {
    this.state.cartItemsList.map( cartList => {

      if (itemInfo.product.id === cartList.product.id) {
        this.setState(prevState => {
          return {
            ...prevState.cartList,
            quantity: itemInfo.quantity,
          }
        });
      } else {

        let addThisItemToCart = {
          id: this.state.counter,
          product:{
            id: itemInfo.product.id,
            name: itemInfo.product.name,
            priceInCents: itemInfo.product.priceInCents,
          },
          quantity: itemInfo.quantity,
        };

        this.setState(prevState => {
          return {
            ...prevState.cartItemsList,
            cartItemsList: this.state.cartItemsList.concat(addThisItemToCart),
          }
        });

        this.setState({ counter: this.state.counter + 1 });
      }
    })

    // --- WORKING BUT DUPLICATES ID
    // let addThisItemToCart =
    // {
    //   id: this.state.counter,
    //   product:
    //   {
    //     id: itemInfo.product.id,
    //     name: itemInfo.product.name,
    //     priceInCents: itemInfo.product.priceInCents,
    //   },
    //   quantity: itemInfo.quantity,
    // }
    //
    // this.setState(prevState => {
    //   return {
    //     ...prevState.cartItemsList,
    //     cartItemsList: this.state.cartItemsList.concat(addThisItemToCart),
    //   }
    // });
    //
    // this.setState({ counter: this.state.counter + 1 });
    // --- WORKING BUT DUPLICATES ID

  }

  render() {
    return (
      <div>
        <Cart
          cartItemsList={this.state.cartItemsList}
          year={this.state.year}
          products = { this.state.products }
          itemAdded = {this.itemAdded}
        />
      </div>
    );
  };
};


export default App;
