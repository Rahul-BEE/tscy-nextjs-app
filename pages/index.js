import Head from "next/head";
import {
  BannerSection,
  Location,
  Masterplan,
  Partners,
  SustainableFeatures,
  Villaplans,
  Newssection,
  HeadComponent,
  RegisterModal,
} from "../components";
import styles from "../styles/home.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useLanguage from "../utils/useLanguage";
import Browsercompatibility from "../components/Homepage/BrowserCompatibility/Browsercompatibility";
export default function Home() {
  const [language, setLanguage] = useState("en");
  const lan = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [bshowModal, setBShowModal] = useState(false);

  const location = useRouter();
  const [isMobile, setisMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== undefined) {
      setisMobile(window.innerWidth < 700);
      setLanguage(
        JSON.parse(localStorage.getItem("language"))
          ? JSON.parse(localStorage.getItem("language"))
          : "en"
      );
    }
  }, [location.pathname]);

  const modalTimer = function () {
    console.log("hey i am called");
    setTimeout(() => {
      setShowModal(true);
      sessionStorage.setItem("modalshow", "true");
    }, 5000);
  };

  const browserCompact = function () {
    setTimeout(() => {
      setBShowModal(true);
      sessionStorage.setItem("bmodalshow", "true");
    }, 1000);
  };
  useEffect(() => {
    const browser = navigator.userAgent;
    if (
      browser.indexOf("Firefox") !== -1 &&
      sessionStorage.getItem("bmodalshow") !== "true"
    ) {
      browserCompact();
    } else {
      setBShowModal(false);
      clearTimeout(browserCompact);
      if (sessionStorage.getItem("modalshow")) {
        clearTimeout(modalTimer);
      } else {
        modalTimer();
      }
    }
  }, []);

  return (
    <>
      <HeadComponent
        title={lan.seo.home.title}
        description={lan.seo.home.description}
        og={lan.seo.home.og}
        keyword={lan.seo.newspage.keyword}
        canonicaltag={lan.seo.home.canonicaltag}
        language={lan.language === 1 ? "en" : "ar"}>
        <link
          rel="alternate"
          href={"https://www.thesustainablecity-yiti.com/ar"}
          hrefLang={"ar"}
        />
        <link
          rel="alternate"
          href={"https://www.thesustainablecity-yiti.com/"}
          hrefLang={"en"}
        />
        <link
          rel="alternate"
          href={"https://www.thesustainablecity-yiti.com/"}
          hrefLang="x-default"
        />
        <script type="application/ld+json">
          {`{
  "@context": "http://www.schema.org",
  "@type": "Organization",
  "name": "The Sustainable City -Yiti",
  "url": "https://thesustainablecity-yiti.com/",
  "logo": "https://thesustainablecity-yiti.com/Logos/tsc-logo.svg",
  "image": "https://thesustainablecity-yiti.com/Images/masterplanimage.png",
  "description": "Diamond Developers and Omran have joined forces to develop a world-class project that meets the highest standards of social, environmental, and economic sustainability.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mina Al Sultan Qaboos Centre Yiti",
    "addressLocality": "Yiti",
    "addressRegion": "Yiti",
    "addressCountry": "Oman"
  },
    "geo": {
    "@type": "GeoCoordinates",
    "latitude": "23.625585158676095",
    "longitude": "58.578837255823366"
  },
  "hasMap": "https://www.google.com/maps/place/The+Sustainable+City+-+Yiti+Experience+Center+(TSCY)/@23.6254328,58.5788909,17z/data=!3m1!4b1!4m5!3m4!1s0x3e91f7fd475123d5:0xdf8ff3ebfaec4d72!8m2!3d23.6254328!4d58.5788909",
  "openingHours": "Mo, Tu, We, Th, Su 08:30-17:30",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+968 800 33 33",
    "contactType": "general"
  }
}`}
        </script>
      </HeadComponent>

      <main className={styles.app__home}>
        <RegisterModal show={showModal} setshowmodal={setShowModal} />
        <Browsercompatibility
          show={bshowModal}
          setshowmodal={setBShowModal}
          modalTimer={modalTimer}
        />
        <BannerSection />
        <SustainableFeatures />
        <Masterplan />
        <Location />
        <Villaplans />
        <Newssection pagename={"NewsHomePage"} />
        <Partners />
      </main>
    </>
  );
}
