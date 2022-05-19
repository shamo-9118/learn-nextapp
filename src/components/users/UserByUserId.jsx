import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";

export const UserByUserId = (props) => {
  const { data, error } = useSWR(
    props?.id ? `https://jsonplaceholder.typicode.com/users/${props.id}` : null,
    fetcher
  );
  if (!data && !error) {
    return <div>ローディング中です</div>;  //このif分の処理忘れがち
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return <div> Ceated by {data.name}</div>;
};
