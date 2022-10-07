import React from "react";
import Newssection from "../Homepage/Newssection";
import styles from "../../styles/newspage.module.scss";
import Image from "next/image";
function NewsPage() {
  const ar = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.news_main_page}>
      <Newssection />

      <div className={styles.hero_container}>
        <div className={styles.second_heading}>
          <p>Know more about us in our</p>
          <h4>Latest stories</h4>

          <div className={styles.container_boxs}>
            {ar.map((index) => (
              <div className={styles.box} key={index}>
                <div>
                  <Image
                    src="/Images/villaplansectionimg.png"
                    width={900}
                    height={500}
                    layout="responsive"
                  />
                </div>
                <div className={styles.content}>
                  <p>- Muscat, Oman</p>
                  <p className={styles.description}>
                    Britain starts to open up, Ramadan begins. It feels like
                    perfect timing, with Russia cheif army scrubbling over the
                    issue.
                  </p>
                  <p>April 22, 2012</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
