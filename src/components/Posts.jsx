import { useEffect, useState } from "react";
import { useCallback } from "react";

export function Posts() {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });
  // const [posts, setPosts] = useState([]);
  // const [loding, setLoding] = useState(true);
  // const [error, setError] = useState(null);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("取得に失敗しました。");
      }
      const json = await res.json();
      setState((prevState) => {
        return {
          ...prevState,
          data: json,
          loading: false,
        };
      });
    } catch (error) {
      setState((prevState) => {
        return {
          ...prevState,
          loading: false,
          error,
        };
      });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log("foo");

  if (state.loading) {
    return <div>ローディング中です</div>;
  }

  if (state.error) {
    return <div>{state.error.massage}</div>;
  }

  if (state.data.length === 0) {
    return <div>データはありません</div>;
  }

  return (
    <ol>
      {state.data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
}
