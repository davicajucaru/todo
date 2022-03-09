import { BiCheck } from "react-icons/bi";
import { Task } from "../../App";

import "./styles.scss";

interface InputGroupProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function InputGroup({
  title,
  setTitle,
  tasks,
  setTasks,
}: InputGroupProps) {
  function createTask(title: string) {
    const task = {
      id: tasks.length + 1,
      title: title,
      isCompleted: false,
    };

    const newTasks = [...tasks, task];

    const saveTask = JSON.stringify(newTasks);
    localStorage.setItem("tasks", saveTask);

    setTasks(newTasks);
    setTitle("");
  }

  return (
    <div className="inputGroup">
      <form>
        <input
          type="text"
          value={title}
          placeholder="Add your activity here"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button disabled={!title} onClick={() => createTask(title)}>
          <BiCheck size={25} color="white" />
        </button>
      </form>
    </div>
  );
}
