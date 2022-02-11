const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright Abel krijgt alles { date }. Met liefde gemaakt door Abel van Hulst</p>
        </footer>
    );
}
 
export default Footer;