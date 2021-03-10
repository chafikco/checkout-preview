import React from 'react';
import Product from './Product';
import Checkout from './Checkout';
import Nav from './Nav';

class App extends React.Component {
  render() {
    return (<div className="Demo">
      <Nav/>
      <div className="FakeBrowser">
        <Product/>
        <Checkout/>
      </div>
    </div>)
  }
}

export default App;
