import React from "react";

function Task({text, category, handleRemove}) {
  function remove() {
    handleRemove(text)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={remove}>X</button>
    </div>
  );
}

export default Task;
