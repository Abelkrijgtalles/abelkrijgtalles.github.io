import Head from "next/head";

export const getStaticPaths = async () => {
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

export const getStaticProps = async (context) => {
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
            <div>
                <h1>{ mens.body }</h1>
            </div>
        </>
    );
}

export default Persoon