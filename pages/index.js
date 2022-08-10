import Head from "next/head";
import {
  BannerSection,
  Location,
  Masterplan,
  SustainableFeatures,
  Villaplans,
} from "../components";
import Newssection from "../components/Homepage/Newssection";
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
    <div className={styles.app__home}>
      <BannerSection />
      <SustainableFeatures />
      <Masterplan />
      <Location />
      <Villaplans />
      <Newssection />
    </div>
  );
}

// export async function getStaticProps(context) {
//   const { locale } = context;
//   const language = locale;
//   let query = "";
//   const populate = {
//     villatype: {
//       field: ["type"],
//     },
//     villaimage: {
//       populate: "*",
//     },
//   };
//   query = qs.stringify({
//     populate: populate,
//   });
//   const response = await axios({
//     method: "get",
//     url: `/villas?locale=${language}&${query}`,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + process.env.STRAPI_API_TOKEN,
//     },
//   });

//   return {
//     props: {
//       villas: response.data.data,
//     },
//   };
// }
