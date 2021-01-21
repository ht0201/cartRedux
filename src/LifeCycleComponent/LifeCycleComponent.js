import React, { Component } from "react";
import MountingAndUpdating from "./MountingAndUpdating";
import UnMounting from "./UnMounting";

export default class LifeCycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }

  render() {
    return (
      <div>
        <MountingAndUpdating />
        {this.state.isShow ? <UnMounting /> : null}
        <button
          className="btn btn-success"
          onClick={() => this.setState({ isShow: !this.state.isShow })}
        >
          Display / Hidden
        </button>
      </div>
    );
  }
}
