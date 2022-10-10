import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import styles from "../../styles/othervillas.module.scss";
import useLanguage from "../../utils/useLanguage";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
const SliderComponent = () => {
  const lan = useLanguage();
  const router = useRouter();
  const { villaId } = router.query;
  const carouselRef = useRef();
  const [containerWidth, setContainerWidth] = useState(0);
  const data = lan.villaplansection.villas.find(
    (villa) => villa.slug === villaId
  );
  const setNewComponentWidth = useCallback(() => {
    setContainerWidth(
      carouselRef.current?.scrollWidth - carouselRef.current?.clientWidth
    );
  }, [carouselRef]);

  useEffect(() => {
    setNewComponentWidth();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", setNewComponentWidth);
    }
    return () => {
      window.removeEventListener("resize", setNewComponentWidth);
    };
  }, [carouselRef.current, setNewComponentWidth]);
  return (
    <motion.div
      className={styles.sliderItemContainer}
      drag="x"
      onLoad={setNewComponentWidth}
      ref={carouselRef}
      dragConstraints={{
        right: 0,
        left: -containerWidth,
      }}>
      {data &&
        data.interior.map((item, index) => (
          <div className={styles.sliderItem} key={index}>
            <div className={styles.sliderItemHeader}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
            <div className={styles.imgcontainer}>
              <Image
                src={item.img}
                layout="fill"
                objectFit="cover"
                objectPosition={"center"}
              />
            </div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                cursor: "grab",
              }}></div>
          </div>
        ))}
    </motion.div>
  );
};

export default SliderComponent;
