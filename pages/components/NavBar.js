import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/Logo.png" width={128} height={128} alt="Abel krijgt alles logo"/>
            </div>
            <Link href="/"><a>Homepagina</a></Link>
        </nav>
    );
}
 
export default NavBar;