import Link from "next/link";
import { useUsers } from "../hooks/useUsers";

export const UsersCompornent = () => {
  const { data, error, isLoading, isEmpoty } = useUsers();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isEmpoty) {
    return <p>No users found</p>;
  }
  return (
    <ol>
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{`${user.name} (${user.email})`}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
