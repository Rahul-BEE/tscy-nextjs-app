import Modal from "react-bootstrap/Modal";
import styles from "../../../styles/layout.module.scss";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import useLanguage from "../../../utils/useLanguage";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
const MobileMenu = ({ show, onHide, handleLang, currentLang }) => {
  const lan = useLanguage();
  const router = useRouter();

  const closeModal = useCallback(() => {
    if (window.innerWidth > 1224) {
      onHide();
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", closeModal);
    }

    return () => {
      window.addEventListener("resize", closeModal);
    };
  }, [closeModal]);

  return (
    <Modal
      show={show}
      fullscreen={true}
      onHide={onHide}
      className={styles.header__modal}
      contentClassName={styles.header__modal_contentclass}>
      <Modal.Body className={styles.header__modal_body}>
        <div className={styles.closebtnmob}>
          <IoClose
            onClick={onHide}
            size={30}
            color="white"
            style={{
              cursor: "pointer",
            }}
          />
        </div>
        <div className={styles.imageContainermobmenu}>
          <div className={styles.top}>
            <Image
              src="/Images/mobilemenutop.png"
              width={402}
              height={421}
              layout="responsive"
              alt="sustainablecity yiti villas"
              priority
              quality={50}
            />
          </div>

          <div className={styles.left}>
            <Image
              src="/Images/mobilemenuleft.png"
              width={664}
              height={590}
              layout="responsive"
              alt="sustainablecity yiti villas"
              priority
              quality={50}
            />
          </div>
          <div className={styles.right}>
            <Image
              src="/Images/mobilemenuright.png"
              width={445}
              height={623}
              layout="responsive"
              alt="sustainablecity yiti villas"
              priority
              quality={50}
            />
          </div>
        </div>
        <div className={styles.mobmenulinks}>
          <div className={styles.inner}>
            <div className={styles.mobmenucontainer}>
              <Image
                src="/Logos/tsc-logo-white-text.svg"
                alt="the sustainable city yiti"
                width={200}
                height={100}
                layout="responsive"
              />
            </div>
            <div
              style={{
                paddingTop: "1rem",
              }}>
              <div
                className={styles.linkdiv}
                style={{
                  borderTop: " 1.52113px solid rgba(255, 255, 255, 0.2)",
                }}>
                <Link href="/">
                  <a
                    className={`${
                      router.pathname === "/"
                        ? styles.menuactive
                        : styles.menuinactive
                    }`}
                    onClick={() => onHide()}>
                    <p>{lan.header.homepage}</p>
                  </a>
                </Link>
              </div>
              {lan.header.links.map((link, index) => {
                return (
                  <div
                    key={`${index}_header_links_mobile`}
                    className={styles.linkdiv}>
                    <Link href={link.link}>
                      <a
                        className={` ${
                          router.pathname === link.link
                            ? styles.menuactive
                            : styles.menuinactive
                        }`}
                        onClick={() => onHide()}>
                        <p>{link.text}</p>
                      </a>
                    </Link>
                  </div>
                );
              })}
              <div className={styles.linkdiv}>
                <Link href="/contact">
                  <a
                    className={` ${
                      router.pathname === "/contact"
                        ? styles.menuactive
                        : styles.menuinactive
                    }`}
                    onClick={() => onHide()}>
                    <p>{lan.commontext.registerinterest}</p>
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.langbtnmobile}>
              <div className={styles.langbtnmobileinner}>
                <button
                  className={
                    currentLang === "en"
                      ? styles.btnlangactive
                      : styles.btnlanginactive
                  }
                  onClick={() => handleLang("en")}>
                  English
                </button>
                <button
                  className={
                    currentLang === "ar"
                      ? styles.btnlangactive
                      : styles.btnlanginactive
                  }
                  onClick={() => handleLang("ar")}>
                  عربي
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <Row className={styles.header__modaltop}>
          <Col>
            <IoClose onClick={onHide} size={30} color="white" />
          </Col>
        </Row>
        <div className={styles.header_topImage}>
          <Image
            src="/Images/mobilemenutop.png"
            layout="fill"
            alt="sustainablecity yiti villas"
            priority
            quality={50}
          />
        </div>
        <Row fluid className={styles.header_mobilemenu}>
          <Col className="m-0 p-0">
            <Row className="mb-3">
              <Col className="flex justify-content-center">
                <Image
                  src="/Logos/tsc-logo-white-text.svg"
                  alt="the sustainable city yiti"
                  width={200}
                  height={100}
                />
              </Col>
            </Row>
            <Row className="d-flex justify-content-center text-align-center align-items-center">
              <Col />
              <Col sm={5} className={styles.mobilemenu_middlecol}>
                <Link href="/">
                  <a
                    className={`d-flex align-items-center ${
                      router.pathname === "/"
                        ? styles.menuactive
                        : styles.menuinactive
                    }`}
                    onClick={() => onHide()}>
                    <Polygon className="me-2" />
                    <p className="p-0 m-0">{lan.header.homepage}</p>
                  </a>
                </Link>
                {lan.header.links.map((link, index) => {
                  return (
                    <div
                      key={`${index}_header_links_mobile`}
                      style={{ width: "100%" }}
                      className="flex justify-content-center flex-column">
                      <Link href={link.link}>
                        <a
                          className={`d-flex align-items-center ${
                            router.pathname === link.link
                              ? styles.menuactive
                              : styles.menuinactive
                          }`}
                          onClick={() => onHide()}>
                          <Polygon className="me-2" />
                          <p className="p-0 m-0">{link.text}</p>
                        </a>
                      </Link>
                    </div>
                  );
                })}
                <Link href="/contact">
                  <a
                    className={`d-flex  align-items-center ${
                      router.pathname === "/contact"
                        ? styles.menuactive
                        : styles.menuinactive
                    }`}
                    onClick={() => onHide()}>
                    <Polygon className="me-2" />
                    <p className="p-0 m-0">{lan.commontext.registerinterest}</p>
                  </a>
                </Link>
              </Col>
              <Col />
            </Row>
            <Row className="flex justify-content-center">
              <Col className={styles.mobilemenu_languagecol} md={6}>
                <Button
                  className={
                    currentLang === "en"
                      ? styles.btnlangactive
                      : styles.btnlanginactive
                  }
                  onClick={() => handleLang("en")}>
                  English
                </Button>
                <Button
                  className={
                    currentLang === "ar"
                      ? styles.btnlangactive
                      : styles.btnlanginactive
                  }
                  onClick={() => handleLang("ar")}>
                  عربي
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className={styles.header__modalbottom}>
          <Col className={styles.header_btmImage}>
            <Image
              src="/Images/mobilemenuleft.png"
              layout="fill"
              alt="sustainablecity yiti villas"
            />
          </Col>
          <Col className={`${styles.header_btmImage} ${styles.btmImage2}`}>
            <Image
              src="/Images/mobilemenuright.png"
              layout="fill"
              alt="sustainablecity yiti villas"
            />
          </Col>
        </Row> */}
      </Modal.Body>
    </Modal>
  );
};

export default MobileMenu;
