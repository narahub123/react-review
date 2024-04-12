import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  // reducer: { counter: counterSlice.reducer }, // when there are  multiple reducers
  reducer: counterSlice.reducer,
});

// action creator
// return action boejct {type: 'same auto-generated unique identifier'}
// counterSlice.actions.toggleCounter
export const counterActions = counterSlice.actions;

export default store;
