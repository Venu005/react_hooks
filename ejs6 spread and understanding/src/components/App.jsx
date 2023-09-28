import React, { useState } from "react";

function App() {
  const [text, setText] = useState();
  
  const [tasks, setTasks] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setText(newValue);
  }
  function handleClick() {
    //const { name, value } = event.target;
     setTasks(preValue=>{
       return [...preValue,text]
     })
    setText("");
    //event.preventDefault();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form" >
        <input
          type="text"
          onChange={handleChange}
          //name="task"
          value={text}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
