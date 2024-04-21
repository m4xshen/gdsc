"use client";

import { useState } from "react";
import { Task } from "@/components/Task";
import styles from "./styles.module.css";

export function Tasks() {
  const [tasks, setTasks] = useState([
    {
      name: "Example",
      description: "This is an example task",
      subtasks: [
        { name: "Subtask 1", description: "This is a subtask", subtasks: [] },
        {
          name: "Subtask 2",
          description: "This is another subtask",
          subtasks: [],
        },
      ],
    },
    {
      name: "Another Example",
      description: "This is another example task",
      subtasks: [
        { name: "Subtask 1", description: "This is a subtask", subtasks: [] },
        {
          name: "Subtask 2",
          description: "This is another subtask",
          subtasks: [],
        },
      ],
    },
  ]);

  return (
    <div className={styles.root}>
      {tasks.map((task) => (
        <Task
          key={task.name}
          name={task.name}
          description={task.description}
          subtasks={task.subtasks}
        />
      ))}
    </div>
  );
}
