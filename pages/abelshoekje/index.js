import Head from "next/head";
import styles from '../../styles/Mensen.module.css'
import Link from "next/link";

const AbelsHoekje = () => {
    return (
        <>
            <Head>
                <title>Abels Hoekje | Abel krijgt alles</title>
            </Head>
            <div className="content">
                <h1>Welkom in Abels Hoekje!</h1>
                <p>Hier kan je dingen die Abel heeft gemaakt vinden</p>
                <Link href={'/abelshoekje/random'}><a className={styles.single}><h3>Random dingen</h3></a></Link>
            </div>
        </>
    );
}

export default AbelsHoekje;