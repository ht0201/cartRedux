import React, { Component } from "react";
import { connect } from "react-redux";

class Product extends Component {
  render() {
    const { id, name, image, price } = this.props.prod;
    const { prod, addToCart } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={image} alt="acf" height="400" />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{price.toLocaleString()}</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => addToCart({ ...prod, quantity: 1 })}
        >
          Add to cart
        </button>
      </div>
    );
  }
}

// tao ra method va chuyen no thanh props cua cpn de dispatch len reducer
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      // action la 1 obj gom type de reducer nhan dien, payload nhan vao du lieu day len reducer
      const action = {
        type: "ADD_TO_CART",
        payload: product,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Product);
