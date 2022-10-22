import React from "react";
import Newssection from "../Homepage/Newssection";
import styles from "../../styles/newspage.module.scss";
import Image from "next/image";
import useLanguage from "../../utils/useLanguage";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
function NewsPage() {
  const lan = useLanguage();
  const ar = lan.newssection.post
  return (
    <div className={styles.news_main_page}>
      <Newssection />

      <div className={styles.hero_container}>
        <div className={styles.second_heading}>
          <Row className="headingRow">
          <Col>
            {/* <h5 className="sectionsubHeading">{lan.villaplansection.title1}</h5> */}
            <h2 className="sectionmainHeading">
              {lan.commontext.stories}
            </h2>
          </Col>
        </Row>

          <div className={styles.container_boxs}>
            {ar.map((e,index) => (
              <Link href={`news/${e.slug}`} key={index} passHref>
              <a>
              <div className={styles.box}>
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
