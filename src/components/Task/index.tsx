import styles from './task.module.css';
import { ITask } from "../../App";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

interface Props {
  task: ITask;
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function Task({ task, onComplete, onDelete }: Props) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
      
      <p className={task.isCompleted ? styles.textCompleted : ""} >
      <EditText></EditText>
      { task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
      <TbTrash size={20} />
      </button>
    </div>
  );
}