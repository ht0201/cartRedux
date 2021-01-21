import React, { Component } from "react";
import SanPham from "./SanPham";

const mangSp = [
  {
    ma: 1,
    tenSp: "IP 12",
    gia: 2000,
    hinhAnh: "./img/sp_iphoneX.png",
  },
  {
    ma: 2,
    tenSp: "SS note 7",
    gia: 2000,
    hinhAnh: "./img/sp_note7.png",
  },
  {
    ma: 3,
    tenSp: "Sony X8",
    gia: 4000,
    hinhAnh: "./img/sp_vivo850.png",
  },
];

export default class DemoProps extends Component {
  renderSp = () => {
    return mangSp.map((objSp, index) => {
      return (
        <div className="col-4" key={index}>
          {/* <SanPham tenSP={sp.tenSp} gia={sp.gia} hinhAnh={sp.hinhAnh} /> */}
          <SanPham sp={objSp} />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.renderSp()}
            {/* <div className="col-4">
              <SanPham
                tenSP="IP 12"
                gia="1000"
                hinhAnh="./img/sp_iphoneX.png"
              />
            </div>
            <div className="col-4">
              <SanPham
                tenSP="SS note 10"
                gia="2000"
                hinhAnh="./img/sp_note7.png"
              />
            </div>
            <div className="col-4">
              <SanPham
                tenSP="Sony X8"
                gia="4000"
                hinhAnh="./img/sp_vivo850.png"
              />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
