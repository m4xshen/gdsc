import { useState } from 'react';
import styles from './styles.module.css';

export default function Task({ id, name, description, subtasks, onClick}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainTask} onClick={()=>onClick(id)}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>

      <div className={styles.subTasks}>
        {subtasks.map((subtask) => (
          <Task
            id={subtask.id}
            key={subtask.id}
            name={subtask.name}
            description={subtask.description}
            subtasks={subtask.subtasks}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
}
