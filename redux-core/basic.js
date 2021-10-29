import { createStore } from 'redux';

console.log('redux-core/basic.js');

const incBtn = document.getElementById('inc');
const decBtn = document.getElementById('dec');
const counter = document.getElementById('counter');

incBtn.addEventListener('click', () => {
  console.log('Increase');
  store.dispatch({ type: 'counter/inc' });
});

decBtn.addEventListener('click', () => {
  console.log('Decrease');
  store.dispatch({ type: 'counter/dec' });
});

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/inc':
      return { value: state.value + 1 };
    case 'counter/dec':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

store.subscribe(() => (counter.innerHTML = store.getState().value));
