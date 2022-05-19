import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/comments", label: "Comments" },
];
export function Header() {
  return (
    <header className="flex justify-center items-center border-b w-full h-24 mb-4">
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <a className="inline-block py-2 px-6 text-2xl hover:text-blue-500 focus:text-blue-500  active:text-blue-500">{item.label}</a>
          </Link>
        );
      })}
    </header>
  );
}
