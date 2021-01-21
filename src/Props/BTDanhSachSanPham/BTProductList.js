import React, { Component } from "react";
import SanPham from "../DemoProps/SanPham";
import BTProduct from "./BTProduct";
import Cart from "./Cart";

const mangSp = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: 'AMOLED, 6.2", Full HD+',
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },

  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },

  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class BTProductList extends Component {
  state = {
    // state : se chua data sp detail, khi user thao tac ta se thay doi gia tri nay
    gioHang: [
      // {
      //   maSP: 3,
      //   tenSP: "Iphone XS Max",
      //   hinhAnh: "./img/applephone.jpg",
      //   giaBan: 2000,
      //   soLuong: 5,
      // },
    ], // du lieu thong tin gio hang (chu giao dien va nut them gio hang)
    productDetail: {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  };

  renderSp = () => {
    return mangSp.map((objSp, index) => {
      return (
        <div className="col-4" key={index}>
          <BTProduct xemCT={this.xemChiTiet} sp={objSp} themGH={this.themGH} />
          {/* <button
            className="btn btn-success"
            onClick={() => {
              this.xemChiTiet(objSp);
            }}
          >
            Xem chi tiet
          </button> */}
        </div>
      );
    });
  };

  //cb func : ham dong vai tro la tham so truyen vao ham khac

  // ham lam thay doi giao dien
  xemChiTiet = (objSp) => {
    this.setState({
      productDetail: objSp,
    });
  };

  // method gio hang tai cpn chua state gio hang
  themGH = (spThemGH) => {
    console.log(spThemGH);

    // tu spCLick => tao ra sp gio hang co so luong
    const spGioHang = { ...spThemGH, soLuong: 1 };

    // kiem tra sp them co trong gioHang chua
    let spGHTimKiem = this.state.gioHang.find(
      (sp) => sp.maSP === spThemGH.maSP
    );

    if (spGHTimKiem) {
      spGHTimKiem.soLuong += 1;
    } else {
      // lay gio hang hien tai them vao sp do
      this.state.gioHang.push(spGioHang);
    }

    // cap nhat state gio hang sau khi them sp dc click
    this.setState({
      gioHang: this.state.gioHang,
    });
    //setState thay doi gio hang
  };

  // method xoa rowGH
  xoaGH = (maSPXoa) => {
    console.log(maSPXoa);
    // tim sp co maSP xoa
    // let index = this.state.gioHang.find((sp) => sp.maSP === maSPXoa);
    // if (index !== -1) {
    //   this.state.gioHang.splice(index, 1);
    // }

    // // update lai gio hang
    // this.setState({
    //   gioHang: this.state.gioHang,
    // });

    // cach 2 : filter, loc thanh mang ko chua spXoa
    this.setState({
      gioHang: this.state.gioHang.filter((sp) => sp.maSP !== maSPXoa),
    });
  };

  // button giam sl
  tangGiamSL = (maSP, tangGiam) => {
    //tangGiam=true la tang, tangGiam=false la giam
    console.log(maSP, tangGiam);
    let spGioHang = this.state.gioHang.find((sp) => sp.maSP === maSP);
    if (spGioHang) {
      if (tangGiam) {
        spGioHang.soLuong += 1;
      } else {
        if (spGioHang.soLuong > 1) {
          spGioHang.soLuong -= 1;
        } else if (spGioHang.soLuong < 1) {
          this.state.gioHang.splice(spGioHang, 1);
          this.setState({
            gioHang: this.state.gioHang,
          });
        }
      }
    }

    //setState gio hang => render lai giao dien
    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  render() {
    let {
      hinhAnh,
      maSP,
      tenSP,
      giaBan,
      ram,
      rom,
      manHinh,
      cameraSau,
      cameraTruoc,
      heDieuHanh,
    } = this.state.productDetail;
    return (
      <div className="container">
        <h3 className="text-center">Danh sach san pham</h3>

        <div className="row">
          <div className="col-12 text-right">
            <span
              style={{ cursor: "pointer" }}
              data-toggle="modal"
              data-target="#modelId"
            >
              Gio hang (
              {this.state.gioHang
                .reduce((tongSL, sp, index) => {
                  return (tongSL += sp.soLuong);
                }, 0)
                .toLocaleString()}
              )
            </span>
          </div>
          <Cart
            gioHang={this.state.gioHang}
            xoaGH={this.xoaGH}
            tangGiamSL={this.tangGiamSL}
          />
        </div>

        <div className="row">{this.renderSp()}</div>

        <div className="mt-5">
          <div className="row">
            <div className="col-4">
              <h3 className="text-center">{tenSP}</h3>
              <img src={hinhAnh} height="350" alt="acsa" />
            </div>
            <div className="col-8">
              <h3>Thong so ky thuat</h3>
              <table className="table">
                <thead>
                  <tr>
                    <td>Man hinh</td>
                    <td>{manHinh}</td>
                  </tr>
                  <tr>
                    <td>He dieu hanh</td>
                    <td>{heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera truoc</td>
                    <td>{cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{cameraSau}</td>
                  </tr>
                  <tr>
                    <td>Ram</td>
                    <td>{ram}</td>
                  </tr>
                  <tr>
                    <td>Rom</td>
                    <td>{rom}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
