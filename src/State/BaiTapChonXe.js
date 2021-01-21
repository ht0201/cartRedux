import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  //state chua gia tri thay doi tren giao dien khi user thao tac
  state = {
    imgSrc: "./img/imgCar/imgBlackCar.jpg", // gia tri khoi tao ban dau
  };

  changeColor = (color) => {
    this.setState({
      imgSrc: `./img/imgCar/img${color}Car.jpg`,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center display-4">Bai tap chon mau xe</h1>
        <div className="row">
          <div className="col-6">
            <img src={this.state.imgSrc} alt="car" style={{ width: "100%" }} />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-4">
                <button
                  onClick={() => {
                    this.changeColor("Red");
                    //   this.setState({
                    //     imgSrc: "./img/imgCar/imgRedCar.jpg",
                    //   });
                  }}
                  style={{
                    backgroundColor: "red",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Red Color
                </button>
              </div>
              <div className="col-4">
                <button
                  onClick={() => {
                    this.changeColor("Silver");
                    //   this.setState({
                    //     imgSrc: "./img/imgCar/imgSilverCar.jpg",
                    //   });
                  }}
                  style={{
                    backgroundColor: "silver",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Silver Color
                </button>
              </div>
              <div className="col-4">
                <button
                  onClick={() => {
                    this.changeColor("Black");
                    //   this.setState({
                    //     imgSrc: "./img/imgCar/imgBlackCar.jpg",
                    //   });
                  }}
                  style={{
                    backgroundColor: "black",
                    border: "none",
                    borderRadius: "4px",
                    color: "white",
                  }}
                >
                  Black Color
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
