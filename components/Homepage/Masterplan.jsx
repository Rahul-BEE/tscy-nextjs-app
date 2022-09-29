import styles from "../../styles/masterplan.module.scss";
import useLanguage from "../../utils/useLanguage";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Masterplanmarker from "./Masterplanmarker";
import { motion, useAnimation, useDragControls } from "framer-motion";
import { useRef, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import CyclingTrack from "./Tracks/CyclingTrack";
import EquistrainTrack from "./Tracks/EquistrainTrack";
import JoggingTrack from "./Tracks/JoggingTrack";
import Mobilebtmindex from "./MobilebtmIndex/Mobilebtmindex";
import { useEffect } from "react";
import { useGesture } from "@use-gesture/react";
import { useCallback } from "react";
const Masterplan = () => {
  const lan = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);
  const [track, setTrack] = useState(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);
  const [move, setMove] = useState({ x: "-50%", y: 0 });
  const [show, setShow] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);
  const [item, setItem] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [noDrag, setNoDrag] = useState(false);
  const zoomAnimation = useAnimation();
  const containerRef = useRef();
  const imageContainerRef = useRef();
  const getPath = ({ id }) => {
    const path = document.getElementById(`path_${id}`);
    const rect = document.getElementById("something").getBoundingClientRect();
    if (track) {
      setTrack(null);
    }
    setItem(id);
    setActiveIndex(id);
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
    setW(Number(path.getBoundingClientRect().width));
    setH(Number(path.getBoundingClientRect().height));
    setShow(true);
  };

  const getTrackPath = async ({ id }) => {
    setTrack(id);
    setShow(true);
    setActiveIndex(null);
  };
  useEffect(() => {
    if (track) {
      const path = document.getElementById(`path_${track}`);
      const rect = document.getElementById("something").getBoundingClientRect();
      setX(
        path?.getBoundingClientRect().x -
          rect.left +
          Number(path.getBoundingClientRect().width) / 2
      );
      setY(
        path?.getBoundingClientRect().y -
          rect.top +
          Number(path?.getBoundingClientRect().height) / 2
      );
      setW(Number(path?.getBoundingClientRect().width * 2));
      setH(Number(path?.getBoundingClientRect().height * 2));
      setShow(true);
    }
  }, [track]);

  const zoomHandler = useCallback((state) => {
    setZoom(state);
    if (state) {
      setNoDrag(true);
      zoomAnimation.start({ x: "-50%", y: 0, scale: 1.5 });
    } else {
      setNoDrag(false);
      zoomAnimation.start("hidden");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsBrowser(window.innerWidth < 1224);
    }
    window.addEventListener("resize", () => {
      setTrack(null);
      setIsBrowser(window.innerWidth < 1224);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setTrack(null);
        setIsBrowser(window.innerWidth < 1224);
      });
    };
  }, [zoom]);

  useEffect(() => {
    zoomAnimation.start("hidden");
  }, [isBrowser]);

  //Guestures

  const dragHandler = async (_, info) => {
    setMove({ x: info.offset.x, y: info.offset.y });
    if (
      imageContainerRef.current.getBoundingClientRect().left >
      containerRef.current.getBoundingClientRect().left
    ) {
      await zoomAnimation.start({ x: "20%", y: "10%" });
    } else if (
      imageContainerRef.current.getBoundingClientRect().top >
      containerRef.current.getBoundingClientRect().top
    ) {
      await zoomAnimation.start({ x: move.x, y: "10%" });
    } else if (
      imageContainerRef.current.getBoundingClientRect().right <
      containerRef.current.getBoundingClientRect().right
    ) {
      await zoomAnimation.start({ x: "-50%", y: move.y });
    } else if (
      imageContainerRef.current.getBoundingClientRect().bottom <
      containerRef.current.getBoundingClientRect().bottom
    ) {
      await zoomAnimation.start({ x: move.x, y: "0%" });
    } else {
      return;
    }

    // if (
    //   imageContainerRef.current.getBoundingClientRect().left >
    //   containerRef.current.getBoundingClientRect().left
    // ) {
    //   zoomAnimation.start({ x: "0%", y: 0 });
    // } else if (
    //   imageContainerRef.current.getBoundingClientRect().right <
    //   containerRef.current.getBoundingClientRect().right
    // ) {
    //   zoomAnimation.start({ x: "-100%", y: 0 });
    // }
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
      <div
        className={styles.masterplanContainer}
        id="masterplancontainer"
        ref={containerRef}
        style={{
          touchAction: "none",
        }}>
        <div className={styles.zoombtn}>
          {zoom ? (
            <AiFillMinusCircle onClick={() => zoomHandler(false)} />
          ) : (
            <BsFillPlusCircleFill onClick={() => zoomHandler(true)} />
          )}
        </div>
        <motion.div
          className={styles.masterplan}
          animate={zoomAnimation}
          ref={imageContainerRef}
          drag
          onDragEnd={dragHandler}
          dragListener={noDrag}
          dragMomentum={0}
          variants={{
            visible: {
              x: move.x,
              y: move.y,
              transition: {
                duration: 1,
              },
            },
            hidden: {
              scale: 1,
              x: isBrowser ? "-28%" : 0,
              y: 0,
              touchAction: "none",
              transition: {
                duration: 0.5,
              },
            },
          }}
          transition={{ duration: 1 }}
          initial="hidden">
          <Image
            id="masterplanmap"
            src="/Images/masterplanimage.png"
            layout="fill"
            className={styles.masterplanmap}
            blurDataURL="/Images/masterplanimage.png"
            placeholder="blur"
            priority={true}
            quality={100}
          />
          {track === 18 && <CyclingTrack />}
          {track === 16 && <JoggingTrack />}
          {track === 17 && <EquistrainTrack />}
          <Masterplanmarker
            getPath={getPath}
            x={x}
            y={y}
            w={w}
            h={h}
            show={show}
            setShow={setShow}
            item={item}
            track={track}
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
                        color:
                          index === activeIndex - 1 ? "#058da6" : "#777777",
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
                        getTrackPath({ id: marker.id });
                      }}
                      style={{
                        color: index + 15 === track - 1 ? "#058da6" : "#777777",
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
        </motion.div>
      </div>
      <Mobilebtmindex />
    </div>
  );
};

export default Masterplan;
