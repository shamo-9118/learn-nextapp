import { useComment } from "../../hooks/useComment";
import { PostByComment } from "../posts/PostByCommentId";

export const CommentComponent = () => {
  const { data, error, isLoading } = useComment();
  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <h1 className="text-3xl font-bold">{data?.body}</h1>
      <div>
        Created by {data.name} ({data.email})
      </div>

      <h2 className="font-bold text-xl mt-10">元の記事</h2>
      <div className="mt-2">
        <PostByComment id={data.postId} />
      </div>
    </div>
  );
};
