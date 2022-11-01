import React from "react";
import styles from "../../../styles/newssection.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import { FaChevronRight } from "react-icons/fa";
import useLanguage from "../../../utils/useLanguage";
function NewsCarousel({ data, props }) {
  const lan = useLanguage();
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
            slidesPerView: 1.2,
            //spaceBetween: 70,
            // centeredSlides: true,
          },
        }}
        className={styles.mySwiper}>
        {props.pagename == "NewsDetailPage" ? (
          <span>
            {data.map((e, index) => (
              <SwiperSlide key={`${index}_newcarousel`}>
                <Link href={`${e.slug}`} passHref>
                  <div className={styles.hero_tab_box}>
                    <h3>{e.heading}</h3>
                    <span style={{ fontWeight: "400" }}>{e.date}</span>
                    <Image
                      className={styles.test_box}
                      src={e.image}
                      width={476}
                      height={200}
                      layout="responsive"
                      alt="Sustainable City Yiti Villa"
                      placeholder="blur"
                      blurDataURL="/Images/blur.png"
                    />
                    <div className={styles.readmore_tab}>
                      <p>
                        {lan.commontext.readmore}{" "}
                        <FaChevronRight className={styles.icon} />
                      </p>
                    </div>
                    <p>{e.discription}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </span>
        ) : (
          <span>
            {data.map((e, index) => (
              <SwiperSlide key={`${index}_newcarousel`}>
                <Link href={`news/${e.slug}`} passHref>
                  <div className={styles.hero_tab_box}>
                    <h3>{e.heading}</h3>
                    <span style={{ fontWeight: "400" }}>{e.date}</span>
                    <Image
                      className={styles.test_box}
                      src={e.image}
                      width={476}
                      height={200}
                      layout="responsive"
                      alt="Sustainable City Yiti Villa"
                    />
                    <div className={styles.readmore_tab}>
                      <p>
                        {lan.commontext.readmore}{" "}
                        <FaChevronRight className={styles.icon} />
                      </p>
                    </div>
                    <p>{e.discription}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </span>
        )}
      </Swiper>
    </div>
  );
}

export default NewsCarousel;
