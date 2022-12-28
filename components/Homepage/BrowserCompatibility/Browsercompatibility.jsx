import React from "react";
import Modal from "react-bootstrap/Modal";
import Firefox from "../../../public/Svg/firefoxlogo.svg";
import styles from "../../../styles/policies.module.scss";
const Browsercompatibility = ({ show, setshowmodal, modalTimer }) => {
  return (
    <Modal
      show={show}
      centered
      contentClassName={styles.bmodalContentClass}
      onHide={() => {
        setshowmodal(false);
        modalTimer();
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
          <h5>We have detected that you are using Firefox.</h5>
          <p>
            This website uses third party services for enhanced user experience,
            kindly follow the steps in the video as some features might not
            perform as expected.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <p
          className={styles.startmyjourney}
          onClick={() => {
            setshowmodal(false);
            modalTimer();
          }}>
          Start my journey
        </p>
      </Modal.Footer>
    </Modal>
  );
};

export default Browsercompatibility;
