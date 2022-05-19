import Link from "next/link";
import { useUsers } from "../../hooks/useFetchArray";

export const UsersComponent = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isEmpty) {
    return <p>No users found</p>;
  }
  return (
    <ul className="grid grid-cols-2 gap-6 ">
      {data.map((user) => {
        return (
          <li key={user.id} className=" shadow rounded-lg hover:bg-gray-100">
            <Link href={`/users/${user.id}`}>
              <a className=" block p-4">
                <h1 className="text-xl font-bold truncate">{user.name} </h1>
                <div className=" text-lg truncate">{user.email}</div>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
