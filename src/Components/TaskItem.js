import React from "react";
import { useSelector } from "react-redux";

function TaskItem({ title, id, index, description, taskMoveHandler }) {
  const { statusArray } = useSelector((state) => state.Task);

  console.log("statusArray", statusArray);

  return (
    <div className="taskItem">
      <div className="itemHeader">
        <h3>{title}</h3>
        {index < statusArray.length - 1 && (
          <button
            className="taskMover"
            onClick={() => taskMoveHandler(id, index)}
          >
            <h4>Move</h4>
          </button>
        )}
      </div>
      <p>{description}</p>
    </div>
  );
}

export default TaskItem;
