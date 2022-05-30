import { useRouter } from "next/router";
import useSWR from "swr";
import { API_URL } from "../utils/const";
import { fetcher } from "../utils/fetcher";

export const useComment = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id
      ? `${API_URL}/comments/${router.query.id}`
      : null,
    fetcher
  );
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
