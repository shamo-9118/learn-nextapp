import { useRouter } from "next/router";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "../utils/fetcher";

export const useUser = () => {
  const router = useRouter();
  const { data, error } = useSWRImmutable(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null,
    fetcher
  );
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
