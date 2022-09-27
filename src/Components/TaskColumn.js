import React from "react";
import TaskHeader from "./TaskHeader";
import TaskItem from "./TaskItem";
import { useTaskContext } from "../hooks/useTaskContext";

function TaskColumn({ index, itemData }) {
  const {
    state: { statusArray },
    dispatch,
  } = useTaskContext();

  const taskMoveHandler = (_id, _index) => {
    dispatch({
      type: "TASKMOVE",
      payload: { _id, _index },
    });
  };

  return (
    <div className="taskColumn">
      <TaskHeader status={statusArray[index]} count={itemData.length} />
      <div className="taskList">
        {itemData?.map((item) => {
          return (
            <TaskItem
              key={item.id}
              index={index}
              taskMoveHandler={taskMoveHandler}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TaskColumn;
