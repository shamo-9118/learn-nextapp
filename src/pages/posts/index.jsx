import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Footer } from "../../components/Footer";
import { Posts as PostsComponent } from "../../components/Posts";
import { Main } from "../../components/Main";

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main title="Index"></Main>
      <PostsComponent />
      <Footer></Footer>
    </div>
  );
};

export default Posts;
