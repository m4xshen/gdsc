import styles from './styles.module.css';

export function Task({ name, description, subtasks }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainTask}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.subTasks}>
        {subtasks.map((subtask) => (
          <Task
            key={subtask.name}
            name={subtask.name}
            description={subtask.description}
            subtasks={subtask.subtasks}
          />
        ))}
      </div>
    </div>
  );
}
