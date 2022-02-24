import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Abel krijgt alles</title>
      </Head>
      <div className="content">
        <h1 className={styles.welkom}>Welkom op de Abel krijgt alles website</h1>
      </div>
    </>
  );
}

export default Home;