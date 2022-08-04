import Image from "next/image";
import styles from "../../styles/home.module.scss";
import { motion } from "framer-motion";
import Polygon from "../../public/Svg/Polygon.svg";
const Bannersection = ({ banner }) => {
  return (
    <div className={styles.app__bannerSection}>
      <Image
        src="/Images/map-pic.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 50%"
        quality={"100"}
        priority
        alt="The sustainable city image"
      />

      <motion.div
        className={`${styles.app__banner_polygon1}`}
        animate={{ y: [10, 0, 10] }}
        transition={{
          type: "spring",
          stiffness: 10,
          repeat: Infinity,
          duration: 2,
        }}>
        <Image src={"/Svg/Polygon.svg"} layout="fill" priority />
      </motion.div>
      <motion.div
        className={`${styles.app__banner_polygon2}`}
        animate={{ y: [10, 0, 10] }}
        transition={{
          type: "spring",
          stiffness: 10,
          repeat: Infinity,
          duration: 2,
        }}>
        <Polygon />
      </motion.div>
    </div>
  );
};

export default Bannersection;
