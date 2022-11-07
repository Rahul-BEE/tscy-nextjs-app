import "bootstrap/scss/bootstrap.scss";
import "../styles/globals.scss";
import { AppWrapper } from "../context/AppContext";
import { Header, Footer } from "../components";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3224277, 6);
  }, []);

  return (
    <div>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TSCHXJW');`}</Script>
      <AppWrapper>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppWrapper>
    </div>
  );
}

export default MyApp;
