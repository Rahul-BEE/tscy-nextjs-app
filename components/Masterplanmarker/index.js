import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home.module.scss";
import useLanguage from "../../utils/useLanguage";
const Masterplanmarker = () => {
  const lan = useLanguage();
  const pos = lan.masterplan.markers[0].marker;
  return (
    <div
      className={styles.masterplan_marker}
      style={{
        top: pos.top,
        left: pos.left,
      }}>
      <p>{lan.masterplan.markers[0].name}</p>
      <Link href="/id">
        <a
          className={styles.markeranchor}
          style={{
            width: pos.width,
            height: pos.height,
          }}>
          <Image src="/Images/masterplanmarker.png" layout="fill" />
        </a>
      </Link>
    </div>
  );
};

export default Masterplanmarker;
