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
export default function Home() {
  const [language, setLanguage] = useState("en");
  const lan = useLanguage();
  const [showModal, setShowModal] = useState(false);
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
    setTimeout(() => {
      setShowModal(true);
      sessionStorage.setItem("modalshow", "true");
    }, 5000);
  };
  useEffect(() => {
    if (sessionStorage.getItem("modalshow")) {
      clearTimeout(modalTimer);
    } else {
      modalTimer();
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
  "hasMap": "https://www.google.com/maps/place/The+Sustainable+City+-+Yiti+Experience+Center+(TSCY)/@23.6254328,58.5788909,17z/data=!3m1!4b1!4m5!3m4!1s0x3e91f7fd475123d5:0xdf8ff3ebfaec4d72!8m2!3d23.6254328!4d58.5788909",
  "openingHours": "Mo, Tu, We, Th, Fr 08:30-17:30",
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
