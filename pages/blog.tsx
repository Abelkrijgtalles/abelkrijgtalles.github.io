import styles from '../styles/Blog.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
    return (
        <div className={styles.row}>
            <div className='leftcolumn'>
                <div className={styles.card}>
                    <h2><Link href="https://abelkrijgtalles.nl"><a>abelkrijgtalles.nl</a></Link> is nu beter/meer ondersteunend voor oude webbrowser!</h2>
                    <h5>6 Maart 2022</h5>
                    <p>Ik ga nu misschien een beetje &quot;nerdie&quot; praten, maar als je daar oké mee bent laten we verder gaan. Door dat ik &quot;TypeScript&quot; gebruik (TypeScript is een soort van JavaScript++ van Microsoft) kan ik zeggen, hé, zorg dat de code werkt op elke JavaScript versie vanaf 1999.</p>
                </div>
                <div className={styles.card}>
                    <h2><Link href={"https://abelkrijgtalles.nl"}><a>abelkrijgtalles.nl</a></Link> is nu ook te vinden op Google!</h2>
                    <h5>6 Maart 2022</h5>
                    <div className={styles.fakeimg}><Image src='/AbelkrijgtallesGoogle.png' width="384" height="128"></Image></div>
                    <p>Als je Abel krijgt alles zoekt op Google (Hier boven aangegeven) dan bij het 4e zoek resultaat zie je gewoon dit!</p>
                </div>
                <div className={styles.card}>
                    <h2><Link href={"https://abelkrijgtalles.nl"}><a>abelkrijgtalles.nl</a></Link> werkt nu!</h2>
                    <h5>26 Februari 2022</h5>
                    <p>Als je nu naar <Link href="https://abelkrijgtalles.nl"><a>abelkrijgtalles.nl</a></Link> gaat, werkt het!</p>
                </div>
                <div className={styles.card}>
                    <h2><Link href={"https://abelkrijgtalles.nl"}><a>abelkrijgtalles.nl</a></Link></h2>
                    <h5>26 Februari 2022</h5>
                    <p>Ik ben nu bezig <Link href={"https://abelkrijgtalles.nl"}><a>abelkrijgtalles.nl</a></Link> klaar te maken zodat ik het onder andere de url van de website kan maken.<br />Deze link wil dan nog steeds werken, maar <Link href={"https://abelkrijgtalles.nl"}><a>abelkrijgtalles.nl</a></Link> werkt dan ook.</p>
                </div>
                <div className={styles.card}>
                    <h2>Dit is het logo</h2>
                    <h5>25 Februari 2022</h5>
                    <div className={styles.fakeimg}><Image src='/Logo.png' width="128" height="128"></Image></div>
                    <p>Da&apos;s leuk hè</p>
                </div>
                <div className={styles.card}>
                    <h2>Hallo dit is de eerste post</h2>
                    <h5>25 Februari 2022</h5>
                    <p>Maar dit is puur iets van een test ofzo</p>
                </div>
            </div>
        </div>
    );
}

export default Blog;