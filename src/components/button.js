const Button = ({ task, text, dispatch }) => {
  const executeTask = (task) => {
    if (task === "increment") {
      dispatch({ type: "increment" });
    } else if (task === "decrement") {
      dispatch({ type: "decrement" });
    }
  };

  return (
    <div>
      <button onClick={() => executeTask(task)}>{text}</button>
    </div>
  );
};
export default Button;
