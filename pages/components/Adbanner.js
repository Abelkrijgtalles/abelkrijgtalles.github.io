
import React, { useEffect } from "react";

const AdBanner = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
    <ins className="adsbygoogle adbanner-customize" style={{ display: "block" }} data-ad-client="ca-pub-3986699835905370" data-ad-slot="8779152308"/>
  );
};

export default AdBanner;