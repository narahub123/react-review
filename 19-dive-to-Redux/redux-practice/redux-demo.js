const redux = require("redux"); // import redux

// create reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1, // refering to the existing state and accessing the old counter value and output new state
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1, // refering to the existing state and accessing the old counter value and output new state
    };
  }
  return state;
};

// create store
const store = redux.createStore(counterReducer);

// console.log(store.getState());

// subscription
const couterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(couterSubscriber);

// dispatch action
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
