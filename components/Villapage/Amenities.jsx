import React from "react";
import styles from "../../styles/othervillas.module.scss";
import useLanguage from "../../utils/useLanguage";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
const Amenities = () => {
  const lan = useLanguage();
  const router = useRouter();
  const { villaId } = router.query;
  const data = lan.villaplansection.villas.find(
    (villa) => villa.slug === villaId
  );
  return (
    <div className={styles.amenetiesContainer}>
      <div className={styles.amenetiesInner}>
        <div className={styles.amenetiesHeader}>
          <div className={styles.left}>
            <p>{lan.commontext.nearby}</p>
            <h4>{lan.commontext.amenities}</h4>
          </div>
          <div className={styles.sliderControls}>
            <span
              style={{
                paddingRight: "2px",
              }}>
              <IoChevronBack />
            </span>
            <span
              style={{
                paddingLeft: "2px",
              }}>
              <IoChevronForward />
            </span>
          </div>
        </div>
        <div className={styles.amenitiescarousels}>
          {data && (
            <motion.div className={styles.amenitiescarouselsInner} drag="x">
              {data.nearby.map((item, index) => {
                return (
                  <div key={index} className={styles.carouselItem}>
                    <Image
                      src={item.img}
                      layout="intrinsic"
                      width={300}
                      height={300}
                      alt={item.name}
                      objectFit="cover"
                      objectPosition={"center"}
                      style={{
                        borderRadius: "10px",
                      }}
                    />
                    <div>
                      <h6>{item.name}</h6>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
