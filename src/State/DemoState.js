import React, { Component } from "react";

export default class DemoState extends Component {
  // thuoc tinh State :
  // 1. chua cac gia tri thay doi khi user thao tac event.
  // 2. la thuoc tinh co san cua React Class Component
  state = {
    isLogin: false,
  };

  //   isLogin = false; // true da login, false chua login
  userName = "cybersoft";

  // phuong thuc kiem tra renderLogin
  renderLogin = () => {
    if (this.state.isLogin) {
      return (
        <a href="a2222" className="nav-link">
          Hello {this.userName}
        </a>
      );
    }
    return (
      <button
        onClick={() => {
          // khi click vao button se goi ham handleLogin
          this.handleLogin();
        }}
        className="nav-link bg-dark text-white"
      >
        Dang nhap
      </button>
    );
  };

  // ham se thuc thi khi user click vao dang nhap
  handleLogin = () => {
    //  this.state.isLogin = true;    // ko dc set gia tri truc tiep cho state

    // method this.setState() : method co san cua lop Component dung de gan lai gia tri moi cho state, dong thoi render lai giao dien

    //  let newState = {
    //    isLogin: true,
    //  };

    // Tham so 1 : la state voi gia tri moi
    // tham so 2 : la ham thuc thi sau khi setState xu ly xong
    // setState la phuong thuc bat dong bo, khi no chay, dong thoi chay nhung thang ben duoi

    // this.setState(newState, () => {}) : this.setState nhan vao obj la state moi, set xong thuc thi cb
    this.setState({ isLogin: true }, () => {
      // ham thuc thi kiem tra lai State sau khi setState thuc hien xong
      console.log("isLogin ", this.state.isLogin);
    });

    //  this.render(); // chi render 1 lan, nen use state thay doi, render lai
  };

  render() {
    return (
      <div className="container-fluid">
        <nav
          className="navbar navbar-expand-sm navbar-dark"
          style={{ backgroundColor: "navy" }}
        >
          <a className="navbar-brand" href="acb">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="acb">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">{this.renderLogin()}</li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
