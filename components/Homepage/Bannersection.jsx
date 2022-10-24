import Image from "next/image";
import styles from "../../styles/home.module.scss";
import { motion } from "framer-motion";
import useLanguage from "../../utils/useLanguage";
import { Pagination, Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";

const Bannersection = ({ banner }) => {
  const lan = useLanguage();

  return (
    <div className={styles.app__bannerSection}>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        speed={2500}
        loop={true}
        noSwiping={true}
        noSwipingClass="swiper-slide"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
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
        className={styles.app__bannerswiper}>
        <SwiperSlide className={styles.app__bannerswiperslide}>
          <Image
            src="/Images/map-pic.png"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
            quality={75}
            alt="The sustainable city image"
            as="image"
            priority={true}
          />
          <div className={styles.app__slider_overlay}></div>
          <motion.div className={styles.app__bannerslidecontent}>
            <h2>{lan.bannersection.title1}</h2>
            <h1>{lan.bannersection.title2}</h1>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className={styles.app__bannerswiperslide}>
          <Image
            src="/Images/banner2.png"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
            quality={75}
            alt="The sustainable city image"
            as="image"
            priority={true}
          />
          <div className={styles.app__slider_overlay}></div>
          <div className={styles.app__bannerslidecontent}>
            <h2>{lan.bannersection.title1}</h2>
            <h1>{lan.bannersection.title2}</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.app__bannerswiperslide}>
          <Image
            src="/Images/banner3.png"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
            quality={75}
            alt="The sustainable city image"
            as="image"
          />
          <div className={styles.app__slider_overlay}></div>
          <div className={styles.app__bannerslidecontent}>
            <h2>{lan.bannersection.title1}</h2>
            <h1>{lan.bannersection.title2}</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.app__bannerswiperslide}>
          <Image
            src="/Images/banner4.png"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
            quality={75}
            alt="The sustainable city image"
            as="image"
          />
          <div className={styles.app__slider_overlay}></div>
          <div className={styles.app__bannerslidecontent}>
            <h2>{lan.bannersection.title1}</h2>
            <h1>{lan.bannersection.title2}</h1>
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
