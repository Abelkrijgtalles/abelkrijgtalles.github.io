import Link from "next/link";

const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright Abel krijgt alles { date }. Met liefde gemaakt door Abel van Hulst. Source code: <Link href="https://abelr.tk/akaw"><a>abelr.tk/akaw</a></Link>.</p>
        </footer>
    );
}
 
export default Footer;