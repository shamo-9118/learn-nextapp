import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useComment = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
      : null,
    fetcher
  );
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
