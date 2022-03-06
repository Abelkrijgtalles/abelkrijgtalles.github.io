import Head from "next/head";
import styles from '../../../styles/Mensen.module.css'
import Link from "next/link";

const AbelsHoekje = () => {
    return (
        <>
            <Head>
                <title>Pagina&apos;s voor mensen | Abel krijgt alles</title>
            </Head>
            <div className="content">
                <h1>Pagina&apos;s voor mensen</h1>
                <p>Hier zijn pagina&apos;s speciaal voor sommige mensen</p>
                <Link href={'/abelshoekje/voormensen/tijn'}><a className={styles.single}><h3>Tijn</h3></a></Link>
            </div>
        </>
    );
}

export default AbelsHoekje;