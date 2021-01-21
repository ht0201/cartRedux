import "./App.css";
// import FunctionComponent from "./Component/FunctionComponent";
// import ClassComponent from "./Component/ClassComponent";
// import TagSanPham from "./Component/TagSanPham";
import BaiTapLayout from "./Component/BaiTapLayout/BaiTapLayout";
import DemoStyle from "./Component/DemoStyle";
import Databinding from "./Databinding/Databinding";
import EventBinding from "./EventBinding/EventBinding";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapChonXe from "./State/BaiTapChonXe";
import DemoState from "./State/DemoState";
import DemoProps from "./Props/DemoProps/DemoProps";
import BTProductList from "./Props/BTDanhSachSanPham/BTProductList";
import Shop from "./Redux/CartRedux/Shop";
import BTGameXucXac from "./Redux/BTGameXucXac/BTGameXucXac";
import LifeCycleComponent from "./LifeCycleComponent/LifeCycleComponent";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <DemoStyle />
      <p className="pTextGreen"> App </p> */}
      {/* <Databinding /> */}
      {/* <EventBinding /> */}
      {/* <DemoState /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <DemoProps /> */}
      {/* <BTProductList /> */}
      <Shop />
      {/* <BTGameXucXac /> */}
      {/* <LifeCycleComponent /> */}
    </div>
  );
}

export default App;
