import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Socials = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, [])
    return (
        <div>
            <h1 className={styles.groot}>Ik heb geen zin om hier iets te zetten. Kijk in de beschrijving van een video ofzo. Kom terug in idk om te kijken of er wel links staan.</h1>
            <h2 className={styles.medium}>Je gaat terug naar de <Link href="/"><a>homepagina</a></Link> in 5 seconden</h2>
        </div>
    );
}

export default Socials;