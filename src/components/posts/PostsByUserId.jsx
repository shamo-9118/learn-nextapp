import Link from "next/link";
import {  usePostsByUserId } from "../../hooks/useFetchArray";

export const PostsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.id);
  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データはありません</div>;
  }

  return (
    <ul className=" space-y-4">
      {data.map((post) => {
        return (
          <li key={post.id} >
            <Link href={`/posts/${post.id}`}>
              <a className=" group ">
                <h1 className=" font-bold text-xl group-hover:text-blue-500">{post.title}</h1>
                <p className=" text-lg text-gray-700 group-hover:text-blue-400">{post.body}</p>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
