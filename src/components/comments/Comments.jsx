import Link from "next/link";
import { useComments } from "../../hooks/useFetchArray";

export const CommentsComponents = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isEmpty) {
    return <p>No comments found</p>;
  }
  return (
    <ul className=" space-y-2">
      {data.map((comment) => {
        return (
          <li key={comment.id} className=" border-b-2 pb-2">
            <Link href={`/comments/${comment.id}`}>
              <a className=" block text-lg hover:text-blue-400">{`${comment.body} `}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
