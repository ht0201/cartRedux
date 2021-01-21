import React, { Component } from "react";

export default class BTProduct extends Component {
  //doi voi react class component this.props : la thuoc tinh nhan gia tri tu component cha truyen vao va ko the gan lai

  render() {
    const { tenSP, hinhAnh, giaBan } = this.props.sp;
    return (
      <div>
        <div className="card text-white bg-primary">
          <img
            className="card-img-top"
            src={hinhAnh}
            alt="sd"
            style={{ height: "400px", width: "100%" }}
          />
          <div className="card-body">
            <h4 className="card-title">{tenSP}</h4>
            <p className="card-text">{giaBan}</p>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.xemCT(this.props.sp);
              }}
            >
              Xem chi tiet
            </button>
            {/* nhan props la ham them gio hang tu cpn cha truyen vao */}
            <button
              className="btn btn-danger"
              onClick={() => this.props.themGH(this.props.sp)}
            >
              Them gio hang
            </button>
          </div>
        </div>
      </div>
    );
  }
}
