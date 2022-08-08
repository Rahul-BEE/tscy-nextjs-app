import React from "react";
import styles from "../../../styles/newssection.module.scss";

function NewsMobile() {
  return (
    <div className={styles.hero_mobile_box}>
      <div className={styles.test_box}>
        <div className={styles.heading_mobile}>
          <h2>ress and news</h2>
          <p>Read here </p>
        </div>

        <div className={styles.bottom_text}>
          <h3>
            Britain starts to open up, Ramadan begins. It feels like perfect
            timing, with Russia cheif army scrubbling over the issue.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default NewsMobile;
