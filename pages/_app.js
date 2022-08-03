import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import { Header, Footer } from "../components";
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Header /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
