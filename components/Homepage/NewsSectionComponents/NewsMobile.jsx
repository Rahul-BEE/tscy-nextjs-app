import React from "react";
import styles from "../../../styles/newssection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function NewsMobile({ data }) {
  return (
    <div className={styles.hero_mobile_box}>
      <div className={`${styles.hero_text_center}`}>
          <h2 style={{marginBottom: "3.5rem"}}>press and news</h2>
        </div>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        className={styles.mySwiper}>
        {data.map((e, index) => (
          <SwiperSlide key={`${index}_newmob`}>
            <div className={styles.test_box}>
              <div className={styles.bottom_text}>
              <h3 style={{color:"black"}}>{e.title}</h3>
            </div>
              <p>Read here </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

  );
}

export default NewsMobile;
