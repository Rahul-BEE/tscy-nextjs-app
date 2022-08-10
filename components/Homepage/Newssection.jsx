import styles from "../../styles/newssection.module.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import NewsCarousel from "./NewsSectionComponents/NewsCarousel";
import NewsMobile from "./NewsSectionComponents/NewsMobile";
import { useState } from "react";
import useLanguage from "../../utils/useLanguage";

function Newssection() {
  const lan = useLanguage();

  const data = [
    {
      id: 1,
      title: lan.newssection.post[0].title,
      discription: lan.newssection.post[0].discription,
    },
    {
      id: 2,
      title: `2Britain starts to open up, Ramadan begins. It feels like
      perfect timing, with Russia cheif army scrubbling over the
      issue.`,
      discription: `Thus, when using the definite article, the speaker assumes the
      listener knows the identity of the noun’s referent (because it
      is obvious, because it is common knowledge, or because it was
      mentioned in the same sentence or an earlier sentence). Use of
      an indefinite article implies that the speaker assumes the
      listener does not have to be told the identity of the referent.
      Use of an indefinite article implies that the speaker assumes
      the listener does not have to be told the identity of the
      referent.`,
    },
    {
      id: 3,
      title: `3Britain starts to open up, Ramadan begins. It feels like
      perfect timing, with Russia cheif army scrubbling over the
      issue.`,
      discription: `Thus, when using the definite article, the speaker assumes the
      listener knows the identity of the noun’s referent (because it
      is obvious, because it is common knowledge, or because it was
      mentioned in the same sentence or an earlier sentence). Use of
      an indefinite article implies that the speaker assumes the
      listener does not have to be told the identity of the referent.
      Use of an indefinite article implies that the speaker assumes
      the listener does not have to be told the identity of the
      referent.`,
    },
    {
      title: `4Britain starts to open up, Ramadan begins. It feels like
      perfect timing, with Russia cheif army scrubbling over the
      issue.`,
    },
    {
      title: `5Britain starts to open up, Ramadan begins. It feels like
      perfect timing, with Russia cheif army scrubbling over the
      issue.`,
    },
    {
      title: `6Britain starts to open up, Ramadan begins. It feels like
      perfect timing, with Russia cheif army scrubbling over the
      issue.`,
    },
    {
      title: `7Britain starts to open up, Ramadan begins. It feels like
      perfect timing, with Russia cheif army scrubbling over the
      issue.`,
    },
  ];

  const initialData = {
    firstSlice: 0,
    secondSlice: 1,
    lastSlice: 3,
  };
  const [sliceNumber, setSliceNumber] = useState(initialData);
  const handelChange = (e) => {
    e.preventDefault();
    if (data.length - 1 >= sliceNumber.lastSlice) {
      setSliceNumber({
        ...sliceNumber,
        firstSlice: sliceNumber.firstSlice + 1,
        secondSlice: sliceNumber.secondSlice + 1,
        lastSlice: sliceNumber.lastSlice + 1,
      });
    }
  };

  const handelChnagePrev = (e) => {
    e.preventDefault();
    if (sliceNumber.firstSlice > 0) {
      setSliceNumber({
        ...sliceNumber,
        firstSlice: sliceNumber.firstSlice - 1,
        secondSlice: sliceNumber.secondSlice - 1,
        lastSlice: sliceNumber.lastSlice - 1,
      });
    }
  };

  return (
    <div className={styles.hero_newssection}>
      <div className={styles.hero_container}>
        <div className={`${styles.hero_text_center} ${styles.hero_mobile}`}>
          <p>See what they say in</p>
          <h2>press and news</h2>
        </div>

        {/* layout */}

        <div className={styles.shape_hex}>
          <Image
            src={"/Svg/Polygon.svg"}
            alt="The Sustainable Villas Yiti"
            width={"250px"}
            height={"250px"}
          />
        </div>

        <div className={styles.hero_main_box}>
          {/* main box */}
          {data
            .slice(sliceNumber.firstSlice, sliceNumber.secondSlice)
            .map((item, index) => (
              <div className={styles.hero_box} key={index}>
                <div>
                  <div className={styles.news_heading}>
                    <h3>{item.title}</h3>
                  </div>
                  <div className={styles.test_box}></div>
                  <p>{item.discription}</p>
                </div>
              </div>
            ))}

          {/* small boxes */}

          <div className={styles.hero_secondry_box}>
            <div className={styles.news_nav}>
              <p onClick={(e) => handelChnagePrev(e)}>
                <FaChevronLeft /> Previous
              </p>
              <p onClick={(e) => handelChange(e)}>
                Next <FaChevronRight />
              </p>
            </div>

            {data
              .slice(sliceNumber.secondSlice, sliceNumber.lastSlice)
              .map((item, index) => (
                <div className={styles.secondry_box} key={index}>
                  <div className={styles.test_box}></div>
                  <h3>{item.title}</h3>
                </div>
              ))}
          </div>
        </div>

        {/* tablet view */}
        <NewsCarousel />
      </div>

      {/* mobile */}
      <NewsMobile />
    </div>
  );
}

export default Newssection;
