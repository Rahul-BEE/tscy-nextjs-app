import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/othervillas.module.scss";
import useLanguage from "../../utils/useLanguage";

const SliderComponent = () => {
  const lan = useLanguage();
  const router = useRouter();
  const { villaId } = router.query;
  const data = lan.villaplansection.villas.find(
    (villa) => villa.slug === villaId
  );
  return (
    <div className={styles.sliderItemContainer}>
      {data &&
        data.interior.map((item, index) => (
          <div className={styles.sliderItem} key={index}>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
            <div className={styles.imgcontainer}>
              <Image
                src={item.img}
                layout="fill"
                objectFit="cover"
                objectPosition={"center"}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default SliderComponent;
