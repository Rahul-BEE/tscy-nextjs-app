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
} from "../components";
import styles from "../styles/home.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useLanguage from "../utils/useLanguage";
export default function Home() {
  const [language, setLanguage] = useState("en");
  const lan = useLanguage();
  const location = useRouter();
  useEffect(() => {
    if (typeof window !== undefined) {
      setLanguage(
        JSON.parse(localStorage.getItem("language"))
          ? JSON.parse(localStorage.getItem("language"))
          : "en"
      );
    }
  }, [location.pathname]);
  return (
    <>
      <HeadComponent
        title={lan.seo.home.title}
        description={lan.seo.home.description}
        og={lan.seo.home.og}
      />

      <div className={styles.app__home}>
        <BannerSection />
        <SustainableFeatures />
        <Masterplan />
        <Location />
        <Villaplans />
        <Newssection pagename={"NewsHomePage"} />
        <Partners />
      </div>
    </>
  );
}
