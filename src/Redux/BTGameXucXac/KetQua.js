import React, { Component } from "react";
import { connect } from "react-redux";

class KetQua extends Component {
  render() {
    const { soBanThang, tongSoBanChoi, banChon } = this.props;
    return (
      <div className="container text-center">
        <div className="display-4">
          Ban chon :
          <span className="text-warning display-4">
            {" "}
            {banChon === true ? "TAI" : "XIU"}
          </span>
        </div>
        <div className="display-4">
          So ban thang :
          <span className="text-success display-4"> {soBanThang}</span>
        </div>
        <div className="display-4">
          Tong so ban choi :
          <span className="text-primary display-4"> {tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    soBanThang: state.BTGameXucXacReducer.soBanThang,
    tongSoBanChoi: state.BTGameXucXacReducer.tongSoBanChoi,
    banChon: state.BTGameXucXacReducer.banChon,
  };
};

export default connect(mapStateToProps, null)(KetQua);
