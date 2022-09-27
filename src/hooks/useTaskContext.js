import { useContext } from "react";
import { TaskDataContext } from "../Contexts/TaskContext";

export const useTaskContext = ()=>{
    const TaskContext = useContext(TaskDataContext)
    return {...TaskContext}
}