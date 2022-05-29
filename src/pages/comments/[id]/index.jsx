import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import { Header } from "../../../components/header/Header";
import { CommentComponent } from "../../../components/comments/Comment";
import { SWRConfig } from "swr";

export const getStaticPaths = async () => {
  //↓ここの処理で500件のcommentsを取得してそのcommentsに紐づくidを取り出す
  const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: {
      id: comment.id.toString() //toString() string化するメソッド
    },
  }));

  return {
    paths, 
    //paths: pathsは省略可能、前者はgetStaticPathsで使うpaths 後者はcommentsでfetchしてきたコメントのidが入ったpaths
    //paramsの中に入れるものは文字列のみ出なければいけない、数列、変数は不可
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  //ctx = context の略でcontextとカッコ内を記述しても良い、なんならなんでもいいのか？？テスト
  const { id } = ctx.params;
  const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);
  const commentData = await comment.json();
  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
  };
};

const CommentsId = (props) => {
  const { fallback } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>comment page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header></Header>
        <CommentComponent />
      </SWRConfig>
    </div>
  );
};

export default CommentsId;
