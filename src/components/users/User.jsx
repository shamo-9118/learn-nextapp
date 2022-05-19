import { useUser } from "../../hooks/useUser";
import { PostsByUserId } from "../posts/PostsByUserId";

export const UserComponente = () => {
  const { data, error, isLoading } = useUser();
  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <h1>{data.name}</h1>
      <ul>
        <li>{data.email}</li>
        <li>{data.username}</li>
        <li>{data.phone}</li>
        <li>{data.website}</li>
        <li>{data.company.name}</li>
      </ul>
      <h1>投稿</h1>
      <PostsByUserId id={data.id} />
    </div>
  );
};
