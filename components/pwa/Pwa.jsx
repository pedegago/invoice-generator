import { useEffect } from "react";
import Head from "next/head";

function Pwa({ business, themeColor }) {
    useEffect(() => {
        if ("serviceWorker" in navigator) {
            window.addEventListener("load", () => {
                navigator.serviceWorker
                    .register("/sw.js")
                    .then((registration) => {
                        console.info("Service worker registered.");
                    })
                    .catch((e) => {
                        console.error("Service worker error:", e);
                    });
            });
        }
    }, []);

    return (
        <Head>
            <meta name="msapplication-TileColor" content={themeColor} />
            <meta name="application-name" content={business} />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content={themeColor}
            />
            <meta name="apple-mobile-web-app-title" content={business} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="theme-color" content={themeColor} />
            <link rel="manifest" href="/manifest.json" />
            <link rel="shortcut icon" href="/images/favicon.ico" />
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="/images/icon-72.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="192x192"
                href="/images/icon-192.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="512x512"
                href="/images/icon-512.png"
            />
            <link
                rel="icon"
                sizes="72x72"
                href="/images/icon-72.png"
                type="image/png"
            />
            <link
                rel="icon"
                sizes="192x192"
                href="/images/icon-192.png"
                type="image/png"
            />
            <link
                rel="icon"
                sizes="512x512"
                href="/images/icon-512.png"
                type="image/png"
            />
        </Head>
    );
}

export default Pwa;
