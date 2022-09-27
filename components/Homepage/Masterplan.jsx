import styles from "../../styles/masterplan.module.scss";
import useLanguage from "../../utils/useLanguage";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Masterplanmarker from "./Masterplanmarker";
import { motion } from "framer-motion";
import { useState } from "react";
import MasterplanPopup from "./Masterplanpop";
import CyclingTrack from "./Tracks/CyclingTrack";
import EquistrainTrack from "./Tracks/EquistrainTrack";
import JoggingTrack from "./Tracks/JoggingTrack";
import Mobilebtmindex from "./MobilebtmIndex/Mobilebtmindex";
const Masterplan = () => {
  const lan = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);
  const [track, setTrack] = useState(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState(0);
  const getPath = ({ id }) => {
    const path = document.getElementById(`path_${id}`);
    const rect = document.getElementById("something").getBoundingClientRect();
    setItem(id);
    setActiveIndex(id);
    // console.log(
    //   path.getBoundingClientRect().width,
    //   path.getBoundingClientRect().height
    // );
    setX(
      path.getBoundingClientRect().x -
        rect.left +
        Number(path.getBoundingClientRect().width) / 2
    );
    setY(
      path.getBoundingClientRect().y -
        rect.top +
        Number(path.getBoundingClientRect().height) / 2
    );
    setShow(true);
  };
  return (
    <div className={styles.app__masterplan}>
      <Row className="headingRow">
        <Col>
          <h5 className="sectionsubHeading">{lan.masterplan.title1}</h5>
          <h2 className="sectionmainHeading">{lan.masterplan.title2}</h2>
        </Col>
      </Row>
      <Row className={`${styles.masterplan_description} flex`}>
        <Col md={6} lg={6} sm={12} xl={8}>
          {lan.masterplan.description}
        </Col>
      </Row>
      <div className={styles.masterplan}>
        <Image
          src="/Images/masterplanimage.png"
          width={1528}
          height={800}
          // objectPosition="50% 50%"
          layout="fill"
          className={styles.masterplanmap}
          blurDataURL="/Images/masterplanimage.png"
          placeholder="blur"
        />
        {track === 18 && <CyclingTrack />}
        {track === 16 && <JoggingTrack />}
        {track === 17 && <EquistrainTrack />}
        <Masterplanmarker
          getPath={getPath}
          x={x}
          y={y}
          show={show}
          setShow={setShow}
          item={item}
        />

        <div className={styles.masterplan_bottomindex}>
          <div className={styles.indexdiv}>
            <div className={styles.componentdiv}>
              <div className={styles.componentheading}>
                {lan.commontext.components}
              </div>
              <div className={styles.components}>
                {lan.masterplan.markers.map((marker, index) => (
                  <motion.p
                    key={`${marker.name}_${index}_${marker.id}`}
                    onClick={() => getPath({ id: marker.id })}
                    style={{
                      color: index === activeIndex - 1 ? "#058da6" : "",
                    }}>
                    <motion.span
                      style={{
                        display: index === activeIndex - 1 ? "" : "none",
                      }}>
                      -
                    </motion.span>
                    {marker.name}
                  </motion.p>
                ))}
              </div>
            </div>
            <div className={styles.tracksdiv}>
              <div className={styles.tracksheading}>
                {lan.commontext.tracks}
              </div>
              <div className={styles.tracks}>
                {lan.tracks.map((marker, index) => (
                  <motion.p
                    key={`${marker.name}_${index}_${marker.id}`}
                    onClick={() => {
                      setTrack(marker.id);
                    }}
                    style={{
                      color: index + 15 === track - 1 ? "#058da6" : "",
                    }}>
                    <motion.span
                      style={{
                        display: index + 15 === track - 1 ? "" : "none",
                      }}>
                      -
                    </motion.span>
                    {marker.name}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Mobilebtmindex />
    </div>
  );
};

export default Masterplan;
