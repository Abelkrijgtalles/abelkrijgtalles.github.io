import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return (
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
                <li><Link href="/blog"><a>Blog</a></Link></li>
                <li><Link href="/abelshoekje"><a>Abels Hoekje</a></Link></li>
            </ul>
            <Link href="/components/Menu">
                <a>
                    <div className="burger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </a>
            </Link>
        </nav>
    );
}

export default NavBar;