import React, { Component } from "react";
import KetQua from "./KetQua";
import XucXac from "./XucXac";
import styleXX from "./BTGameXucXac.module.css";
import { connect } from "react-redux";

class BTGameXucXac extends Component {
  render() {
    return (
      <div
        //   style={{
        //     backgroundImage: "url(./imgGame/bgGame.png)",
        //     position: "fixed",
        //     width: "100%",
        //     height: "100%",
        //     top: 0,
        //     left: 0,
        //   }}
        className={` ${styleXX["bg-Game"]} text-center`}
      >
        <h1 className="text-center">BAI TAP GAME XUC XAC</h1>
        <XucXac />
        <KetQua />
        <button className="btn btn-success">
          <div
            className="p-2 display-4"
            onClick={() => {
              this.props.playGame();
            }}
          >
            {" "}
            PLAY GAME
          </div>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      // tao ra action dua data len redux
      // c1 tao ra arr random xuc xac  => dua len redux xu ly
      // c2 dua su kien len redux, sau do xu ly random
      const action = {
        type: "PLAY_GAME",
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(BTGameXucXac);
