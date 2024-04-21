import styles from "./styles.module.css";

export function Task({ children, name, description }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainTask}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>
      {children ? <div className={styles.subTasks}>{children}</div> : null}
    </div>
  );
}
