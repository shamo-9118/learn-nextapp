import { Header } from "./Header";
import styles from  "../styles/Home.module.css"

export function Main(props) {
  return (
    <main className={styles.main}>
      <Header></Header>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">{props.title}Page!!</a>
      </h1>

      
    </main>
  );
}
