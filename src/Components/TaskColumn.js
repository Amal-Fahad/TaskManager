import React from "react";
import TaskHeader from "./TaskHeader";
import TaskItem from "./TaskItem";
import { useSelector, useDispatch } from "react-redux";
import { taskMove } from "../Redux/Slice/TaskSlice";

function TaskColumn({ index, itemData }) {
  const { statusArray } = useSelector((state) => state.Task);

  const dispatch = useDispatch();

  const taskMoveHandler = (_id, _index) => {
    dispatch(taskMove({ _id, _index }));
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
