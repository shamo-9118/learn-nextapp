import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import { Header } from "../../../components/header/Header";
import { CommentComponent } from "../../../components/comments/Comment";
import { SWRConfig } from "swr";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  //↓ここの処理で500件のcommentsを取得してそのcommentsに紐づくidを取り出す
  const comments = await fetch("https://jsonplaceholder.typicode.com/comments");

  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: {
      id: comment.id.toString(), //toString() string化するメソッド
    },
  }));

  return {
    paths,
    //paths: pathsは省略可能、前者はgetStaticPathsで使うpaths 後者はcommentsでfetchしてきたコメントのidが入ったpaths
    //paramsの中に入れるものは文字列のみ出なければいけない、数列、変数は不可
    fallback: "blocking",
    //全件をSG化するのではなく、一部の投稿をSG化するにはここのfallbackをfalseからtrueにする必要がある。
    //fallback: blockingにするとまだSG化されていないページを表示するときに、SSRの挙動をとってくれる。つまり何も表示されないという状況は起こらなくなり、サーバー側でページが作られるまでブラウザ側は待機しているような状態になる
  };
};

export const getStaticProps = async (ctx) => {
  //ctx = context の略でcontextとカッコ内を記述しても良い、なんならなんでもいいのか？？テスト
  const { id } = ctx.params;
  const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);
  if (!comment.ok) {
    return {
      notFound: true,
    };
  }
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
  //限定的なSGを行うときに、ユーザーが初めておとづれたときにページをSG化するのに、何も表示するものがないと困る。そこで下のようにSG化するときに表示しておく処理が必要になる。
  //fallback:"false"にすると下のようなローディング中に何を表示させるか決める処理の記述は必要なくなる。
  // const router = useRouter();
  // if (router.isFallback) {
  //   return <div>Loading ...</div>;
  // }

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
