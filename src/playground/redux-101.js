import { createStore } from 'redux';

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducer
// 1. Reducers are pure functions - output only dependent on fn input
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
  switch(action.type) {

    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    
    case 'DECREMENT':
      return {
        count: state.count - (action.decrementBy || 1) 
      };
    
    case 'RESET':
      return {
        count: 0
      };
    
    case 'SET': 
      return {
        count: action.count
      };

    default:
      return state;
  }
};

// store
const store = createStore(countReducer);

// called every time store is changes
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// Actions - object that gets sent to store

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 100 }));

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
// unsubcribes from the notified change
//unsubscribe();
