import useSWR from "swr";
import { API_URL } from "../../utils/const";
import { fetcher } from "../../utils/fetcher";

export const UserByUserId = (props) => {
  const { data, error } = useSWR(
    props?.id ? `${API_URL}/users/${props.id}` : null,
    fetcher
  );
  if (!data && !error) {
    return <div>ローディング中です</div>;  //このif分の処理忘れがち
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return <div className="text-lg"> Created by {data.name}</div>;
};
