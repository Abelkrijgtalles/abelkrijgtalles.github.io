import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Abel krijgt alles</title>
      </Head>
      <div className="content">
        <h1 className={styles.groot}>Welkom op de Abel krijgt alles website</h1>
        <h2 className={styles.medium}>Ik ben Abel, je kent me vast wel. Misschien niet, maar dat maakt niet uit. Dit is mijn website.</h2>
        <h2 className={styles.medium}>Hier kan je van alles doen: <Link href="/videos"><a>De nieuwste video&apos;s bekijken</a></Link>, <Link href="/blog"><a>mijn blog lezen (bestaat nog niet)</a></Link>, <Link href="/abelshoekje"><a>dingen die ik zelf heb gemaakt bekijken</a></Link> en nog veel meer!</h2>
        <h1 className={styles.groot}>Social Media:</h1>
        <div className={styles.socialdiv}>
          <ul className={styles.social}>
            <li><Link href="https://abelr.tk/yt"><a><Image src="/Youtube.png" height="64" width="124" /></a></Link></li>
            <li><Link href="https://abelr.tk/dc"><a><Image src="/Discord.png" height="64" width="64" /></a></Link></li>
            <li><Link href="https://abelr.tk/ig"><a><Image src="/Instagram.png" height="64" width="64" /></a></Link></li>
            <li><Link href="/socials"><a><h2 className={styles.medium}><br/>meer...</h2></a></Link></li>
          </ul></div>
      </div>
    </>
  );
}

export default Home;