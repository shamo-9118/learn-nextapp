import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("エラーが発生したため、データ取得できませんでした");
  }

  const json = await response.json();
  return json;
};

const usePosts = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();
  console.log(data);
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
    <ol>
      {data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
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
