import { applyMiddleware, createStore } from 'redux';
import addProductReducer from './addProduct/addProductReducer';

const validation = (store) => (next) => (action) => {
  const itemsStore = store.getState();
  
};

const store = createStore(addProductReducer, applyMiddleware(validation));

export default store;
