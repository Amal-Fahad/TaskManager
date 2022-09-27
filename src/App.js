import "./app.scss";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import TaskBoard from "./Components/TeskBoard";
import TaskColumn from "./Components/TaskColumn";
import { TaskDataContext } from "./Contexts/TaskContext";
import { useReducer } from "react";
import { initial_State } from "./Contexts/TaskReducer";
import { reducer } from "./Contexts/TaskReducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initial_State);

  console.log("state is ", state);

  return (
    <TaskDataContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        <Main>
          <TaskBoard>
            {Object.entries(state.data).map(([status, data], index) => {
              return <TaskColumn key={status} index={index} itemData={data} />;
            })}
          </TaskBoard>
        </Main>
        <Footer />
      </div>
    </TaskDataContext.Provider>
  );
}