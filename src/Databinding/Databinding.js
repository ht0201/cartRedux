import React, { Component } from "react";

export default class Databinding extends Component {
  //thuoc tinh
  sinhVien = {
    ten: "A",
    lop: "FE53E",
    avatar: "https://picsum.photos/200",
  };

  //phuong thuc
  renderCardSv = (sv) => {
    return (
      <div>
        <ul>
          <li>Ten SV : {sv.ten}</li>
          <li>Anh SV : {sv.avatar}</li>
          <li>Lop Sv :{sv.lop}</li>
        </ul>
      </div>
    );
  };

  render() {
    // binding param
    const title = 123;

    // binding method
    const renderTitle = () => {
      // xu ly ...
      // noi dung tra ve co the la chuoi, so, the html (phai dc bao phu boi 1 the)
      return "renderTitle()";
    };

    const renderImg = () => {
      return (
        <div className="container">
          <img src="https://picsum.photos/200" alt="abc" />
        </div>
      );
    };
    return (
      <div className="container">
        {/* binding bien */}
        <p id="title"> {title} </p>

        {/* binding method */}
        <h1> {renderTitle()} </h1>

        {/* binding img cua html */}
        {renderImg()}

        {/* binding thuoc tinh cua class */}
        <div className="w-25 card">
          <div className="card-header"> {this.sinhVien.ten}</div>
          <div className="card-body">
            <img
              src={this.sinhVien.avatar}
              alt="img1"
              style={{ width: "100%" }}
            />
          </div>
          <div className="card-footer">{this.sinhVien.lop}</div>
        </div>

        {/* binding phuong thuc cua class */}
        {this.renderCardSv(this.sinhVien)}
      </div>
    );
  }
}
