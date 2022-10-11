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
import Masterplandetailbtm from "./Masterplandetail/Masterplandetailbtm";
import { useCallback } from "react";

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
  const [desktop, setDesktop] = useState(true);
  const [constrains, setConstrains] = useState({
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  });
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
    if (track && desktop) {
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
  }, [track, desktop]);

  const zoomHandler = async (state) => {
    if (state) {
      await zoomAnimation.start({
        x: move.x,
        y: 0,
        scale: 1.5,
        transition: {
          duration: 0.5,
        },
      });
      setZoom(state);
    } else {
      await zoomAnimation.start({
        x: move.x,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.5,
        },
      });
      setZoom(state);
    }
  };
  const setNewConstraints = useCallback(() => {
    setIsBrowser(window.innerWidth < 1224);
    setTrack(null);
    setConstrains({
      right: zoom ? -imageContainerRef.current?.getBoundingClientRect().x : 0,
      left: zoom
        ? -(
            (imageContainerRef.current?.getBoundingClientRect().width -
              containerRef.current?.getBoundingClientRect().width) /
              1.5 +
            50
          )
        : -(
            imageContainerRef.current?.getBoundingClientRect().width -
            containerRef.current?.getBoundingClientRect().width
          ),
      top: zoom ? -10 : 0,
      bottom: zoom ? 100 : 0,
    });
  }, [zoom]);
  useEffect(() => {
    setNewConstraints();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", setNewConstraints());
    }
    return () => {
      window.removeEventListener("resize", setNewConstraints);
    };
  }, [setNewConstraints, zoom, imageContainerRef]);

  //Guestures

  const dragHandler = async (_, info) => {
    if (imageContainerRef.current.getBoundingClientRect().x >= 52) {
      setMove({
        x: 0,
        y: imageContainerRef.current.getBoundingClientRect().y,
      });
    } else if (imageContainerRef.current.getBoundingClientRect().x < -1400) {
      setMove({
        x: -800,
        y: imageContainerRef.current.getBoundingClientRect().y,
      });
    } else {
      setMove({
        x: imageContainerRef.current.getBoundingClientRect().x,
        y: imageContainerRef.current.getBoundingClientRect().y,
      });
    }
  };
  const getBacktoMasterplan = () => {
    setShowDetail(false);
    setItem(null);
    setTrack(null);
  };
  return (
    <div className={styles.app__masterplan} id="masterplananchor">
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
        <>
          <div
            className={styles.masterplanContainer}
            id="masterplancontainer"
            ref={containerRef}>
            <Masterplandetail
              item={item}
              track={track}
              goback={getBacktoMasterplan}
            />
          </div>
          <Masterplandetailbtm
            item={item}
            track={track}
            goback={getBacktoMasterplan}
          />
        </>
      ) : (
        <>
          <div
            className={styles.masterplanContainer}
            id="masterplancontainer"
            ref={containerRef}>
            <div className={styles.zoombtn}>
              {zoom ? (
                <AiFillMinusCircle onClick={() => zoomHandler(false)} />
              ) : (
                <BsFillPlusCircleFill onClick={() => zoomHandler(true)} />
              )}
            </div>
            <motion.div
              onLoad={setNewConstraints}
              id="masterplanimageinner"
              className={styles.masterplan}
              animate={zoomAnimation}
              ref={imageContainerRef}
              drag
              onDragEnd={dragHandler}
              dragElastic={false}
              dragConstraints={{
                right: constrains.right,
                left: constrains.left,
                top: constrains.top,
                bottom: constrains.bottom,
              }}
              dragMomentum={0}
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
          <Mobilebtmindex
            setShowDetail={setShowDetail}
            setItem={setItem}
            setTrack={setTrack}
            setDesktop={setDesktop}
          />
        </>
      )}
    </div>
  );
};

export default Masterplan;
