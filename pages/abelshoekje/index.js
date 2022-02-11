import Head from "next/head";
import styles from '../../styles/Mensen.module.css'
import Link from "next/link";

const AbelsHoekje = () => {
    return (
        <>
            <Head>
                <title>Abels Hoekje | Abel krijgt alles</title>
            </Head>
            <h1>Welkom in Abels Hoekje!</h1>
            <p>Hier kan je dingen die Abel heeft gemaakt vinden</p>
            <Link href={'/abelshoekje/random/mensen'}><a className={styles.single}>Mensen</a></Link>
        </>
    );
}

export default AbelsHoekje;