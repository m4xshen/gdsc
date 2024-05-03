import styles from './styles.module.css';
import { nanoid } from 'nanoid'

export default function AddButton({ subtasks, setSubtasks }){

    return (
        <button className={styles.button} onClick = {()=>{
            setSubtasks([...subtasks, {
                id: nanoid(),
                name: 'New Subtask',
                description: 'New Detail.',
                subtasks: [],
            }])
        
        }}>+</button>
    );  
}