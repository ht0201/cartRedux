import React, { Component } from "react";
import BTCarousel from "./BTCarousel";
import BTFooterComponent from "./BTFooterComponent";
import BTHeader from "./BTHeader";
import BTProductListComponent from "./BTProductListComponent";

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div>
        <BTHeader />
        <BTCarousel />
        <BTProductListComponent />
        <BTFooterComponent />
      </div>
    );
  }
}
