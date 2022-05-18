import { usePost } from "../hooks/usePost";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export const Post = () => {
  const { post, user, error, isLoading } = usePost();
  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className={styles.main}>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      {user?.name ? <div> Ceated by {user.name}</div> : null}
    </div>
  );
};
