import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Mensen.module.css'

const Random = () => {
    return (
        <>
            <Head>
                <title>Random dingen | Abel krijgt alles</title>
            </Head>
            <div>
                <h1>Random dingen</h1>
                <Link href={'/abelshoekje/random/mensen'}><a className={styles.single}><h3>Mensen</h3></a></Link>
            </div>
        </>
    );
}

export default Random;