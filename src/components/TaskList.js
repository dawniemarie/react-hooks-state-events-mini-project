import React from 'react';
import Task from './Task';

function TaskList({tasks, handleRemove}) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.text} text={task.text} category={task.category} handleRemove={handleRemove}/>
      ))}
    </div>
  );
}

export default TaskList;
