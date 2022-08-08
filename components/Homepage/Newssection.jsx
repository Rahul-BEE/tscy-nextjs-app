import styles from "../../styles/newssection.module.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import NewsCarousel from "./NewsSectionComponents/NewsCarousel";
import NewsMobile from "./NewsSectionComponents/NewsMobile";

function Newssection() {
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
          <div className={styles.hero_box}>
            <div>
              <div className={styles.news_heading}>
                <h3>
                  Britain starts to open up, Ramadan begins. It feels like
                  perfect timing, with Russia cheif army scrubbling over the
                  issue.
                </h3>
              </div>
              <div className={styles.test_box}></div>
              <p>
                Thus, when using the definite article, the speaker assumes the
                listener knows the identity of the noun’s referent (because it
                is obvious, because it is common knowledge, or because it was
                mentioned in the same sentence or an earlier sentence). Use of
                an indefinite article implies that the speaker assumes the
                listener does not have to be told the identity of the referent.
                Use of an indefinite article implies that the speaker assumes
                the listener does not have to be told the identity of the
                referent.
              </p>
            </div>
          </div>

          {/* small boxes */}

          <div className={styles.hero_secondry_box}>
            <div className={styles.news_nav}>
              <p>
                <FaChevronLeft /> Previous
              </p>
              <p>
                Next <FaChevronRight />
              </p>
            </div>
            <div className={styles.secondry_box}>
              <div className={styles.test_box}></div>

              <h3>
                HOW THINGS ARE CHANGING WITH YOUTH ON THE STREETS ASKING FOR
                SUSTAINABLE SOLUTIONS
              </h3>
            </div>

            <div>
              <div className={styles.test_box}></div>
              <h3>
                Britain starts to open up, Ramadan begins. It feels like perfect
                timing, with Russia cheif army scrubbling over the issue.
              </h3>
            </div>
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
