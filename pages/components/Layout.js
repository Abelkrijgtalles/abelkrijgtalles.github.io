import Footer from "./Footer";
import NavBar from "./NavBar";
import { useEffect } from "react";
import Head from "next/head";

const Layout = ({ children }) => {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js');
        }
        console.log('Hoi, dit is met liefde gemaakt door Abel')
    }, [])
    return (
        <>
        <Head>
            <link rel="manifest" href="manifest.json"/>
            <link rel="icon" href="/favicon.ico"/>
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