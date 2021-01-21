import { combineReducers, createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import BTGameXucXacReducer from "./reducers/BTGameXucXacReducer";

// noi quan ly tap trung toan bo state cua ung dung
const rootReducer = combineReducers({
  cartReducer,
  BTGameXucXacReducer,
});

const store = createStore(
  rootReducer,

  // setup cho redux dev tool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
