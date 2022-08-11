import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home.module.scss";
import useLanguage from "../../utils/useLanguage";
const Masterplanmarker = () => {
  const lan = useLanguage();
  const pos = lan.masterplan.markers;
  return (
    <div className={styles.masterplan_markerLayer}>
      {pos.length > 0 &&
        pos.map((item, index) => (
          <div
            className={styles.masterplan_marker}
            style={{
              top: item.marker.top,
              left: item.marker.left,
            }}
            key={`${index}_${item.name}`}>
            <p>{item.name}</p>
            <Link href="/id">
              <a
                className={styles.markeranchor}
                style={{
                  width: item.marker.width,
                  height: item.marker.height,
                }}>
                <Image src="/Images/masterplanmarker.png" layout="fill" />
              </a>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Masterplanmarker;
