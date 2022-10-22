import React from "react";
import styles from "../../../styles/newssection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import useLanguage from "../../../utils/useLanguage";
function NewsMobile({ data }) {
  //hh  
  const lan = useLanguage();
  return (
    <div className={styles.hero_mobile_box}>
      <Row className="headingRow">
          <Col>
            {/* <h5 className="sectionsubHeading">{lan.villaplansection.title1}</h5> */}
            <h2 className="sectionmainHeading">
              {lan.commontext.press}
            </h2>
          </Col>
        </Row>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        className={styles.mySwiper}>
        {data.map((e, index) => (
          <SwiperSlide key={index}>
          <Link href={`news/${e.slug}`}  passHref>
            <div className={styles.test_box}>
              <Image
                className={styles.test_box}
                src={e.image}
                width={476}
                height={200}
                layout="responsive"
              />

              <div className={styles.bottom_text}>
                <h3 style={{ color: "black" }}>{e.heading}</h3>
              </div>
              <p>Read here </p>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NewsMobile;
