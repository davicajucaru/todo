import React, { createContext, ReactNode, useContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";

export type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
};

interface ITaskContext {
  tasks: Task[];
  title: string;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  createTask: (title: string) => void;
  deleteTask: (id: string) => void;
  doneTask: (id: string) => void;
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export function UserStateProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function createTask(title: string) {
    const id = uuidv4();

    const task = {
      id: id,
      title: title,
      isCompleted: false,
    };

    const newTasks = [...tasks, task];

    const saveTask = JSON.stringify(newTasks);
    localStorage.setItem("tasks", saveTask);

    setTasks(newTasks);
    setTitle("");
  }

  function deleteTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id);

    const saveTask = JSON.stringify(newTasks);
    localStorage.setItem("tasks", saveTask);

    setTasks(newTasks);
  }

  function doneTask(id: string) {
    const newTask = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    const saveTask = JSON.stringify(newTask);
    localStorage.setItem("tasks", saveTask);

    setTasks(newTask);
  }

  return (
    <TaskContext.Provider
      value={{
        title,
        setTitle,
        tasks,
        setTasks,
        createTask,
        deleteTask,
        doneTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default function useTask() {
  const context = useContext(TaskContext);

  if (!context) throw new Error("Context does not exist");

  return context;
}
