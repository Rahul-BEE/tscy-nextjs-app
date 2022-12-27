import "bootstrap/scss/bootstrap.scss";
import "../styles/globals.scss";
import { AppWrapper } from "../context/AppContext";
import { Header, Footer } from "../components";
import { hotjar } from "react-hotjar";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  const [showBanner, setShowBanner] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("acceptedCookies") === "true") {
      console.log("hi");
      hotjar.initialize(3224277, 6);
      TagManager.initialize({ gtmId: "GTM-TSCHXJW" });
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
            <p>
              This site uses cookies to enhance your browsing experience. By
              continuing to use this site, you consent to the use of cookies.
            </p>
            <div className="btncontainer">
              <button onClick={handleAccept} className="accept">
                Accept
              </button>
              <button onClick={handleDecline} className="decline">
                Decline
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyApp;
