const Button = ({ task, text, dispatch }) => {
  const executeTask = (task) => {
    if (task === "increment") {
      alert("i");
    } else if (task === "decrement") {
      alert("d");
    }
  };

  return (
    <div>
      <button onClick={() => executeTask(task)}>{text}</button>
    </div>
  );
};
export default Button;
