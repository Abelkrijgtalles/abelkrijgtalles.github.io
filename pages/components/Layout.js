import Footer from "./Footer";
import NavBar from "./NavBar";
import { useEffect } from "react";

const Layout = ({ children }) => {
    useEffect(() => {
        console.log('Hoi, dit is met liefde gemaakt door Abel')
    }, [])
    return (
        <div className="content">
            <NavBar/>
            { children }
            <Footer/>
        </div>
    );
}
 
export default Layout;