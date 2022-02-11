import styles from '../../../../styles/Mensen.module.css'
import Link from 'next/link';
import Head from 'next/head';

export const getStaticProps = async () => {

    const res = await fetch('http://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: { mensen: data }
    }

}

const Mensen = ({ mensen }) => {
    return (
        <>
            <Head>
                <title>Random posts | Abel krijgt alles</title>
            </Head>
            <div>
                <h1>Dit zijn random posts:</h1>
                {mensen.map(mens => (
                    <Link key={mens.id} href={'/abelshoekje/random/posts/' + mens.id}>
                        <a className={styles.single}>
                            <h3>{mens.title}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Mensen;