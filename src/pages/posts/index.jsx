import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Footer } from "../../components/footer/Footer";
import { Posts as PostsComponent } from "../../components/posts/Posts";
import { Main } from "../../components/main/Main";

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Main />
      <PostsComponent />
    </div>
  );
};

export default Posts;
