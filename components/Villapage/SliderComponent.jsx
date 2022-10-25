import Image from "next/image";
import { useRouter } from "next/router";

import styles from "../../styles/othervillas.module.scss";
import useLanguage from "../../utils/useLanguage";
import { motion } from "framer-motion";

const SliderComponent = ({
  animation,
  carouselRef,
  setNewComponentWidth,
  containerWidth,
  itemRef,
  setItemWidth,
}) => {
  const lan = useLanguage();
  const router = useRouter();
  const { villaId } = router.query;

  const data = lan.villaplansection.villas.find(
    (villa) => villa.slug === villaId
  );

  return (
    <motion.div
      className={styles.sliderItemContainer}
      // drag="x"
      animate={animation}
      onLoad={setNewComponentWidth}
      ref={carouselRef}
      dragConstraints={{
        right: 0,
        left: -containerWidth,
      }}>
      {data &&
        data.interior.map((item, index) => (
          <div
            className={styles.sliderItem}
            onLoad={() =>
              setItemWidth(itemRef.current?.getBoundingClientRect().width)
            }
            key={index}
            id="interiorItemSlide"
            ref={itemRef}>
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
                alt="Sustainable City Yiti"
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
