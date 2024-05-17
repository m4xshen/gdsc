import { nanoid } from 'nanoid';
import { useRef, useState } from 'react';
import styles from './styles.module.css';

export default function Task({ initTask, initSubtasks }) {
  const [subtasks, setSubtasks] = useState(initSubtasks);
  const [task, setTask] = useState(initTask);
  const [isDeleted, setIsDeleted] = useState(false);
  const [detailBox, setDetailBox] = useState(null);

  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const tagRef = useRef(null);
  const labelsRef = useRef(null);

  const handleDelete = () => {
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.mainTask} ${task.done ? styles.mainTaskDone : ''}`}
      >
        <div className={styles.firstLine}>
          <button
            className={styles.doneButton}
            onClick={() => {
              subtasks.map((subtask) => {
                subtask.done = !task.done;
              });
              setTask({
                ...task,
                done: !task.done,
              });
            }}
          >
            {task.done ? '\u2713' : ''}
          </button>
          <div className={styles.name}>{task.name}</div>
        </div>
        <div className={styles.description}>{task.description}</div>
        {task.tag ? (
          <div className={styles.tag}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="14"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
            {task.tag}
          </div>
        ) : null}
        <div className={styles.labels}>
          {task.labels.map((label, index) => (
            <span key={index} className={styles.label}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="16"
                height="16"
              >
                <path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
              </svg>
              {label}
            </span>
          ))}
        </div>
        <button
          className={styles.button}
          onClick={() => {
            setSubtasks([
              ...subtasks,
              {
                id: nanoid(),
                name: 'New Task',
                done: 0,
                description: 'Task Description',
                subtasks: [],
                labels: [],
              },
            ]);
          }}
        >
          +
        </button>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              setDetailBox({
                task: task,
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="16"
              height="16"
              fill="#527aec"
              border-radius="50%"
            >
              <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
            </svg>
          </button>
          <button onClick={handleDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="16"
              height="16"
              fill="#ec5252"
            >
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.subtasksAndDetail}>
        <div className={styles.subTasks}>
          {subtasks.map((subtask) => (
            <Task
              key={subtask.id}
              initTask={subtask}
              initSubtasks={subtask.subtasks}
            />
          ))}
        </div>

        {detailBox ? (
          <>
            <div className={styles.backDrop}></div>
            <div className={styles.detailBox}>
              <input
                ref={nameRef}
                className={styles.detailBoxName}
                placeholder="Input task name."
                defaultValue={detailBox.task.name}
              />
              <textarea
                ref={descriptionRef}
                className={styles.detailBoxDescription}
                placeholder="Input task description."
                defaultValue={detailBox.task.description}
              />
              <input
                ref={tagRef}
                className={styles.detailBoxTag}
                placeholder="Tag someone."
                defaultValue={detailBox.task.tag}
              />
              <input
                ref={labelsRef}
                className={styles.detailBoxTag}
                placeholder="Add labels."
                defaultValue={detailBox.task.labels.toString()}
              />
              <div className={styles.detailButtons}>
                <button
                  className={styles.detailCancelButton}
                  onClick={() => {
                    setDetailBox(null);
                  }}
                >
                  Cancel
                </button>
                <button
                  className={styles.detailSaveButton}
                  onClick={() => {
                    setTask({
                      ...task,
                      name: nameRef.current.value,
                      description: descriptionRef.current.value,
                      tag: tagRef.current.value,
                      labels:
                        labelsRef.current.value === ''
                          ? []
                          : labelsRef.current.value.split(','),
                    });
                    setDetailBox(null);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
