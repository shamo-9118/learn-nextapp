import { Header } from "../header/Header";
import styles from "../../styles/Home.module.css";;

export function Main(props) {
  return (
    <main className={styles.main}>
      <Header></Header>
    </main>
  );
}
