import React, { Component } from "react";
import BTLapTopComponent from "./BTLapTopComponent";
import BTProductComponent from "./BTProductComponent";

export default class BTProductListComponent extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark pt-5 pb-5">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">
          <div className="col-3">
            <BTProductComponent />
          </div>
          <div className="col-3">
            <BTProductComponent />
          </div>
          <div className="col-3">
            <BTProductComponent />
          </div>
          <div className="col-3">
            <BTProductComponent />
          </div>
        </div>
      </div>
    );
  }
}
