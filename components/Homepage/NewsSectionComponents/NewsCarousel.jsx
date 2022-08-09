import React from "react";
import styles from "../../../styles/newssection.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function NewsCarousel() {
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
        <SwiperSlide>
          <div className={styles.hero_tab_box}>
            <h3>
              Britain starts to open up, Ramadan begins. It feels like perfect
              timing, with Russia cheif army scrubbling over the issue.
            </h3>
            <div className={styles.test_box}></div>
            <p>
              Thus, when using the definite article, the speaker assumes the
              listener knows the identity of the noun’s referent (because it is
              obvious, because it is common knowledge, or because it was
              mentioned in the same sentence or an earlier sentence). Use of an
              indefinite article implies that the speaker assumes the listener
              does not have to be told the identity of the referent. Use of an
              indefinite article implies that the speaker assumes the listener
              does not have to be told the identity of the referent.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.hero_tab_box}>
            <h3>
              Britain starts to open up, Ramadan begins. It feels like perfect
              timing, with Russia cheif army scrubbling over the issue.
            </h3>
            <div className={styles.test_box}></div>
            <p>
              Thus, when using the definite article, the speaker assumes the
              listener knows the identity of the noun’s referent (because it is
              obvious, because it is common knowledge, or because it was
              mentioned in the same sentence or an earlier sentence). Use of an
              indefinite article implies that the speaker assumes the listener
              does not have to be told the identity of the referent. Use of an
              indefinite article implies that the speaker assumes the listener
              does not have to be told the identity of the referent.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.hero_tab_box}>
            <h3>
              Britain starts to open up, Ramadan begins. It feels like perfect
              timing, with Russia cheif army scrubbling over the issue.
            </h3>
            <div className={styles.test_box}></div>
            <p>
              Thus, when using the definite article, the speaker assumes the
              listener knows the identity of the noun’s referent (because it is
              obvious, because it is common knowledge, or because it was
              mentioned in the same sentence or an earlier sentence). Use of an
              indefinite article implies that the speaker assumes the listener
              does not have to be told the identity of the referent. Use of an
              indefinite article implies that the speaker assumes the listener
              does not have to be told the identity of the referent.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default NewsCarousel;
