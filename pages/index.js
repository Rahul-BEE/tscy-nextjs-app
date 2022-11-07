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
        language={lan.language === 1 ? "en" : "ar"}
      />

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
