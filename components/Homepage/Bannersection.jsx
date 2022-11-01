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
        speed={3000}
        loop={true}
        noSwiping={true}
        noSwipingClass="swiper-slide"
        // autoplay={{ delay: 1000, disableOnInteraction: false }}
        onImagesReady={(s) => {
          if (!s.autoplay.running) {
            s.params.autoplay = {
              delay: 2000,
              disableOnInteraction: false,
            };
            s.autoplay.start();
          }
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '"><img class="pagination-bullet" alt={"banner-pagination-yiti"}/></span>'
            );
          },
        }}
        className={styles.app__bannerswiper}>
        {lan.bannersection.slides.map((slide, index) => (
          <SwiperSlide className={styles.app__bannerswiperslide} key={index}>
            <Image
              src={slide.img}
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
              quality={75}
              alt="The sustainable city image"
              as="image"
              priority={true}
              placeholder="blur"
              blurDataURL="/Images/masterplanimageblur2.png"
            />
            <div className={styles.app__slider_overlay}></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.div className={styles.app__bannerslidecontent}>
        <h2>{lan.bannersection.slides[0].title1}</h2>
        <h1>{lan.bannersection.slides[0].title2}</h1>
      </motion.div>
      <motion.div
        className={`${styles.app__banner_polygon}`}
        animate={{ y: [10, 0, 10] }}
        transition={{
          type: "spring",
          stiffness: 10,
          repeat: Infinity,
          duration: 2,
        }}>
        <Image
          src={"/Images/bannersection/bannerpoly.png"}
          alt="The Sustainable Villas Yiti"
          layout="fill"
        />
      </motion.div>
    </div>
  );
};

export default Bannersection;
