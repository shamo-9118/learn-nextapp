import { useRouter } from "next/router";
import { usePost } from "../../hooks/usePost";
import styles from "../../styles/Home.module.css";
import { CommentsByPostId } from "../comments/CommetsByPostId";
import { UserByUserId } from "../users/UserByUserId";

export const Post = () => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(router.query.id);
  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className={styles.main}>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
      <UserByUserId id={data.userId} />
      <CommentsByPostId id={data.id}></CommentsByPostId>
    </div>
  );
};
