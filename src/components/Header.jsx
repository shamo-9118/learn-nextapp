import Link from "next/link";

export function Header() {
  return (
    <header>
      <Link href="/">
        <a>Index</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>
    </header>
  );
}
