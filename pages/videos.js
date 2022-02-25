import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Mensen.module.css'

export const getStaticProps = async () => {

    const res = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCKzup9N8BB-Z2DjFgKw4dtw&maxResults=50&order=date&key=AIzaSyBWAY365b2jYtXrCHlxfdC3rQfRB84okWE');
    const data = await res.json();

    const ressub = await fetch('https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UCKzup9N8BB-Z2DjFgKw4dtw&key=AIzaSyBWAY365b2jYtXrCHlxfdC3rQfRB84okWE')
    const datasub = await ressub.json();

    return {
        props: { mensen1: data.items, mensendata1: datasub.items }, revalidate: 86400,
    }

}

const Mensen = ({ mensen1, mensendata1 }) => {
    return (
        <>
            <Head>
                <title>Nieuwste video&apos;s | Abel krijgt alles</title>
            </Head>
            <div className='content'>
                <h1>Dit zijn de nieuwste video&apos;s van verschilende Abel krijgt alles:</h1>
                <p>Dit kan tot een dag duren voordat het update</p>
                <Link href={"https://abelr.tk/yt"}>
                    <a>
                        <h2>Klik hier om naar het kanaal te gaan</h2>
                    </a>
                </Link>
                <h2>Abonnees:</h2>
                {mensendata1.map(sub => (
                    <h3 key={sub.id}>{sub.statistics.subscriberCount}</h3>
                ))}
                {mensen1.map(mens => (
                    <Link key={mens.id.videoId} href={'https://youtube.com/watch?v=' + mens.id.videoId}>
                        <a className={styles.single}>
                            <Image src={mens.snippet.thumbnails.default.url} width={mens.snippet.thumbnails.default.width} height={mens.snippet.thumbnails.default.height} />
                            <h3>{mens.snippet.title}</h3>
                            <p>{mens.snippet.description}</p>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Mensen;