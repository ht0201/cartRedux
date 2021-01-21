import React, { Component } from "react";
// c1 : import css anh huong toan ung dung
// import "./style.css";

// c2 : import module css : pham vi anh huong chi trong file DemoStyle
import styleDemo from "./DemoStyles.module.css";

export default class DemoStyle extends Component {
  render() {
    return (
      <div>
        <p className="pTextRed">Cyber</p>

        {/* text viet lien, obj.props */}
        <p className={styleDemo.pTextGreen}>FE53 </p>

        {/* text co dau dac biet */}
        <p className={styleDemo["pText-Orange"]}>FE53 1 </p>

        {/* nhieu thuoc tinh */}
        <p className={`text-center ${styleDemo["pText-Green"]}`}>FE53 2 </p>

        {/* pham vi anh huong tren the  */}
        <p
          style={{
            backgroundColor: "#000",
            color: "yellow",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Internal Tag
        </p>
      </div>
    );
  }
}
