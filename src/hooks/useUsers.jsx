import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useUsers = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );
  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpoty: data && data.length === 0,
  };
};
