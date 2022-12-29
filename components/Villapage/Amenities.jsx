import React, { useCallback, useEffect, useState } from "react";
import styles from "../../styles/othervillas.module.scss";
import useLanguage from "../../utils/useLanguage";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
const Amenities = () => {
  const lan = useLanguage();
  const router = useRouter();
  const { villaId } = router.query;
  const [slideIndex, setSlideIndex] = useState(0);
  const data = lan.villaplansection.villas.find(
    (villa) => villa.slug === villaId
  );

  const itemRef = useRef(null);
  const slideAnimation = useAnimation();

  const [componentWidth, setComponentWidth] = useState(0);
  const [scrolledWidth, setScrolledWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const handlerCarousel = (id) => {
    if (lan.language === 1) {
      if (
        id === 1 &&
        slideIndex < data.nearby.length - 1 &&
        scrolledWidth <
          containerRef.current?.scrollWidth - containerRef.current?.clientWidth
      ) {
        setScrolledWidth((prev) => prev + componentWidth);
        setSlideIndex((prev) => prev + 1);
        slideAnimation.start({
          x: -(scrolledWidth + componentWidth),
        });
      } else if (id === -1 && slideIndex !== 0) {
        setScrolledWidth((prev) => prev - componentWidth);
        setSlideIndex((prev) => prev - 1);
        slideAnimation.start({
          x: -scrolledWidth + componentWidth,
        });
      } else {
        return;
      }
    } else {
      if (id === 1 && slideIndex !== 0) {
        setScrolledWidth((prev) => prev + componentWidth);
        setSlideIndex((prev) => prev + 1);
        slideAnimation.start({
          x: -(scrolledWidth + componentWidth),
        });
      } else if (
        id === -1 &&
        slideIndex < data.nearby.length - 1 &&
        scrolledWidth >
          containerRef.current?.clientWidth - containerRef.current?.scrollWidth
      ) {
        setScrolledWidth((prev) => prev - componentWidth);
        setSlideIndex((prev) => prev - 1);
        slideAnimation.start({
          x: -scrolledWidth + componentWidth,
        });
      } else {
        return;
      }
    }
  };

  const setNewComponentWidth = useCallback(() => {
    setComponentWidth(containerRef.current?.scrollWidth / data?.nearby.length);
    setContainerWidth(containerRef.current?.getBoundingClientRect().width);
  }, [itemRef, data]);

  useEffect(() => {
    setNewComponentWidth();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", setNewComponentWidth);
    }
    return () => {
      window.removeEventListener("resize", setNewComponentWidth);
    };
  }, [itemRef.current, setNewComponentWidth]);

  const updateIndex = () => {
    // console.log(containerRef.current?.getBoundingClientRect());
  };
  return (
    <div className={styles.amenetiesContainer}>
      <div className={styles.amenetiesInner}>
        <div className={styles.amenetiesHeader}>
          <div className={styles.left}>
            {/* <p>{lan.commontext.nearby}</p> */}
            <h4>{lan.commontext.amenities}</h4>
          </div>
          <div className={styles.sliderControls}>
            <span
              onClick={() => handlerCarousel(-1)}
              style={{
                paddingRight: "2px",
              }}>
              <IoChevronBack />
            </span>
            <span
              onClick={() => handlerCarousel(1)}
              style={{
                paddingLeft: "2px",
              }}>
              <IoChevronForward />
            </span>
          </div>
        </div>
        <div className={styles.amenitiescarousels} id="amenitiesdiv">
          {data && (
            <motion.div
              ref={containerRef}
              onLoad={setNewComponentWidth}
              className={styles.amenitiescarouselsInner}
              drag="x"
              animate={slideAnimation}
              onDrag={() => updateIndex()}
              dragConstraints={{
                right: 0,
                left: -(
                  containerRef.current?.scrollWidth -
                  containerRef.current?.clientWidth
                ),
              }}>
              {data.nearby.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={styles.carouselItem}
                    ref={itemRef}>
                    <Image
                      src={item.img}
                      layout="intrinsic"
                      width={300}
                      height={300}
                      alt={item.name}
                      objectFit="cover"
                      objectPosition={"center"}
                      placeholder="blur"
                      blurDataURL="Images/blur.png"
                      style={{
                        borderRadius: "10px",
                      }}
                    />
                    <div className={styles.amenitiesdetails}>
                      <h6>{item.name}</h6>
                      <p>{item.description}</p>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        cursor: "grab",
                      }}></div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </div>
        {/* <div className={`${styles.sliderControls} ${styles.sliderControlsMob}`}>
          <span
            onClick={() => handlerCarousel(-1)}
            style={{
              paddingRight: "2px",
            }}>
            <IoChevronBack />
          </span>
          <span
            onClick={() => handlerCarousel(1)}
            style={{
              paddingLeft: "2px",
            }}>
            <IoChevronForward />
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Amenities;
