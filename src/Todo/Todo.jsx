import React, { useState } from "react";
import Task from "./Task";

function Todo() {
  const [allTasks, setAllTasks] = useState([]);
  const [task, setTask] = useState({
    id: 1,
    data: "",
  });
  function addTask(data) {
    const newData = data;
    setAllTasks((prevAllTasks) => ({
      ...prevAllTasks,
      data: newData,
      id: prevAllTasks.length + 1,
    }));
  }
  function deleteTask() {}
  function editTask() {
    return <Task />;
  }
  return (
    <div className="h-screen w-full bg-[#343536]">
      <h1 className="w-screen">To Do</h1>
      <div className="">
        <button onClick={addTask}>Add Task</button>
        <button onClick={deleteTask}>Delete Task</button>
        <button onClick={editTask}>Edit Task</button>
      </div>
      <div>{allTasks}</div>
    </div>
  );
}

export default Todo;
