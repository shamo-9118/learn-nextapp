import Link from "next/link";
import styles from "../styles/Home.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/comments", label: "Comments" },
];
export function Header() {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <a className={styles.anchor}>{item.label}</a>
          </Link>
        );
      })}
    </header>
  );
}
