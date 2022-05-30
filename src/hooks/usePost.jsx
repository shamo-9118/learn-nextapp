import { useRouter } from "next/router";
import useSWR from "swr";
import { API_URL } from "../utils/const";
import { fetcher } from "../utils/fetcher";

export const usePost = (id) => {
  const router = useRouter();
  const { data, error, isLoading} = useSWR(
    id
      ? `${API_URL}/posts/${id}`
      : null,
    fetcher
  );
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
