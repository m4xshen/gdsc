
import { nanoid } from 'nanoid';
import { useState } from 'react';
import styles from './styles.module.css';


export default function Task({ initTask , initSubtasks, onClick , setDetailBox , detailBox}) {
  const [subtasks, setSubtasks] = useState(initSubtasks);
  const [task,setTask] = useState(initTask);
  

  return (
    <div className={styles.wrapper}>
      <div className={task.done ? styles.mainTaskDone : styles.mainTask} onClick={()=>onClick(task.id)}>
        <div className={styles.firstLine}>

          <button
            className={styles.doneButton} onClick={() => {
              
              subtasks.map((subtask) => {
                subtask.done=!task.done;
          
              })
              setTask({
                ...task,
                done: !task.done,
              });

            }}>

            {"\u2713"} </button>

          <div className={task.done ? styles.nameDone : styles.name} onClick={() => {
            setDetailBox({
              ...detailBox,
              name: task.name,
              description: task.description,
              open: 1,
          });
          }}>{task.name}</div>
          
        </div>

        <div className={styles.description}>{task.description}</div>

        <button
          className={styles.button}
          onClick={() => {
            setSubtasks([
              ...subtasks,
              {
                id: nanoid(),
                name: 'New Subtask',
                done: 0,
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
        {subtasks.map((subtask) => {
          
          return (
            <Task
              id={subtask.id}
              key={subtask.id}
              initTask={subtask}
              onClick={onClick}
              initSubtasks={subtask.subtasks}
              setDetailBox={setDetailBox}
              detailBox={detailBox}
            />            
          )

        })}

      </div>
    </div>
  );
}
