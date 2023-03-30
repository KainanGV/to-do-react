import styles from "./CreateTask.module.css";
import plusIcon from "../../assets/plus.svg";
import { ChangeEvent, FormEvent, useState } from "react";

interface ICreateTaskProps {
  onCreateTask: (taskName: string) => void;
}

export function CreateTask({ onCreateTask }: ICreateTaskProps) {
  const [task, setTask] = useState<string>("");

  function handleChangeValue({ target }: ChangeEvent<HTMLInputElement>) {
    setTask(target.value);
  }

  function handleAddTask(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();

    onCreateTask(task);
  }

  return (
    <form className={styles['c-createtask']}>
      <input 
        className={styles['c-createtask__input']}
        type="text" 
        placeholder="Adicione uma nova tarefa"
        value={task} 
        onChange={handleChangeValue}
      />

      <button 
        className={styles['c-createtask__button-wrapper']} 
        type="submit"
        onClick={handleAddTask}
      >
        <span className={styles['c-createtask__button__span']}>Criar</span>  
        <img src={plusIcon} alt="" />
      </button>

    </form>
  )
}