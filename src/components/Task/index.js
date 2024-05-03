import { nanoid } from 'nanoid';
import { useState } from 'react';
import styles from './styles.module.css';

export default function Task({ name, description, initSubtasks }) {
  const [subtasks, setSubtasks] = useState(initSubtasks);

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainTask}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
        <button
          className={styles.button}
          onClick={() => {
            setSubtasks([
              ...subtasks,
              {
                id: nanoid(),
                name: 'New Subtask',
                description: 'New Detail.',
                subtasks: [],
              },
            ]);
          }}
        >
          +
        </button>
      </div>
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
