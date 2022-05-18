import Link from "next/link";
import { usePosts } from "../hooks/useFetchArray";

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();
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
    <ol >
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
//useReducerの考え方
// const [state, dispatch] = useReducer(reducer, initialArg, init);
//(state, action) => newState
//ステイトとアクションを受け取って新しいステイトを返す。非常に大切な考え方。

//動画ではfectherを定義せずにできていたけど、実際にやると、fechterをuseSWRの第二引数として渡さないとデータの取得ができなかった
//fechterの意義は、エラーが起きた時の対処として表示させるものを作るために、useSWRがerrorを受け取るためのもの
// オーバーライド・・・デフォルトで設定されているものを上書きして、再設定すること
