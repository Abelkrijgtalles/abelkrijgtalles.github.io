import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/">
                    <Image src="/Logo.png" width={128} height={128} alt="Abel krijgt alles logo" />
                </Link>
            </div>
            <Link href="/"><a>Homepagina</a></Link>
            <Link href="/videos"><a>Nieuwste video&apos;s</a></Link>
            <Link href="/abelshoekje"><a>Abels Hoekje</a></Link>
        </nav>
    );
}

export default NavBar;