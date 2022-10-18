import React from "react";
import Newssection from "../Homepage/Newssection";
import styles from "../../styles/newspage.module.scss";
import Image from "next/image";
import useLanguage from "../../utils/useLanguage";
import Link from "next/link";
function NewsPage() {
  const lan = useLanguage();
  const ar = lan.newssection.post
  return (
    <div className={styles.news_main_page}>
      <Newssection />

      <div className={styles.hero_container}>
        <div className={styles.second_heading}>
          <p>Know more about us in our</p>
          <h2>LATEST STORIES</h2>

          <div className={styles.container_boxs}>
            {ar.map((e,index) => (
              <Link href={`news/${e.slug}`} passHref>
              <a>
              <div className={styles.box} key={index}>
                <div>
                  <Image
                  className={styles.test_box}
                    src={e.image}
                    width={900}
                    height={500}
                    layout="responsive"
                  />
                </div>
                <div className={styles.content}>
                  <p>- {e.city}, {e.country}</p>
                  <p className={styles.description}>
                  {e.heading}
                  </p>
                  <p> {e.date}</p>
                </div>
              </div>
              </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
