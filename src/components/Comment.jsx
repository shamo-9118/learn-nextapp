import { useComment } from "../hooks/useComment";

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
    </div>
  );
};
