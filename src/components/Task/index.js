import { useState } from 'react';
import styles from './styles.module.css';
import AddButton from '@/components/AddButton';
 
export default function Task({ name, description, initSubtasks }) {
  const [subtasks, setSubtasks] = useState(initSubtasks);

  return (
    <div className={styles.wrapper}>
      
      <div className={styles.mainTask}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>

      <AddButton
        subtasks={subtasks}
        setSubtasks={setSubtasks}
      />
      
      <div className={styles.subTasks}>
        {subtasks.map((subtask) => (
          <Task
            key={subtask.id}
            name={subtask.name}
            description={subtask.description}
            initSubtasks={subtask.subtasks}
          />
        ))}
      </div>
      
    </div>
    
  );
}
