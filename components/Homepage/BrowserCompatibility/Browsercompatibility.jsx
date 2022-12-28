import React from "react";
import Modal from "react-bootstrap/Modal";
import Firefox from "../../../public/Svg/firefoxlogo.svg";
import styles from "../../../styles/policies.module.scss";
import useLanguage from "../../../utils/useLanguage";
import { useAppContext } from "../../../context/AppContext";
const Browsercompatibility = () => {
  const lan = useLanguage();
  const { state, dispatch } = useAppContext();
  return (
    <Modal
      show={state.showbModal}
      centered
      contentClassName={styles.bmodalContentClass}
      onHide={() => {
        dispatch({
          type: "showbmodal",
          value: false,
        });
      }}>
      <Modal.Body className={styles.bmodalBody}>
        <div className={styles.bodyVideoContainer}>
          <video
            width="100%"
            height={"auto"}
            style={{
              aspectRatio: 1.777,
            }}
            autoPlay={true}
            controls={false}
            muted
            preLoad="auto"
            loop>
            <source src="/videos/animation.mp4" type="video/mp4" />
          </video>
          <div className={styles.firefoxlogo}>
            <Firefox />
          </div>
        </div>
        <div className={styles.bodycontentContainer}>
          <h5>{lan.firefoxpopup.title}</h5>
          <p>{lan.firefoxpopup.text}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <p
          className={styles.startmyjourney}
          onClick={() => {
            dispatch({
              type: "showbmodal",
              value: false,
            });
          }}>
          {lan.firefoxpopup.startmyjourney}
        </p>
      </Modal.Footer>
    </Modal>
  );
};

export default Browsercompatibility;
