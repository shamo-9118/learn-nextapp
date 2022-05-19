import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const usePost = (id) => {
  const router = useRouter();
  const { data, error, isLoading} = useSWR(
    id
      ? `https://jsonplaceholder.typicode.com/posts/${id}`
      : null,
    fetcher
  );
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
