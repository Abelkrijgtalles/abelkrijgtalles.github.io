import Link from "next/link";

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Abel krijgt alles</h1>
            </div>
            <Link href="/"><a>Homepagina</a></Link>
        </nav>
    );
}
 
export default NavBar;