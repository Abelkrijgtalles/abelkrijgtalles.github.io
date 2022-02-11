import Head from "next/head";

export const getStaticPaths = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/users');
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
    const res = await fetch('http://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { mens: data }
    }
}

const Persoon = ({ mens }) => {
    return (
        <>
            <Head>
                <title>{mens.name} | Abel krijgt alles</title>
            </Head>
            <div>
                <h1>{mens.name} AKA {mens.username}</h1>
                <h6><i>{mens.company.bs}</i></h6>
                <p>E-mail: {mens.email}</p>
                <p>Website: {mens.website}</p>
            </div>
        </>
    );
}

export default Persoon