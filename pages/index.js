import Head from "next/head";
import {
  BannerSection,
  Location,
  Masterplan,
  Partners,
  SustainableFeatures,
  Villaplans,
  Newssection,
} from "../components";
import styles from "../styles/home.module.scss";
import axios from "../utils/axios";
import { useEffect, useState } from "react";
import qs from "qs";
import { useRouter } from "next/router";
export default function Home() {
  const [language, setLanguage] = useState("en");
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
      <Head>
        <meta name="viewport" content="width=device-width user-scalable=1" />
      </Head>
      <div className={styles.app__home}>
        <BannerSection />
        <SustainableFeatures />
        <Masterplan />
        <Location />
        <Villaplans />
        <Newssection />
        <Partners />
      </div>
    </>
  );
}
