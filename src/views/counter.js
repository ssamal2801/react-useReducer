import "./counter.scss";
import Button from "../components/button";
import { useReducer, useState } from "react";
const Counter = (props) => {
  const [state, dispatch] = useReducer(reducer);
  return (
    <div className="counterWrapper">
      <span>{count}</span>
      <div className="buttonGroup">
        <Button text={"increment"} task={"increment"}></Button>
        <Button text={"decrement"} task={"decrement"}></Button>
      </div>
    </div>
  );
};

export default Counter;
