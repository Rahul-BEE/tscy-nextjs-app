import { useState } from "react";
import styles from "../../../styles/masterplan.module.scss";
import useLanguage from "../../../utils/useLanguage";
import Image from "next/image";
const MasterplanPopup = ({ item }) => {
  const lan = useLanguage();
  console.log(item, lan.masterplan.markers);
  const [data, _] = useState(lan.masterplan.markers[item]);
  return (
    <div
      className={styles.masterplanpopup}
      xmlns="http://www.w3.org/1999/xhtml">
      {data && (
        <div className={styles.popupinnercard}>
          <Image src={data.icon} width="60" height="65" layout="responsive" />
        </div>
      )}
    </div>
  );
};

export default MasterplanPopup;
