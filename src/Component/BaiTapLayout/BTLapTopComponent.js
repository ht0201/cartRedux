import React, { Component } from "react";

export default class BTLapTopComponent extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="card bg-light" style={{ width: 300 }}>
            <img
              className="card-img-top"
              src="./img/lt_macbook.png"
              alt="abc"
              style={{ maxWidth: "100%", height: 250 }}
            />
            <div className="card-body text-center">
              <h4 className="card-title text-center">MACBOOK</h4>
              <p className="card-text">
                The MacBook is a brand of notebook computers manufactured by
                Apple Inc
              </p>
              <a href="abc" className="btn btn-primary">
                Detail
              </a>
              <a href="acb" className="btn btn-danger">
                Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
