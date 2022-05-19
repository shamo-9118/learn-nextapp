import { useComment } from "../../hooks/useComment";
import { PostByComment } from "../posts/PostByCommeteId";

export const CommentComponente = () => {
  const { data, error, isLoading } = useComment();
  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <h1>{data?.body}</h1>
      <ul>
        <li>{data?.email}</li>
        <li>{data?.name}</li>
      </ul>
      <h2>元の記事</h2>
      <PostByComment id={data.postId}/>
    </div>
  );
};
