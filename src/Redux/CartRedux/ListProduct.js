import React, { Component } from "react";
import Product from "./Product";
import productList from "./../../data/productList.json";
export default class ListProduct extends Component {
  renderProduct = () => {
    return productList.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <Product prod={item} />
        </div>
      );
    });
  };

  render() {
    return <div className="row">{this.renderProduct()}</div>;
  }
}
