import React from "react";

export default function TagSanPham() {
  return (
    //  <div classname="card w-25">
    //    <div classname="card-header bg-dark text-white">Iphone</div>
    //    <div classname="card-body">
    //      <img src="https://picsum.photos/200/300" alt="img" />
    //    </div>
    //    <div classname="card-footer">
    //      <div classname="text-right">10.000.000</div>
    //    </div>
    //  </div>
    <div className="card text-white bg-primary w-25">
      <img
        className="card-img-top"
        src="https://picsum.photos/200/200"
        alt="img"
      />
      <div className="card-body">
        <h4 className="card-title">IP11</h4>
        <p className="card-text">10.000.000</p>
      </div>
    </div>
  );
}
