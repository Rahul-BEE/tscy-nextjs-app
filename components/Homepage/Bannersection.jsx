import Image from "next/image";
import styles from "../../styles/home.module.scss";
import { motion } from "framer-motion";

// import Swiper core and required modules
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Bannersection = ({ banner }) => {
  return (
    <div className={styles.app__bannerSection}>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        navigation
        speed={800}
        loop
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '"><img class="pagination-bullet"/></span>'
            );
          },
        }}
        className={styles.app__bannerswiper}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}>
        <SwiperSlide className={styles.app__bannerswiperslide}>
          <Image
            src="/Images/map-pic.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
            quality={"100"}
            priority
            alt="The sustainable city image"
          />
          <div className={styles.app__slider_overlay}></div>
          <motion.div className={styles.app__bannerslidecontent}>
            <h2>Learn the change today</h2>
            <h1>For a better tomorrow</h1>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className={styles.app__bannerswiperslide}>
          <Image
            src="/Images/banner2.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
            quality={"100"}
            priority
            alt="The sustainable city image"
          />
          <div className={styles.app__slider_overlay}></div>
          <div className={styles.app__bannerslidecontent}>
            <h2>Learn the change today</h2>
            <h1>For a better tomorrow</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.app__bannerswiperslide}>
          <Image
            src="/Images/banner3.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
            quality={"100"}
            priority
            alt="The sustainable city image"
          />
          <div className={styles.app__slider_overlay}></div>
          <div className={styles.app__bannerslidecontent}>
            <h2>Learn the change today</h2>
            <h1>For a better tomorrow</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.app__bannerswiperslide}>
          <Image
            src="/Images/banner4.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
            quality={"100"}
            priority
            alt="The sustainable city image"
          />
          <div className={styles.app__slider_overlay}></div>
          <div className={styles.app__bannerslidecontent}>
            <h2>Learn the change today</h2>
            <h1>For a better tomorrow</h1>
          </div>
        </SwiperSlide>
      </Swiper>

      <motion.div
        className={`${styles.app__banner_polygon1}`}
        animate={{ y: [10, 0, 10] }}
        transition={{
          type: "spring",
          stiffness: 10,
          repeat: Infinity,
          duration: 2,
        }}>
        <Image
          src={"/Svg/Polygon.svg"}
          alt="The Sustainable Villas Yiti"
          layout="fill"
        />
      </motion.div>
      <motion.div
        className={`${styles.app__banner_polygon2}`}
        animate={{ y: [10, 0, 10] }}
        transition={{
          type: "spring",
          stiffness: 10,
          repeat: Infinity,
          duration: 2,
        }}>
        <Image
          src={"/Svg/Polygon2.svg"}
          alt="The Sustainable Villas Yiti"
          layout="fill"
        />
      </motion.div>
    </div>
  );
};

export default Bannersection;
