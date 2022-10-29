import "bootstrap/scss/bootstrap.scss";
import "../styles/globals.scss";
import "../styles/arabic.scss";
import { AppWrapper } from "../context/AppContext";
import { Header, Footer } from "../components";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3224277, 6);
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
