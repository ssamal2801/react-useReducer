import "./counter.scss";
import Button from "../components/button";
import { useReducer } from "react";

//manage actions in this function
const reducer = (state, actions) => {
  switch (actions.type) {
    case "increment":
      return { count: state.count++ };
    case "decrement":
      return { count: state.count-- };
    default:
      return state;
  }
};

//Counter component
const Counter = () => {
  //useReducer variable
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="counterWrapper">
      <span>{state.count}</span>
      <div className="buttonGroup">
        <Button
          text={"increment"}
          task={"increment"}
          dispatch={dispatch}
        ></Button>
        <Button
          text={"decrement"}
          task={"decrement"}
          dispatch={dispatch}
        ></Button>
      </div>
    </div>
  );
};

export default Counter;
