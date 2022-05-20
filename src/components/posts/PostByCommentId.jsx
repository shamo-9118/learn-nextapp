import Link from "next/link";
import { useRouter } from "next/router";
import { usePost } from "../../hooks/usePost";

export const PostByComment = (props) => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(props.id);
  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className=" text-lg">
      <Link href={`/posts/${data?.id}`}>
        <a className=" text-lg hover:text-blue-500">{data?.title}</a>
      </Link>
    </div>
  );
};
