const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright Abel krijgt alles { date }</p>
        </footer>
    );
}
 
export default Footer;