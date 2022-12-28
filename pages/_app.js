import "bootstrap/scss/bootstrap.scss";
import "../styles/globals.scss";
import { AppWrapper } from "../context/AppContext";
import { Header, Footer } from "../components";
import { hotjar } from "react-hotjar";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import useLanguage from "../utils/useLanguage";

function MyApp({ Component, pageProps }) {
  const [showBanner, setShowBanner] = useState(false);
  const lan = useLanguage();
  useEffect(() => {
    if (localStorage.getItem("acceptedCookies") === "true") {
      hotjar.initialize(3224277, 6);
      TagManager.initialize({ gtmId: "GTM-TSCHXJW" });
      return;
    } else if (localStorage.getItem("acceptedCookies") === "false") {
      window.hjSiteSettings = null;
      window.google_tag_manager = null;
      return;
    } else {
      setShowBanner(true);
    }
  }, [showBanner]);
  const handleAccept = () => {
    localStorage.setItem("acceptedCookies", "true");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("acceptedCookies", "false");
    setShowBanner(false);
  };
  return (
    <div>
      <AppWrapper>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppWrapper>
      <div className="consent-bannermain">
        {showBanner && (
          <div className="cookies-consent-banner">
            <p>{lan.cookiebanner.text}</p>
            <div className="btncontainer">
              <button onClick={handleAccept} className="accept">
                {lan.cookiebanner.accept}
              </button>
              <button onClick={handleDecline} className="decline">
                {lan.cookiebanner.decline}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyApp;
