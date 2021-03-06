import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map(mens => {
        return {
            params: { id: mens.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://jsonplaceholder.typicode.com/posts/' + id);
    const data = await res.json();

    return {
        props: { mens: data }
    }
}

const Persoon = ({ mens }) => {
    return (
        <>
            <Head>
                <title>{mens.title} | Abel krijgt alles</title>
            </Head>
            <div className="content">
                <h1>{ mens.title }</h1>
                <p>{ mens.body }</p>
            </div>
        </>
    );
}

export default Persoon