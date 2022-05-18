import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

const useFetchArray = (url) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpoty: data && data.length === 0,
  };
};

export const useComments = () => {
  return useFetchArray("https://jsonplaceholder.typicode.com/comments");
};

export const useUsers = () => {
  return useFetchArray("https://jsonplaceholder.typicode.com/users");
};

export const usePosts = () => {
  return useFetchArray("https://jsonplaceholder.typicode.com/posts");
};
