import { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  let [text, setText] = useState("") // Set state for task text field when creating new task
  let [category, setCategory] = useState("") // Set state for dropdown category when creating new task
  const newCategories = categories.filter((category) => category !== "All"); // Filtered and not showing "All" under Category dropdown 

  function handleText(event) {
    setText(event.target.value)
  }

  function handleCategory(event) {
    setCategory(event.target.value)
  }


  function handleOnTaskFormSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit( {
      text: text,
      category: category
    })
  }
  

  return ( 
    <form onSubmit={handleOnTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleText} /> 
      </label>
      <label> 
        Category
        <select name="category" onChange={handleCategory}>
          {newCategories.map((category) => <option key={category}>{category}</option>)} 
        </select>
      </label> 
      <input type="submit" value="Add task" />
    </form> // Returning filtered Categories ('newCategories') using .map in the option field
  );
}

export default NewTaskForm;
