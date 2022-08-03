import "bootstrap/scss/bootstrap.scss";
import "../styles/globals.scss";
import { Header, Footer } from "../components";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
