import Image from "next/image";
import styles from "../../styles/home.module.scss";
import { motion } from "framer-motion";
import Polygon from "../../public/Svg/Polygon.svg";
const Bannersection = ({ banner }) => {
  return (
    <div className={styles.app__bannerSection}>
      <Image
        src="/Images/map-pic.png"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 50%"
        quality={"100"}
        priority
        alt="The sustainable city image"
      />

      <div className={`${styles.app__banner_polygon1}`}>
        <Image src={"/Svg/Polygon.svg"} layout="fill" priority />
      </div>
      <div className={`${styles.app__banner_polygon2}`}>
        <Polygon />
      </div>
    </div>
  );
};

export default Bannersection;
