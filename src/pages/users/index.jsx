import Head from "next/head";
import { SWRConfig } from "swr";
import { Header } from "../../components/header/Header";
import { UsersComponent } from "../../components/users/Users";
import { API_URL } from "../../utils/const";

export const getServerSideProps = async () => {
  //ユーザーの一覧の情報を取得
  const USERS_API_URL = `${API_URL}/users`;
  const users = await fetch(USERS_API_URL);
  const usersData = await users.json();
  return {
    props: {
      fallback: {
        [USERS_API_URL]: usersData,
        // [POSTS_API_URL]: postsData,
      },
    },
  };
};
const Users = (props) => {
  const { fallback } = props;

  //この上のif分の処理（エラー時の処理）の記述がないとswrは実行できない。mapが使えない。
  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <Header />
        <UsersComponent />
      </SWRConfig>
    </div>
  );
};

export default Users;

//簡単にssrが行えるのはnextとssrのおかげ、getServerSidePropsというメソッドをNextが用意してくれているから簡単に行える。
//SWRがないとpropsのバケツリレーでじゃないと行えなくなる。コンポーネントの階層ごとにpropsを渡していく。reactを書くときのように少し面倒臭い。

//SWRのイミュータブル --- ユーザーからのリクエストを制限する機能。必要のないところでは必要最小限のリクエストで抑えたい。一回だけリクエストしたらそれ以上はリクエストを行わせない。
