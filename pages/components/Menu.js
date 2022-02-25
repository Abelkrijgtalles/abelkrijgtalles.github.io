import Link from "next/link";
import Head from "next/head";

const Menu = () => {
    return (
        <>
        <Head>
            <title>Navigatie menu | Abel krijgt alles</title>
        </Head>
        <div className="menu">
            <ul className="menuonderdelen">
                <li className=""><Link href="/"><a><h1>Homepagina</h1></a></Link></li>
                <li className=""><Link href="/videos"><a><h1>Nieuwste video&apos;s</h1></a></Link></li>
                <li className=""><Link href="/blog"><a><h1>Blog</h1></a></Link></li>
                <li className=""><Link href="/abelshoekje"><a><h1>Abels Hoekje</h1></a></Link></li>
            </ul>
        </div>
        </>
    );
}
 
export default Menu;