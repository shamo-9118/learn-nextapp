import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import { useRouter } from "next/router";
import { Header } from "../../../components/header/Header";
import useSWR from "swr";
import { fetcher } from "../../../utils/fetcher";

const useUser = () => {
  const router = useRouter();
  const { data, error } = useSWR(
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

const UserComponente = () => {
  const { data, error, isLoading } = useUser();
  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <h1>{data.name}</h1>
      <ul>
        <li>{data.email}</li>
        <li>{data.username}</li>
        <li>{data.phone}</li>
        <li>{data.website}</li>
        <li>{data.company.name}</li>
      </ul>
    </div>
  );
};

const UsersId = () => {
  const { data, error, isLoading } = useUser();
  return (
    <div className={styles.container}>
      <Head>
        <title>Index</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <UserComponente />
    </div>
  );
};

export default UsersId;