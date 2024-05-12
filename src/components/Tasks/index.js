'use client';

import { useState } from 'react';
import Task from '@/components/Task';
import styles from './styles.module.css';
import { initialTasks } from '@/data/tasks';
import AddMainButton from '@/components/AddMainButton';

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [showButton, setShowButton] = useState(false);
  const [deletetask, setdeletetask] = useState(null);
 
  function handleClick(taskid){
    console.log('id: ', taskid)
    setShowButton(true)
    setdeletetask(taskid);
  }

  function handleButtonClick(){
    console.log(deletetask);
    setShowButton(false);
    setTasks(prevTasks => {
      const filteredTasks = prevTasks.map(task => ({
        ...task,
        subtasks: task.subtasks.filter(subtask => subtask.id !== deletetask)
      })).filter(task => {
        return task.id !== deletetask && !task.subtasks.some(subtask => subtask.id === deletetask);
      });
  
      return filteredTasks;
    });
  }

  return (
    <div className={styles.root}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          onClick={handleClick}
          initSubtasks={task.subtasks}
          initTask={task}
        />
      ))}   
      {showButton && <button onClick={handleButtonClick}>Click me</button>}
      <AddMainButton tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
