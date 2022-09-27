import "./app.scss";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import TaskBoard from "./Components/TeskBoard";
import TaskColumn from "./Components/TaskColumn";

import { useSelector } from "react-redux";

export default function App() {
  const { data } = useSelector((state) => state.Task);

  return (
    <div className="App">
      <Header />
      <Main>
        <TaskBoard>
          {Object.entries(data).map(([status, itemData], index) => {
            return (
              <TaskColumn key={status} index={index} itemData={itemData} />
            );
          })}
        </TaskBoard>
      </Main>
      <Footer />
    </div>
  );
}
