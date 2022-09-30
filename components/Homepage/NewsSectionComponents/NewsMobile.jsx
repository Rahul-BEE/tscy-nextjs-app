import React from "react";
import styles from "../../../styles/newssection.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function NewsMobile({ data }) {
  return (
    <div className={styles.hero_mobile_box}>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={70}
        pagination={{
          clickable: true,
        }}
        className={styles.mySwiper}>
        {data.map((e, index) => (
          <SwiperSlide key={`${index}_newmob`}>
            <div className={styles.test_box}>
              <div className={styles.heading_mobile}>
                <h2>ress and news</h2>
                <p>Read here </p>
              </div>

              <div className={styles.bottom_text}>
                <h3>{e.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NewsMobile;
