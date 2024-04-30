'use client';

import { useState } from 'react';
import Task from '@/components/Task';
import styles from './styles.module.css';
import { initialTasks } from '@/data/tasks';


export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <div className={styles.root}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          name={task.name}
          description={task.description}
          subtasks={task.subtasks}
        />
      ))}
    </div>
  );
}
