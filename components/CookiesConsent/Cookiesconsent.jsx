import React, { useState, useEffect } from "react";
import styles from "../../styles/cookiesconsent.module.scss";
function CookiesConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const acceptedCookies = localStorage.getItem("acceptedCookies");
    if (!acceptedCookies) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("acceptedCookies", "true");
    setShowBanner(false);
    // Enable Google Analytics tracking
    // window.gtag("set", { cookie_expires: 30 });
    // window.gtag("event", "accept_cookies", { event_category: "cookie_banner" });
  };

  const handleDecline = () => {
    localStorage.setItem("acceptedCookies", "false");
    setShowBanner(false);
    // Disable Google Analytics tracking
    // window.gtag("config", "GTM-TSCHXJW", { cookie_expires: 0 });
  };

  return (
    showBanner && (
      <div className="cookies-consent-banner">
        <p>
          This site uses cookies to enhance your browsing experience. By
          continuing to use this site, you consent to the use of cookies.
        </p>
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDecline}>Decline</button>
      </div>
    )
  );
}

export default CookiesConsentBanner;
