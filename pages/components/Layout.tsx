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
                <link rel="manifest" href="manifest.json" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3986699835905370"
                    crossOrigin="anonymous"></script>
            </Head>
            <div className="content">
                <NavBar />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3986699835905370"
                    crossOrigin="anonymous"></script>
                <ins className="adsbygoogle"
                    data-ad-client="ca-pub-3986699835905370"
                    data-ad-slot="2542128588"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({ });
                </script>
                {children}
                <Footer />
            </div>
        </>
    );
}

export default Layout;