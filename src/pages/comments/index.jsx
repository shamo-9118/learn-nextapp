import Head from "next/head";
import { Header } from "../../components/header/Header";
import { CommentsComponents } from "../../components/comments/Comments";
import { SWRConfig } from "swr";

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve));

export const getStaticProps = async () => {
  //ユーザーコメントの情報を取得
  //SG -- getStaticPropsメソッドを使うだけ。しかしSGはビルド時にしか走らせることができない。
  const COMMENTS_API_URL = `https://jsonplaceholder.typicode.com/comments`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData = await comments.json();
  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
        // [POSTS_API_URL]: postsData,
      },
    },
  };
};

const Comments = (props) => {
  const { fallback } = props;
  //この上のif分の処理（エラー時の処理）の記述がないとswrは実行できない。mapが使えない。
  return (
    <div>
      <Head>
        <title>Comments Pages</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
        <CommentsComponents />
      </SWRConfig>
    </div>
  );
};

export default Comments;
