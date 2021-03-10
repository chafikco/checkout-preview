import React from 'react';

class Product extends React.Component {
  render() {
    return (<div className="purchase-page">
            <h2 className="product-heading">Fantastic Product</h2>
            <div>One-time Purchase of the best software product on the market!</div>
            <div className="price">$45</div>
          </div>)
  }
}

export default Product;
