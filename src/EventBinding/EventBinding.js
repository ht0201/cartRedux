import React, { Component } from "react";

export default class EventBinding extends Component {
  // tao thuoc tinh dc gan tu 1 ham
  handleClick = (name) => {
    //code xu ly click
    alert(name);
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            // goi method xu ly khi user click, click moi thuc thi, ko thi ko thuc thi
            this.handleClick("hello");
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

// class sinhVien {
//   ma = 1; // public
//   #lop = 2; // private
// }
