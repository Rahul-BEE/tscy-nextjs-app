import Head from "next/head";
import { BannerSection, SustainableFeatures } from "../components";
import Newssection from "../components/Homepage/Newssection";
import styles from "../styles/home.module.scss";
export default function Home() {
  return (
    <div className={styles.app__home}>
      <BannerSection />
      <SustainableFeatures />
      <Newssection />
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
