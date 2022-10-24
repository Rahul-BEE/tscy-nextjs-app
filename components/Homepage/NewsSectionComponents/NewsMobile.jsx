import React from "react";
import styles from "../../../styles/newssection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import useLanguage from "../../../utils/useLanguage";
function NewsMobile({ data,props }) {
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
        centeredSlides={false}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.1,
            spaceBetween: 20,
           // centeredSlides: true,
          },
        }}
        className={styles.mySwiper}>
            {props.pagename == 'NewsDetailPage'? 
        <span>
          {data.map((e, index) => (
          <SwiperSlide key={index}>
          <Link href={`${e.slug}`}  passHref>
            
            <div className={styles.hero_tab_box}>
                <h6 style={{height: "100px"}}>{e.heading} </h6>
                <p>{e.date}</p>
              <Image
                className={styles.test_box}
                src={e.image}
                width={450}
                height={300}
                layout="responsive"
                alt="Sustainable City Yiti Villa"
              />

             
            <div className={styles.readmore}>
              <p>Read More <FaChevronRight className={styles.icon} /></p>
              </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}
        </span>:
        <span>
        {data.map((e, index) => (
        <SwiperSlide key={index}>
        <Link href={`news/${e.slug}`}  passHref>
          
          <div className={styles.hero_tab_box}>
              <h6 style={{height: "100px"}}>{e.heading} </h6>
              <p>{e.date}</p>
            <Image
              className={styles.test_box}
              src={e.image}
              width={450}
              height={300}
              layout="responsive"
            />

           
          <div className={styles.readmore}>
            <p>Read More <FaChevronRight className={styles.icon} /></p>
            </div>
          </div>
          </Link>
        </SwiperSlide>
      ))}
      </span>
        
        
        }
      </Swiper>
    </div>
  );
}

export default NewsMobile;
