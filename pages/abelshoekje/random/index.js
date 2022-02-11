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
                <Link href={'/abelshoekje/random/posts'}><a className={styles.single}><h3>Posts (Latijn)</h3></a></Link>
                <Link href={'/abelshoekje/random/fotos'}><a className={styles.single}><h3>Foto&apos;s (Niet zo handig als je traag internet hebt)</h3></a></Link>
                <Link href={'/abelshoekje/random/todos'}><a className={styles.single}><h3>Todo&apos;s (Latijn)</h3></a></Link>
            </div>
        </>
    );
}

export default Random;