import styles from './styles.module.css';

export default function AddButton({ subtasks }){

    return (
        <button className={styles.button} onClick = { function(){
            subtasks.push({
                id: 99,
                name: 'New Subtask',
                description: 'New Detail.',
                subtasks: [],
            });
            
        }}>+</button>
    );  


}