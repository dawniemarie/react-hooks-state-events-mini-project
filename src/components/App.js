import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [taskList, setTaskList] = useState(TASKS)
  const [categoryList, setCategoryList] = useState("All")
  const [categoryTasks, setCategoryTasks] = useState(taskList)


  function handleRemove(removedTask) {
    let tempList = taskList.filter(task => {
      if (task.text !== removedTask)
      return true
    })
    setTaskList(tempList)
  if (categoryList === "All") {
    setCategoryTasks(tempList)
  } else {
    let catFilter = tempList.filter(task => {
      if (task.category === categoryList)
      return true
    })
    setCategoryTasks(catFilter)
  }
}

function handleFilter(event) {
  setCategoryList(event.target.value)
  if (event.target.value == "All") {
    setCategoryTasks(taskList)
  } else {
    let categoryList = taskList.filter(task => {
      if (task.category === event.target.value)
      return true
    })
    setCategoryTasks(categoryList)
  }
}

const displayCategories = CATEGORIES.filter((category) => {
  if (categoryList === "All") {
    return true;
  } else {
    return category === categoryList
  }
})

function onTaskFormSubmit(newTask) {
  setTaskList([...taskList, newTask])
  if (categoryList == "All") {
    setCategoryTasks([...taskList, newTask])
  } else {
    let catFilter = [...taskList, newTask].filter(task => {
      if (task.category === categoryList)
        return true
    })
    setCategoryTasks(catFilter)
  }
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter handleFilter={handleFilter} categoryList={categoryList} categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList handleRemove={handleRemove} tasks={categoryTasks}/>
    </div>
  );
}
export default App;
