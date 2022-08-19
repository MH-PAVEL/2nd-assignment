import { createStore } from "redux";
import addProductReducer from "./addProduct/addProductReducer";

const store = createStore(addProductReducer);

export default store;
