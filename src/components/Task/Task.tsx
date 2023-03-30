import { ChangeEvent, MouseEvent, useState } from "react";
import style from "./Task.module.css";

interface TaskProps {
  content: string;
  onChangeValueCheckbox: (value: boolean) => void;
  onDeleteTask: (task: string, isChecked: boolean) => void;
}

export function Task({ content, onChangeValueCheckbox, onDeleteTask }: TaskProps) {
  const [checked, setChecked] = useState<boolean>(false);
  
  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setChecked(target.checked);

    onChangeValueCheckbox(target.checked)
  }

  function handleDeleteTask() {
    onDeleteTask(content, checked);
  }

  return (
    <div className={style['c-task']}>
      <label className={style['c-task__label']}>
        <input 
          className={style['c-task__checkbox']} 
          type="checkbox" 
          onChange={handleChange}
          checked={checked}
        />
        <span className={style['c-task__span']}>
          { content }
        </span>  
      </label>

      <button 
        type="button"
        title="Delete"
        className={style['c-task__delete']}
        onClick={handleDeleteTask}
      /> 

    </div>
  )
}