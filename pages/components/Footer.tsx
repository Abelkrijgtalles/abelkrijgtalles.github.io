import Link from "next/link";

const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright Abel krijgt alles { date }. Met liefde gemaakt door Abel van Hulst. Source code: <Link href="https://abelr.tk/akaw"><a>abelr.tk/akaw</a></Link>. Mail naar <Link href="mailto:info@abelkrijgtalles.nl"><a>info@abelkrijgtalles.nl</a></Link></p>
        </footer>
    );
}
 
export default Footer;