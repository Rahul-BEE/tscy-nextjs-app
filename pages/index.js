import Head from "next/head";
import { BannerSection, SustainableFeatures, Villaplans } from "../components";
import Newssection from "../components/Homepage/Newssection";
import styles from "../styles/home.module.scss";
import axios from "../utils/axios";
import { useEffect, useState } from "react";
import qs from "qs";
export default function Home({ villas }) {
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    if (typeof window !== undefined) {
      setLanguage(
        JSON.parse(localStorage.getItem("language"))
          ? JSON.parse(localStorage.getItem("language"))
          : "en"
      );
    }
  }, []);
  return (
    <div className={styles.app__home}>
      <BannerSection />
      <SustainableFeatures />
      <Villaplans data={villas} />
      <Newssection />
    </div>
  );
}

export async function getServerSideProps(context) {
  const language = context.query?.locale ? context.query?.locale : "en";
  let query = "";
  const populate = {
    villatype: {
      field: ["type"],
    },
    villaimage: {
      populate: "*",
    },
  };
  query = qs.stringify({
    populate: populate,
  });
  const response = await axios({
    method: "get",
    url: `/villas?locale=${language}&${query}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.STRAPI_API_TOKEN,
    },
  });

  return {
    props: {
      villas: response.data.data,
    },
  };
}
