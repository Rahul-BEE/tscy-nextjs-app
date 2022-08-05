import styles from "../../styles/newssection.module.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Newssection() {
  return (
    <div className={styles.hero_newssection}>
      <div className={styles.hero_text_center}>
        <p>See what they say in</p>
        <h2>press and news</h2>
      </div>

      {/* layout */}

      <div className={styles.hero_main_box}>
        {/* main box */}
        <div className={styles.hero_box}>
          <div>
            <div className={styles.news_heading}>
              <h3>
                Britain starts to open up, Ramadan begins. It feels like perfect
                timing, with Russia cheif army scrubbling over the issue.
              </h3>
            </div>

            <div className={styles.test_box}></div>
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
    </div>
  );
}

export default Newssection;