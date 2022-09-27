import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./Slice/TaskSlice";

export const store = configureStore({
  reducer: {
    Task: TaskReducer,
  },
});
