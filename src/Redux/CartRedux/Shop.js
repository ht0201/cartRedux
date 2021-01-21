import React, { Component } from "react";
import CartModel from "./CartModel";
import ListProduct from "./ListProduct";
import { connect } from "react-redux";

class Shop extends Component {
  render() {
    console.log(this.props.gioHang);
    return (
      <div className="container text-right">
        <span className="my-5" data-toggle="modal" data-target="#modelId">
          Cart (
          {this.props.gioHang
            .reduce((tongSL, sp, index) => {
              return (tongSL += sp.quantity);
            }, 0)
            .toLocaleString()}
          )
        </span>
        <ListProduct />
        <CartModel />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.cartReducer.cart,
  };
};

export default connect(mapStateToProps, null)(Shop);
