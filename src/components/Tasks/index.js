'use client';

import { useState } from 'react';
import Task from '@/components/Task';
import styles from './styles.module.css';
import { initialTasks } from '@/data/tasks';
import AddMainButton from '@/components/AddMainButton';

export default function Tasks({detailBox, setDetailBox}) {
  const [tasks, setTasks] = useState(initialTasks);
  
  return (
    
    <div className={styles.root}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          initSubtasks={task.subtasks}
          initTask={task}
          detailBox={detailBox}
          setDetailBox={setDetailBox}
        />
      ))}   
      <AddMainButton tasks={tasks} setTasks={setTasks} />



    </div>

    
  );
}
