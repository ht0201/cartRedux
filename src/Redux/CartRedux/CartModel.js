import React, { Component } from "react";
import { connect } from "react-redux";

class CartModel extends Component {
  renderCart = () => {
    const { id, name, image, price, quantity } = this.props.cart;
    return this.props.cart.map((item, index) => {
      return (
        <tr key={index}>
          <td> {item.id} </td>
          <td> {item.name} </td>
          <td>
            <img src={item.image} height="100" alt="img" />
          </td>
          <td>{item.price.toLocaleString()}</td>
          <td>
            <button onClick={() => this.props.tangGiamSL(item.id, true)}>
              +
            </button>
            {item.quantity}
            <button onClick={() => this.props.tangGiamSL(item.id, false)}>
              -
            </button>
          </td>
          <td> {(item.price * item.quantity).toLocaleString()} </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGH(item.id);
              }}
            >
              Xoa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    console.log(this.props);
    console.log();
    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade "
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Gio hang</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table>
                  <thead>
                    <tr>
                      <th style={{ width: "200px" }}>ID</th>
                      <th style={{ width: "200px" }}>Name</th>
                      <th style={{ width: "200px" }}>Image</th>
                      <th style={{ width: "200px" }}>Price</th>
                      <th style={{ width: "200px" }}>Quantity</th>
                      <th style={{ width: "200px" }}>Amount</th>
                      <th style={{ width: "200px" }}></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCart()}</tbody>
                  <tfoot>
                    <tr>
                      <th colSpan={4}></th>
                      <th>Tong tien</th>
                      <th>
                        {this.props.cart
                          .reduce((tongTien, sp, index) => {
                            return (tongTien += sp.quantity * sp.price);
                          }, 0)
                          .toLocaleString()}
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// bien state tu reducer thanh props cua cpn
const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGH: (maSP) => {
      // tao ra 1 onj gui len store

      const action = {
        type: "DELETE_ITEM", // thuoc tinh bat buoc de store xac dinh action
        maSP,
      };
      // dispatch la ham cua redux cung cap de dua data action len store
      dispatch(action);
      console.log(maSP);
    },

    tangGiamSL: (maSP, tangGiam) => {
      // tao 1 action dua data len reducer
      const action = {
        type: "CHANGE_QUANTITY",
        maSP,
        tangGiam,
      };
      // dung ham dispatch cua redux dua data len reducer (store)
      dispatch(action);
      console.log(maSP, tangGiam);
    },
  };
};

// ket noi react cpn voi redux store
export default connect(mapStateToProps, mapDispatchToProps)(CartModel);
