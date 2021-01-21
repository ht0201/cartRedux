import React, { Component } from "react";

export default class UnMounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>UnMounting</h1>
        <p>Bo dem : {this.state.counter}</p>
      </div>
    );
  }

  componentDidMount() {
    // setTimeOut thuc hien 1 lan
    this.clearCounter = setInterval(() => {
      // khi cpn UnMounting xoa khoi DOM, thi setInterVal van chay, bao loi
      // thuc hien nhieu lan
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);
  }

  /* 
   componentWillUnmount : 
   - chay : khi cpn bi xoa khoi cay DOM cua react
   - dung de : don dep nhung gi ma cpnDidMount bay ra 
  */

  componentWillUnmount() {
    console.log("willUnMount");
    clearInterval(this.clearCounter); // method clearInterval(tenbien) xoa cpn bay ra
  }
}
