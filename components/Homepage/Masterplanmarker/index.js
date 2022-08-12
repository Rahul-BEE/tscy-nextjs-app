import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/home.module.scss";
import useLanguage from "../../../utils/useLanguage";
import { motion } from "framer-motion";
const Masterplanmarker = () => {
  const lan = useLanguage();
  const pos = lan.masterplan.markers;
  return (
    <div className={styles.masterplan_markerLayer}>
      {pos.length > 0 &&
        pos.map((item, index) => (
          <div
            className={`${styles.masterplan_marker} ${item.className}`}
            key={`${index}_${item.name}`}>
            <p>{item.name}</p>
            <Link href="/id">
              <motion.a
                className={styles.markeranchor}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                }}
                style={{ cursor: "pointer" }}>
                <Image src="/Images/masterplanmarker.png" layout="fill" />
              </motion.a>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Masterplanmarker;
