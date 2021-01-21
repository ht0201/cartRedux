import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <button className="btn btn-success">
              <div
                className="display-4 p-5"
                onClick={() => {
                  this.props.datCuoc(true);
                }}
              >
                {" "}
                TAI
              </div>
            </button>
          </div>
          <div className="col-6 text-center">
            {this.props.xucXac.map((xx, index) => {
              return (
                <img
                  key={index}
                  src={xx.hinhAnh}
                  width="50"
                  height="50"
                  alt={xx.hinhAnh}
                />
              );
            })}
            {/* <img
              src={this.props.xucXac[5].hinhAnh}
              alt="1"
              width="50"
              height="50"
            />
            <img
              src={this.props.xucXac[2].hinhAnh}
              width="50"
              height="50"
              alt="2"
            />
            <img
              src={this.props.xucXac[3].hinhAnh}
              alt="3"
              width="50"
              height="50"
            /> */}
          </div>
          <div className="col-3">
            <button className="btn btn-success">
              <div
                className="display-4 p-5"
                onClick={() => {
                  this.props.datCuoc(false);
                }}
              >
                {" "}
                XIU
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    xucXac: state.BTGameXucXacReducer.arrXucXac,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (datCuoc) => {
      const action = {
        type: "DAT_CUOC",
        datCuoc,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
