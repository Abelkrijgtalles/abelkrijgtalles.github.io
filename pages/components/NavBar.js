import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const NavBar = () => {
    return (
        <>
        <nav>
            <div className="logo">
                <Link href="/">
                    <a>
                        <Image src="/Logo.png" width={64} height={64} alt="Abel krijgt alles logo" />
                    </a>
                </Link>
            </div>
            <ul className="nav-links">
                <li><Link href="/"><a>Homepagina</a></Link></li>
                <li><Link href="/videos"><a>Nieuwste video&apos;s</a></Link></li>
                <li><Link href="/abelshoekje"><a>Abels Hoekje</a></Link></li>
            </ul>
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
        <Script src="/nav.js"></Script>
        </>
    );
}

export default NavBar;