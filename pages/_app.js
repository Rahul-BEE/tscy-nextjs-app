import "bootstrap/scss/bootstrap.scss";
import "../styles/globals.scss";
import "../styles/arabic.scss";
import { AppWrapper } from "../context/AppContext";
import { Header, Footer } from "../components";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppWrapper>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppWrapper>
    </>
  );
}

export default MyApp;
