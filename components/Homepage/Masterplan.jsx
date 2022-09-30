import styles from "../../styles/masterplan.module.scss";
import useLanguage from "../../utils/useLanguage";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Masterplanmarker from "./Masterplanmarker";
import { motion, useAnimation } from "framer-motion";
import { useRef, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import CyclingTrack from "./Tracks/CyclingTrack";
import EquistrainTrack from "./Tracks/EquistrainTrack";
import JoggingTrack from "./Tracks/JoggingTrack";
import Mobilebtmindex from "./MobilebtmIndex/Mobilebtmindex";
import { useEffect } from "react";
import Masterplandetail from "./Masterplandetail/Masterplandetail";

const Masterplan = () => {
  const lan = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);
  const [track, setTrack] = useState(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);
  const [move, setMove] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);
  const [item, setItem] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [noDrag, setNoDrag] = useState(false);
  const [constrains, setConstrains] = useState({
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  });
  const [containerWidth, setContainerWidth] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
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

  const zoomHandler = (state) => {
    if (state) {
      zoomAnimation.start({ x: move.x, y: 0, scale: 1.5 });
    } else {
      zoomAnimation.start({ x: move.x, y: 0, scale: 1 });
    }
    // setZoom(state);
    // if (state) {
    //   setNoDrag(undefined);
    //   zoomAnimation.start({ x: "-50%", y: 0, scale: 1.5 });
    // } else {
    //   setNoDrag("x");
    //   zoomAnimation.start("hidden");
    // }
  };

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
  }, []);

  // useEffect(() => {
  //   zoomAnimation.start("hidden");
  // }, [isBrowser]);

  useEffect(() => {
    console.log("imageref", imageContainerRef.current?.getBoundingClientRect());
    console.log("containered", containerRef.current?.getBoundingClientRect());
    console.log("z", zoom);
    if (zoom) {
      setConstrains({
        right: -(imageContainerRef.current?.getBoundingClientRect().x + move.x),
        left:
          imageContainerRef.current?.getBoundingClientRect().width / 1.5 - 341,
        // top: 0,
        // bottom: 0,
        // top:
        //   -(
        //     imageContainerRef.current?.getBoundingClientRect().height -
        //     containerRef.current?.getBoundingClientRect().height
        //   ) * 0.5,
        // bottom:
        //   (imageContainerRef.current?.getBoundingClientRect().height -
        //     containerRef.current?.getBoundingClientRect().height) *
        //   0.5,
      });
    } else {
      setConstrains({
        right: 0,
        left:
          imageContainerRef.current?.getBoundingClientRect().width -
          containerRef.current?.getBoundingClientRect().width,
        top: 0,
        bottom: 0,
      });
    }
  }, []);
  //Guestures

  const dragHandler = async (_, info) => {
    if (imageContainerRef.current.getBoundingClientRect().x >= 52) {
      setMove({
        x: 0,
        y: imageContainerRef.current.getBoundingClientRect().y,
      });
    } else {
      setMove({
        x: imageContainerRef.current.getBoundingClientRect().x,
        y: imageContainerRef.current.getBoundingClientRect().y,
      });
    }
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

      {showDetail ? (
        <div
          className={styles.masterplanContainer}
          id="masterplancontainer"
          ref={containerRef}
          style={{
            touchAction: "none",
          }}>
          <Masterplandetail item={item} setShowDetail={setShowDetail} />
        </div>
      ) : (
        <>
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
              id="masterplanimageinner"
              className={styles.masterplan}
              animate={zoomAnimation}
              ref={imageContainerRef}
              drag
              onDragEnd={dragHandler}
              dragElastic={false}
              dragConstraints={{
                right: constrains.right,
                left: -constrains.left,
                top: constrains.top,
                bottom: constrains.bottom,
              }}
              dragMomentum={0}
              style={{
                touchAction: "none",
              }}
              transition={{ duration: 1 }}
              onAnimationComplete={() => setZoom(!zoom)}
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
                setShowDetail={setShowDetail}
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
                            color:
                              index + 15 === track - 1 ? "#058da6" : "#777777",
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
          <Mobilebtmindex setItem={setItem} setShowDetail={setShowDetail} />
        </>
      )}
    </div>
  );
};

export default Masterplan;
