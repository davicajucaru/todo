import { Task } from "../../App";

import "./styles.scss";

import { BiTrash } from "react-icons/bi";
import { useEffect } from "react";

interface TodoListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function TodoList({ tasks, setTasks }: TodoListProps) {
  function deleteTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);

    const saveTask = JSON.stringify(newTasks);
    localStorage.setItem("tasks", saveTask);

    setTasks(newTasks);
  }

  function doneTask(id: number) {
    const newTask = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    const saveTask = JSON.stringify(newTask);
    localStorage.setItem("tasks", saveTask);

    setTasks(newTask);
  }

  useEffect(() => {
    function loadTasks() {
      const newTasks = localStorage.getItem("tasks");
      if (newTasks) {
        const saveTasks = JSON.parse(newTasks);
        setTasks(saveTasks);
      }
    }
    loadTasks();
  }, []);

  return (
    <div className="todoList">
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={
              task.isCompleted
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            <div>
              <input type="checkbox" onChange={() => doneTask(task.id)} />
              {task.title}
            </div>

            <a href="/" onClick={() => deleteTask(task.id)}>
              <BiTrash size={19} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
