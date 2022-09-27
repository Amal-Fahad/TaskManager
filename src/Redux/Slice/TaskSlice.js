import data from "../../data.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data,
  statusArray: Object.keys(data),
};

export const TaskSlice = createSlice({
  name: "TASK",
  initialState,
  reducers: {
    taskMove: (state, action) => {
      let currentStatus = state.statusArray[action.payload._index];
      let targetStatus = state.statusArray[action.payload._index + 1];
      let clickedTask = state.data[currentStatus].find(
        (item) => item.id === action.payload._id
      );

      return {
        ...state,
        data: {
          ...state.data,
          [currentStatus]: state.data[currentStatus].filter(
            (item) => item.id !== action.payload._id
          ),
          [targetStatus]: [...state.data[targetStatus], clickedTask],
        },
      };
    },
  },
});

export const { taskMove } = TaskSlice.actions;

export default TaskSlice.reducer;
