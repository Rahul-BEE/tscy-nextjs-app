import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="192x192" />
        <meta name="robots" content="all" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" sizes="182x182" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Tajawal:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TSCHXJW"
            height="0"
            width="0"
            style="display:none;visibility:hidden"></iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
