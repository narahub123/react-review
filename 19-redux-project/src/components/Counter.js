import { useSelector, connect } from "react-redux";
// useSelector : allows us to automatically select a part of our state managed by the store
// connect : used as a wrapper around the class component to connect that class component to store
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter); // automatically set up a subscription to Redux store for the component

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
