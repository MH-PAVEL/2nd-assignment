import { DECREMENT, INCREMENET } from './actionTypes';

const initialState = [
  { id: 1, Pname: 'Asus Vivobook X515MA', price: 35500, stock: 20, qty: 0 },
  { id: 2, Pname: 'Dell E1916HV 18.5 Inch', price: 9300, stock: 10, qty: 0 },
  { id: 3, Pname: 'Canon Eos 4000D 18MP', price: 36500, stock: 30, qty: 0 },
];

const addProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENET:
      let copyOfStateForIncrease = [...state];
      let modifiedStateAfterIncrement = copyOfStateForIncrease.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            qty: item.qty + 1,
            stock: item.stock - 1,
          };
        } else {
          return item;
        }
      });
      return modifiedStateAfterIncrement;

    case DECREMENT:
      let copyOfStateForDecrease = [...state];
      let modifiedStateAfterDecrement = copyOfStateForDecrease.map((item) => {
        if (item.id === action.payload.id && item.qty > 0) {
          return {
            ...item,
            qty: item.qty - 1,
            stock: item.stock + 1,
          };
        } else {
          return item;
        }
      });
      return modifiedStateAfterDecrement;
    default:
      return state;
  }
};

export default addProductReducer;
