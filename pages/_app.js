import "bootstrap/scss/bootstrap.scss";
import "../styles/globals.scss";
import { AppWrapper } from "../context/AppContext";
import { Header, Footer } from "../components";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../utils/ga";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    hotjar.initialize(3224277, 6);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
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
