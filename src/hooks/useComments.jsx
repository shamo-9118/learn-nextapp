import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useComments = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );
  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpoty: data && data.length === 0,
  };
};
