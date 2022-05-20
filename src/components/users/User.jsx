import { useUser } from "../../hooks/useUser";
import { PostsByUserId } from "../posts/PostsByUserId";

export const UserComponent = () => {
  const { data, error, isLoading } = useUser();
  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <h1 className="font-bold text-3xl">{data.name}</h1>
      <h2 className="text-xl mt-10 font-bold">詳細</h2>
      <ul className=" list-inside list-disc mt-2 text-xl">
        <li>{data.email}</li>
        <li>{data.username}</li>
        <li>{data.phone}</li>
        <li>{data.website}</li>
        <li>{data.company.name}</li>
      </ul>
      <h2 className="text-xl mt-10 font-bold">投稿</h2>
      <div>
        <PostsByUserId id={data.id} className=" mt-2"/>
      </div>
    </div>
  );
};
