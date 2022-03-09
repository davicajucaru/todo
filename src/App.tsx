import React, { useState } from "react";
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
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className="App">
      <Header />

      <InputGroup
        title={title}
        setTitle={setTitle}
        tasks={tasks}
        setTasks={setTasks}
      />

      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
