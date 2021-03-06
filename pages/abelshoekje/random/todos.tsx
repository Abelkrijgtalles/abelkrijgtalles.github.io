import styles from '../../../styles/Mensen.module.css'
import Head from 'next/head';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {

    const res = await fetch('http://jsonplaceholder.typicode.com/todos');
    const data = await res.json();

    return {
        props: { mensen: data }
    }

}

const Mensen = ({ mensen }) => {
    return (
        <>
            <Head>
                <title>Todo&apos;s | Abel krijgt alles</title>
            </Head>
            <div className='content'>
                <h1>Dit zijn random todo&apos;s:</h1>
                {mensen.map(mens => (
                    <h3 className={styles.single} key={mens.id}>{ mens.title }</h3>
                ))}
            </div>
        </>
    );
}

export default Mensen;