import React, { Component } from "react";

export default class MountingAndUpdating extends Component {
  /* 
      constructor :
      - chay khi cpn dc goi
      - Cong dung : ke thua props, khoi tao state...
   */
  constructor(props) {
    //  ke thua props
    super(props); // call super de ke thua lai cac props, method cua Component ReactJS
    this.state = {
      // khoi tao state trong constructor phai co this vi la class
      age: 0,
    };
    console.log("constructor");
  }

  /* 
      getDerivedStateFromProps
      - chay : sau constructor , chay o mounting va updating 
      - dung : de chuan bi du lieu cho bieu do                    
  */

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }

  /* 
      shouldComponentUpdate (co nen cap nhat lai cpn hay ko)
      - chay : 
      - dung :                
  */

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log(nextProps);
    console.log(nextState);

    if (nextState.age % 2 === 0) {
      return true; // chay xuong render
    } else return false; // dung chuong trinh
  }

  tangTuoi = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  /* 
      render : 
      - chay khi setState, props moi, forceUpdate()
      - tao react DOM : (ve giao dien)
   */

  render() {
    console.log("render");
    return (
      <div>
        <h1>Mounting And Updating</h1>
        <p>My age : {this.state.age}</p>
        <button
          className="btn btn-info"
          onClick={() => {
            this.tangTuoi();
          }}
        >
          Tang tuoi
        </button>
      </div>
    );
  }

  /* 
      getSnapshotBeforeUpdate :
      - chay : sau render, chay trong mounting va updating
      - dung : de luu lai 1 value
   */

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  /* 
      cpnDidUpdate :
      - chay : sau render va chay trong giai doan updating
      - dung : de call api
   */

  componentDidUpdate() {
    console.log("didUpdate");
  }

  /* 
      cpnDidMount :
      - chay sau render
      - dung de call api
   */

  componentDidMount() {
    console.log("didmount");
  }
}
