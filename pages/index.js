import Head from "next/head";
import { BannerSection } from "../components";
import styles from "../styles/home.module.scss";
export default function Home() {
  return (
    <div className={styles.app__home}>
      <BannerSection />
    </div>
  );
}
