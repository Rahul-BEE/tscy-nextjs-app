import React from "react";
import styles from "../../../styles/newssection.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function NewsCarousel({ data }) {
  return (
    <div className={`${styles.hero_container} ${styles.hero_tablet}`}>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={70}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.3,
            spaceBetween: 70,
            centeredSlides: true,
          },
        }}
        className={styles.mySwiper}>
        {data.map((e, index) => (
          <SwiperSlide key={`${index}_newcarousel`}>
            <div className={styles.hero_tab_box}>
              <h3>{e.title}</h3>
              <div className={styles.test_box}></div>
              <p>{e.discription}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NewsCarousel;
