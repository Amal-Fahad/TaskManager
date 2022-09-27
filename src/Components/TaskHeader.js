import React from "react";

function TaskHeader({ status, count }) {
  return (
    <div className="taskHeader">
      <h2>{status.toUpperCase()}</h2>
      <div className={`taskCount ${status}`}>{count}</div>
    </div>
  );
}

export default TaskHeader;
