import { createStore } from 'redux';

const reducer = (state, action) => {
  return action ? { ...state, number: action.number } : store;
};

export const store = createStore(reducer, { number: 5, items: [] });

console.log('store1', store.getState());

store.dispatch({ number: 10, type: 'asd' });

console.log('store2', store.getState());
