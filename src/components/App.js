import React from 'react';
import Product from './Product';
import Checkout from './Checkout';
import Nav from './Nav';
import './App.css';
import './Webflow.css';

class App extends React.Component {
  render() {
    return (<div className="App">
      <Nav/>
      <div className="section-2">
        <div className="container">
          <div className="fake-browser">
          <Product />
          <Checkout />
          </div>
        </div>
      </div>
    </div>)
  }
}

export default App;
