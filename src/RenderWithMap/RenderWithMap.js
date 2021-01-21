import React, { Component } from "react";

const mangSv = [
  {
    ma: 1,
    ten: "Nguyen A",
    avatar: "https://picsum.photos/50",
  },
  {
    ma: 2,
    ten: "Nguyen B",
    avatar: "https://picsum.photos/50",
  },
  {
    ma: 3,
    ten: "Nguyen C",
    avatar: "https://picsum.photos/50",
  },
];

export default class RenderWithMap extends Component {
  renderTable = () => {
    //  const mangTrSv = [];
    //  for (let index = 0; index < mangSv.length; index++) {
    //    let sv = mangSv[index];

    //    // tao ra the jsx TR sinh vien
    //    let jsxTr = (
    //      <tr key={index}>
    //        <td> {sv.ma} </td>
    //        <td> {sv.ten} </td>
    //        <td>
    //          <img src={sv.avatar} alt="avc" />
    //        </td>
    //      </tr>
    //    );

    //    // push doi tuong vao mang
    //    mangTrSv.push(jsxTr);
    //  }

    // Map, Reduce : mang nay thanh mang khac

    const mangTrSv = mangSv.map((sv, index) => {
      return (
        <tr key={index}>
          <td> {sv.ma} </td>
          <td> {sv.ten} </td>
          <td>
            <img src={sv.avatar} alt="ex" />
          </td>
        </tr>
      );
    });

    return mangTrSv;
  };
  render() {
    // return chi cho phep render mang [<div key={1}>1</div>, <div key={2}>2</div>] or obj <div></div>
    return (
      <div className="table">
        <table className="table">
          <thead>
            <tr>
              <th> MA </th>
              <th> TEN </th>
              <th> AVATAR </th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
