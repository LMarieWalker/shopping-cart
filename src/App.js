import React, { Component } from 'react';
import Cart from './components/Cart';
import Spinner from './components/Spinner';


class App extends Component {
  state = {
    year: '2019',
    cartItemsList:
    [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    products: [],
    counter: 4,
  };

    componentDidMount = async () => {

      const res = await fetch(`${process.env.REACT_APP_API_URL}/products`);
      const productsFromJson = await res.json();

      setTimeout(() => {
        this.setState({products: productsFromJson});
      }, 3000);

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
    });

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
    if (this.state.products.length === 0) {
      return <Spinner message='Waiting for product items to load from the server!' />
    } else {
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
    }
  };
};


export default App;
