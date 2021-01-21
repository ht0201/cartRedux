import React from "react";

// props la tham so nhan gia tri tu component cha truyen vao
export default function SanPham(props) {
  const { tenSp, hinhAnh, gia } = props.sp;
  return (
    <div>
      <div className="card text-white bg-primary">
        <img
          className="card-img-top"
          src={hinhAnh}
          alt="as"
          style={{ height: "400px", width: "100%" }}
        />
        <div className="card-body">
          <h4 className="card-title">{tenSp}</h4>
          <p className="card-text">{gia}</p>
        </div>
      </div>
    </div>
  );
}
