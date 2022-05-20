import { useRouter } from "next/router";
import { usePost } from "../../hooks/usePost";
import { CommentsByPostId } from "../comments/CommentsByPostId";
import { UserByUserId } from "../users/UserByUserId";

export const Post = () => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(router.query.id);
  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <UserByUserId id={data.userId} />
      <h1 className=" font-bold text-3xl">{data?.title}</h1>
      <p className=" text-gray-800 text-xl mt-2">{data?.body}</p>
      <h2 className="text-xl font-bold mt-10">コメント一覧</h2>
      <div className=" mt-2">
        <CommentsByPostId id={data.id}></CommentsByPostId>
      </div>
    </div>
  );
};
