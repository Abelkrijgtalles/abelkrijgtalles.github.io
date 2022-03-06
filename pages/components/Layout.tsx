import Footer from "./Footer";
import NavBar from "./NavBar";
import { useEffect } from "react";
import Head from "next/head";

const Layout = ({ children }) => {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js');
        }
    }, [])
    return (
        <>
        <Head>
            <link rel="manifest" href="manifest.json"/>
        </Head>
        <div className="content">
            <NavBar/>
            { children }
            <Footer/>
        </div>
        </>
    );
}
 
export default Layout;