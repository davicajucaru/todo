import { Header } from "./components/Header";
import { InputGroup } from "./components/InputGroup";
import { TodoList } from "./components/TodoList";

import "./global.css";

export type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
};

function App() {
  return (
    <div className="App">
      <Header />

      <InputGroup />

      <TodoList />
    </div>
  );
}

export default App;
