import Link from "next/link";
import styles from "../styles/Home.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/posts">
        <a>Posts</a>
      </Link>

      <Link href="/">
        <a>Index</a>
      </Link>
    </header>
  );
}
