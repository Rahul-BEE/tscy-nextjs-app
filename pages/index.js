import Head from "next/head";
import { BannerSection, SustainableFeatures } from "../components";
import styles from "../styles/home.module.scss";
export default function Home() {
  return (
    <div className={styles.app__home}>
      <BannerSection />
      <SustainableFeatures />
    </div>
  );
}

export async function getStaticProps() {
  console.log("hi");
  return {
    props: {
      data: "Hello world",
    },
  };
}
