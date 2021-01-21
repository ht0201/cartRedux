import React, { Component } from "react";

export default class Cart extends Component {
  renderGioHang = () => {
    // nhan props tu cpm cha truyen vao

    //kiem tra cpm co props do ko : this.props.gioHang?.length

    return this.props.gioHang?.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>{spGH.tenSP}</td>
          <td>
            <img src={spGH.hinhAnh} width="50" height="50" alt="ca" />
          </td>
          <td>
            <button
              className="btn btn-info"
              onClick={() => this.props.tangGiamSL(spGH.maSP, true)}
            >
              +
            </button>
            {spGH.soLuong}
            <button
              className="btn btn-info"
              onClick={() => this.props.tangGiamSL(spGH.maSP, false)}
            >
              -
            </button>
          </td>
          <td>{spGH.giaBan.toLocaleString()}</td>
          <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.xoaGH(spGH.maSP)}
            >
              Xoa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      //  let {} = this.props.gioHang; // truyen props : tu PList sang Cart
      <div>
        <div>
          {/* Modal */}
          <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Gio hang</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table>
                    <thead>
                      <tr>
                        <th style={{ width: "14%" }}>Ma sp</th>
                        <th style={{ width: "17%" }}>Ten sp</th>
                        <th style={{ width: "17%" }}>Hinh anh</th>
                        <th style={{ width: "17%" }}>So luong</th>
                        <th style={{ width: "17%" }}>Gia ban</th>
                        <th style={{ width: "17%" }}>Thanh tien</th>
                        <th style={{ width: "17%" }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.renderGioHang()}
                      {/* <tr>
                        <td>1</td>
                        <td>Iphone</td>
                        <td>
                          <img
                            src="./img/sp_iphoneX.png"
                            width="50"
                            height="50"
                            alt="imgX"
                          />
                        </td>
                        <td>1</td>
                        <td>2000</td>
                        <td>2000</td>

                        <td>
                          <button className="btn btn-danger"> Xoa </button>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
