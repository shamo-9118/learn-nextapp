import Link from "next/link";
import { useCommentsById } from "../../hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsById(props.id);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isEmpty) {
    return <p>No commnents found</p>;
  }
  return (
    <ul className=" space-y-2">
      {data.map((comment) => {
        return (
          <li key={comment.id} className="border-b pb-2">
            <Link href={`/comments/${comment.id}`}>
              <a className="block hover:text-blue-500">{`${comment.body} `}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
