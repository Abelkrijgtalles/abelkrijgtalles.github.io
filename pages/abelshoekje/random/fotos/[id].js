import Head from "next/head";
import Image from "next/image";

export const getStaticPaths = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/photos');
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
    const res = await fetch('http://jsonplaceholder.typicode.com/photos/' + id);
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
                <Image src={mens.url} width={"600"} height={"600"}/>
            </div>
        </>
    );
}

export default Persoon