import styles from '../../../../styles/Mensen.module.css'
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export const getStaticProps = async () => {

    const res = await fetch('http://jsonplaceholder.typicode.com/photos');
    const data = await res.json();

    return {
        props: { mensen: data }
    }

}

const Mensen = ({ mensen }) => {
    return (
        <>
            <Head>
                <title>Random foto&apos;s | Abel krijgt alles</title>
            </Head>
            <div>
                <h1>Dit zijn random foto&apos;s:</h1>
                {mensen.map(mens => (
                    <Link key={mens.id} href={'/abelshoekje/random/fotos/' + mens.id}>
                        <a className={styles.single}>
                            <Image src={mens.thumbnailUrl} height={"50"} width={"50"}/>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Mensen;