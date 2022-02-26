import { productReducer } from "./reducers/productReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default createStore(
  productReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
