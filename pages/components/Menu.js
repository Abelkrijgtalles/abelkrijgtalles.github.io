import Link from "next/link";

const Menu = () => {
    return (
        <div className="menu">
            <ul className="menuonderdelen">
                <li className=""><Link href="/"><a><h1>Homepagina</h1></a></Link></li>
                <li className=""><Link href="/videos"><a><h1>Nieuwste video&apos;s</h1></a></Link></li>
                <li className=""><Link href="/abelshoekje"><a><h1>Abels Hoekje</h1></a></Link></li>
            </ul>
        </div>
    );
}
 
export default Menu;