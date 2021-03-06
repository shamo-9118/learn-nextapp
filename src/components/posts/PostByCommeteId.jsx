import Link from "next/link";
import { useRouter } from "next/router";
import { usePost } from "../../hooks/usePost";
import styles from "../../styles/Home.module.css";

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
    <div className={styles.main}>
      <Link href={`/posts/${data?.id}`}>
        <a>{data?.title}</a>
      </Link>
    </div>
  );
};
