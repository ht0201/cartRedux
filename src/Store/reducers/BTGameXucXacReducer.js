const stateDefault = {
  arrXucXac: [
    { hinhAnh: `./imgGame/1.png`, diem: 1 },
    { hinhAnh: `./imgGame/2.png`, diem: 2 },
    { hinhAnh: `./imgGame/3.png`, diem: 3 },
    //  { hinhAnh: `./imgGame/4.png`, diem: 4 },
    //  { hinhAnh: `./imgGame/5.png`, diem: 5 },
    //  { hinhAnh: `./imgGame/6.png`, diem: 6 },
  ],
  soBanThang: 5,
  tongSoBanChoi: 3,
  banChon: true, // mac dinh true la tai, false xiu
};

const BTGameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "PLAY_GAME": {
      const arrXucXacNgauNhien = [];
      for (let i = 1; i <= 3; i++) {
        // tao ra so random
        const soRanDom = Math.floor(Math.random() * 6) + 1;

        // tu so' random tao ra obj xuc xac random
        const xxRanDom = {
          diem: soRanDom,
          hinhAnh: `./imgGame/${soRanDom}.png`,
        };

        // dua xuc xac random vao arrRanDom
        arrXucXacNgauNhien.push(xxRanDom);
      }

      // update lai state
      state.arrXucXac = arrXucXacNgauNhien;

      // update so ban choi
      state.tongSoBanChoi += 1;

      // tong diem ngau nhien
      const tongDiem = arrXucXacNgauNhien.reduce((tongDiem, xxNN, index) => {
        return (tongDiem += xxNN.diem);
      }, 0);

      // update so ban thang
      if (
        (state.banChon && tongDiem > 10) ||
        (!state.banChon && tongDiem <= 10)
      ) {
        state.soBanThang += 1;
      }
      return { ...state };
    }

    case "DAT_CUOC": {
      state.banChon = action.datCuoc;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default BTGameXucXacReducer;
