import styles from "./Header.module.css";
import svgLogo from "../../assets/logo.svg"
import { CreateTask } from "../CreateTask/CreateTask";

export function Header() {
  return (
    <>
      <header className={styles['c-header']}>
        <img className={styles['c-header__svg']} src={svgLogo} alt="" />
      </header>
    </>
  )
}
