import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Abel krijgt alles</title>
      </Head>
      <div className="content">
        <h1 className={styles.welkom}>Welkom op de Abel krijgt alles website</h1>
        <h2 className={styles.medium}>Ik ben Abel, je kent me vast wel. Misschien niet, maar dat maakt niet uit. Dit is mijn website.</h2>
        <h2 className={styles.medium}>Hier kan je van alles doen: <Link href="/videos"><a>De nieuwste video&apos;s bekijken</a></Link>, <Link href="/blog"><a>mijn blog lezen</a></Link>, <Link href="/abelshoekje"><a>dingen die ik zelf heb gemaakt bekijken</a></Link> en nog veel meer!</h2>
      </div>
    </>
  );
}

export default Home;