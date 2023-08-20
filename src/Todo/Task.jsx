import React from "react";

function Task(props) {
  return (
    <div className=" h-auto w-auto px-2 py-1 ">New task+{props.task.id}</div>
  );
}

export default Task;
