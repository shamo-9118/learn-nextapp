import useSWRImmutable from "swr/immutable";

const useFetchArray = (url) => {
  const { data, error } = useSWRImmutable(url);
  //useSWRからuseSWRImmutableに変えるだけ --- ssrを行なって一回リクエストをしたらそれ以降はリクエストしないという処理。

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