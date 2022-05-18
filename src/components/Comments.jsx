import Link from "next/link";
import { useComments } from "../hooks/useFetchArray";

export const CommentsCompornents = () => {
  const { data, error, isLoading, isEmpoty } = useComments();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isEmpoty) {
    return <p>No commnents found</p>;
  }
  return (
    <ol>
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              <a>{`${comment.body} `}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
