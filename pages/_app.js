import "bootstrap/scss/bootstrap.scss";
import "../styles/globals.scss";
import { AppWrapper } from "../context/AppContext";
import { Header, Footer } from "../components";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3224277, 6);
    TagManager.initialize({ gtmId: "GTM-TSCHXJW" });
  }, []);

  return (
    <div>
      <AppWrapper>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppWrapper>
    </div>
  );
}

export default MyApp;
