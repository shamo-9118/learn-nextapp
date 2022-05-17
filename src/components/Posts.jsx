import { useEffect, useReducer } from "react";
import { useCallback } from "react";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "end": {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }
    case "error": {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      throw new Error("no such action type!");
    }
  }
};

export function Posts() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [state, setState] = useState({
  //   data: [],
  //   loading: true,
  //   error: null,
  // });

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("取得に失敗しました。");
      }
      const json = await res.json();
      dispatch({ type: "end", data: json });
    } catch (error) {
      dispatch({type:"error",error})
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
//useReducerの考え方
// const [state, dispatch] = useReducer(reducer, initialArg, init);
//(state, action) => newState
//ステイトとアクションを受け取って新しいステイトを返す。非常に大切な考え方。
