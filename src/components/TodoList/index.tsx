import "./styles.scss";

import { BiTrash } from "react-icons/bi";
import { useEffect } from "react";

import useTask from "../../hooks/useTask";

export function TodoList() {
  const { tasks, setTasks, deleteTask, doneTask } = useTask();

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
