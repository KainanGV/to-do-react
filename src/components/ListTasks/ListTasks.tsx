import styles from "./ListTask.module.css";
import clipboard from "../../assets/clipboard.svg"
import { Task } from "../Task/Task";
import { CreateTask } from "../CreateTask/CreateTask";
import { useState } from "react";

export function ListTaks() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [tasksCreated, setTasksCreated] = useState<number>(0)
  const [tasksDone, setTasksDone] = useState<number>(0)

  function createTask(task: string) {
    setTasksCreated((prev) => prev + 1);
    setTasks([...tasks, task])
  }

  function handleChangeValueCheckbox(value: boolean) {
    if(value) {
      setTasksDone((prev) => prev + 1);

      return;
    }

    if(tasksDone > 0) setTasksDone((prev) => prev - 1);
  }

  function handleDeleteTask(content: string, isChecked: boolean) {
    const tasksFiltered = tasks.filter(task => task !== content);

    if(isChecked) setTasksDone((prev) => prev - 1);
    setTasks(tasksFiltered);
    setTasksCreated((prev) => prev - 1);
  }

  return ( 
    <>
      <CreateTask 
        onCreateTask={createTask}
      />

      <main className={styles['c-listtask']}>
        <div className={styles['c-listtask--wrapper']}>
          <section className={styles['c-listtask__titles']}>
              <div className={styles['c-listtask__first__title']}>
                <span className={styles['c-listtask__first__title__taskscreate']}>Tarefas Criadas</span>
                <span className={styles['c-listtask__first__title__taskscreatecount']}>{ tasksCreated }</span>
              </div>

              <div className={styles['c-listtask__second__title']}>
                <span className={styles['c-listtask__second__title__tasksdone']}>Concluídas</span>
                <span className={styles['c-listtask__second__title__tasksdonecount']}>{ tasksDone }</span>
              </div>
          </section>

          <section className={styles['c-listtask__noregisters']}>
              <img src={clipboard} alt="" />
              <h4 className={styles['c-listtask__noregisters__title']}>Você ainda não tem tarefas cadastradas</h4>
              <p  className={styles['c-listtask__noregisters__content']}>Crie tarefas e organize seus itens a fazer</p>
          </section>

          {
            tasks.map(task => (
              <Task 
                key={task} 
                content={task} 
                onChangeValueCheckbox={handleChangeValueCheckbox}
                onDeleteTask={handleDeleteTask}
              />
            ))
          }

        </div>
      </main>
    </>
  )
}