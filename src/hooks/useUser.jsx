import { useRouter } from "next/router";
import useSWRImmutable from "swr/immutable";
import { API_URL } from "../utils/const";
import { fetcher } from "../utils/fetcher";

export const useUser = () => {
  const router = useRouter();
  const { data, error } = useSWRImmutable( //一度きりのリクエストを行う。
    router.query.id
      ? `${API_URL}/users/${router.query.id}`
      : null,
    fetcher
  );
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
