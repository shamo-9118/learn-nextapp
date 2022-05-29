import useSWRImmutable from "swr/immutable";

const useFetchArray = (url) => {
  const { data, error } = useSWRImmutable(url);
  //useSWRからuseSWRImmutableに変えるだけ --- ssrを行なって一回リクエストをしたらそれ以降はリクエストしないという処理。
//全てimmutableにするのではなくリアルタイム性の求められるものはimmutableにしない。必要かどうかは考える。
//SSR or SG どちらも使える場合はSGが推奨されている。
  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = "https://jsonplaceholder.typicode.com";
export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};

export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`);
};

export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`);
};

export const useCommentsById = (id) => {
  return useFetchArray(id ? `${API_URL}/comments?postId=${id}`: null);
};

export const usePostsByUserId = (id) => {
  return useFetchArray(id ? `${API_URL}/posts?userId=${id}`: null);
};

//デメリット等
//SG --- 更新が求めらるページでは使えない。データベース等の情報が更新されても反映させることが基本的にはできない。
//Static page ---静的なページ 問題点は最初に表示されるものがLoading等になってしまってseoやogp的に弱い、ローディング中の表示を用意しないといけない、
//SSR --- ページ遷移に少しだけラグが生じる。重い処理をサーバー側でするときに、ユーザーに負担がかかる。

//StaticPage --- ページがレンダリングしたり更新されるたびにconsoleLogがブラウザ上で走る。
//SSR --- ページが更新されたりレンダリングが起きたときにconsoleLogがサーバー側で走る
//SG --- 更新されたりレンダリングが起きてもconsoleLogはサーバー側、ブラウザ側、どちらとも走らない。ビルド時にだけconsoleLogが走る。

