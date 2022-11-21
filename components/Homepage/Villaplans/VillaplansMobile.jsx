import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/villaplans.module.scss";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import useLanguage from "../../../utils/useLanguage";
import Image from "next/image";
import Arrowleft from "../../../public/Svg/homevillaplan/villaplanarrowleft.svg";
import { BsArrowRightCircle, BsArrowDownCircle } from "react-icons/bs";
import Maidroom from "../../../public/Svg/homevillaplan/bedroom.svg";
import Parking from "../../../public/Svg/homevillaplan/parking.svg";
import Garden from "../../../public/Svg/homevillaplan/garden.svg";
import Bathroom from "../../../public/Svg/homevillaplan/bathroom.svg";
import Bedroom from "../../../public/Svg/homevillaplan/maidroom.svg";
import Link from "next/link";
import { useAppContext } from "../../../context/AppContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import sendEmail from "../../../utils/emailservice";
import Info from "../../../public/Svg/homevillaplan/info.svg";
import Loader from "../../Loader/Loader";
import { useInView } from "react-intersection-observer";
import TagManager from "react-gtm-module";
const itemVariant = {
  visible: {
    x: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: (direction) => ({
    x: direction === 1 ? "100%" : "-100%",
  }),
  exit: (direction) => ({
    x: direction === 1 ? "-100%" : "100%",
    transition: {
      staggerChildren: 0.2,
    },
  }),
};

function VillaplansMobile() {
  const lan = useLanguage();
  const ref = useRef(null);
  const formRef = useRef(null);
  const { state, dispatch } = useAppContext();
  const test = useAnimation();
  const [showForm, setShowForm] = useState(false);
  const [dataReceived, setDataReceived] = useState(false);
  const [error, setError] = useState(false);
  const [ferror, setferror] = useState(false);
  const [eerror, seteerror] = useState(false);
  const [perror, setperror] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [direction, setDirection] = useState(1);
  const [phone, setPhone] = useState("");
  const [activeVilla, setActiveVilla] = useState(0);
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [loading, setLoading] = useState(false);
  const [currentvilla, setVilla] = useState(lan.villaplansection.villas[0]);
  const [brochureDownload, setBrochureDownload] = useState(null);
  const zeroserviceanimation = useAnimation();
  const [contaierRef, isInView] = useInView({
    threshold: 0.9,
  });
  const onFocusFunc = (id) => {
    switch (id) {
      case 1: {
        setferror(false);
        return;
      }
      case 2: {
        seteerror(false);
        return;
      }
      case 3: {
        setperror(false);
        return;
      }
      default: {
        setError(false);
      }
    }
  };
  const zeroservicevariant = {
    visible: {
      opacity: 1,
      x: "0%",
      width: "100%",
    },
    hidden: {
      opacity: 0,
      x: lan.language === 1 ? "100%" : "-100%",
      width: "0%",
    },
  };
  const handleUserInput = async () => {
    setError(false);
    let e = false;
    if (name.trim().length < 1) {
      setError(true);
      setferror(true);
      e = true;
    } else {
      setferror(false);
    }
    if (!email.trim().match(emailRegex)) {
      setError(true);
      seteerror(true);
      e = true;
    } else {
      seteerror(false);
    }
    if (phone.trim().length < 10) {
      setError(true);
      setperror(true);
      e = true;
    } else {
      setperror(false);
    }

    if (e) {
      return;
    }
    setLoading(true);
    const data = {
      firstname: name,
      email,
      phone,
      leadfrom: "Website",
    };
    let result = sendEmail({ data, temmplate: 0 });
    if (result) {
      setLoading(false);
    } else {
      setLoading(false);
    }
    dispatch({
      type: "updateuser",
      value: data,
    });
    setDataReceived(true);
    TagManager.dataLayer({
      dataLayer: {
        event: "register_interest_from_villa_plan",
        params: {
          villa: currentvilla.title,
        },
      },
    });
    if (brochureDownload === 1) {
      window.open("/brochure/Yiti Brochure.pdf");
    } else if (brochureDownload === 2) {
      window.open("/brochure/Villa Brochure Final.pdf");
    } else {
      return;
    }

    //saleforce
    // const config = {
    //   method: "POST",
    //   mode: "no-cors",
    // };
    // await fetch(
    //   `https://test.salesforce.com/servlet/servlet.WebToLead?oid=00D250000009OKo&first_name=${name}&email=${email}&phone=${phone}`,
    //   config
    // )
    //   .then((result) => {
    //     setLoading(false);
    //     dispatch({
    //       type: "updateuser",
    //       value: data,
    //     });
    //     setDataReceived(true);
    // TagManager.dataLayer({
    //   dataLayer: {
    //     event: "register_interest_from_villa_plan",
    //   },
    // });
    //     if (brochureDownload === 1) {
    //       window.open("/brochure/Yiti Brochure.pdf");
    //     } else if (brochureDownload === 2) {
    //       window.open("/brochure/Villa Brochure Final.pdf");
    //     } else {
    //       return;
    //     }
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     return;
    //   });
  };
  const handleClick = async ({ id, scroll }) => {
    if (scroll && !dataReceived) {
      await formRef.current.scrollIntoView({
        alignToTop: false,
        behavior: "smooth",
        block: "center",
      });
    }
    if (dataReceived) {
      if (id === 1) {
        window.open("/brochure/Yiti Brochure.pdf");
      } else if (id === 2) {
        window.open("/brochure/Villa Brochure Final.pdf");
      } else {
        setShowForm(true);
        return;
      }
    } else {
      setShowForm(true);
      setBrochureDownload(id);
    }
  };

  const changeVilla = (index) => {
    if (activeVilla > index) {
      setDirection(-1);
    } else {
      setDirection(1);
    }
    setActiveVilla(index);
    setVilla(lan.villaplansection.villas[index]);
    setShowForm(false);
    if (index === 1) {
      test.start({
        x: lan.language === 1 ? "-62px" : "62px",
      });
    } else if (index === 2) {
      test.start({
        x: lan.language === 1 ? "-160px" : "160px",
      });
    } else {
      test.start({
        x: 0,
      });
    }
  };

  useEffect(() => {
    if (state.userdata?.name !== "") {
      setDataReceived(true);
    } else {
      setDataReceived(false);
    }
  }, [state]);

  const villaplandragHandler = (info) => {
    if (
      info.velocity.x < -10 &&
      activeVilla < lan.villaplansection.villas.length - 1
    ) {
      setDirection(1);
      setActiveVilla((prev) => prev + 1);
      setVilla(lan.villaplansection.villas[activeVilla + 1]);
      changeVilla(activeVilla + 1);
    } else if (info.velocity.x > 10 && activeVilla !== 0) {
      setActiveVilla((prev) => prev - 1);
      setDirection(-1);
      setVilla(lan.villaplansection.villas[activeVilla - 1]);
      changeVilla(activeVilla - 1);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (isInView) {
      zeroserviceanimation.start("visible");
    }
  }, [isInView]);
  return (
    <div className={styles.section_villaplan_mobile}>
      <Row className="headingRow">
        <Col>
          {/* <h5 className="sectionsubHeading">Redefining living with our</h5> */}
          <h2 className="sectionmainHeading">{lan.villaplansection.title2}</h2>
        </Col>
      </Row>

      <div className={styles.villa_slide}>
        <motion.div
          className={styles.container}
          drag={"x"}
          dragConstraints={{ right: 0, left: -250 }}
          ref={ref}
          animate={test}>
          {lan &&
            lan.villaplansection.villas.map((villa, index) => (
              <div
                key={index}
                className={`${styles.content_container} flex ${
                  currentvilla.id === index + 1 ? styles.activeVilla : ""
                }`}
                onClick={() => changeVilla(index)}>
                <div className={styles.content}>
                  <div className={styles.number}>{villa.bedrooms}</div>
                  <div className={styles.text}>
                    <p
                      style={{
                        textTransform: "uppercase",
                      }}>
                      {lan.commontext.bedroom}
                    </p>{" "}
                    {villa.type}
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
      <div className={styles.villaplandetailmain}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeVilla}
            className={styles.villaplaninnercontainer}
            drag="x"
            dragConstraints={{
              right: 0,
              left: 0,
            }}
            variants={itemVariant}
            transition={{
              duration: 1.5,
              staggerChildren: 0.5,
            }}
            animate={"visible"}
            initial="hidden"
            exit="exit"
            dragMomentum={false}
            dragElastic={false}
            onDragEnd={(_, info) => villaplandragHandler(info)}
            custom={direction}>
            <div className={styles.descriptionRow}>
              <p className={styles.text}>{currentvilla.description}</p>
            </div>
            <div className={styles.villadownload}>
              <motion.div
                onClick={() => handleClick({ id: 1, scroll: true })}
                className={styles.download_content}
                whileHover={{
                  backgroundColor: "#058DA6",
                  color: "#fff",
                }}>
                {lan.commontext.download} {lan.commontext.brochure}{" "}
                <BsArrowDownCircle
                  style={{
                    marginLeft: "0.5rem",
                  }}
                />
              </motion.div>
              <motion.div
                onClick={() => handleClick({ id: 1, scroll: true })}
                className={styles.download_content}
                whileHover={{
                  backgroundColor: "#058DA6",
                  color: "#fff",
                }}>
                {lan.commontext.download} {lan.commontext.floorplan}{" "}
                <BsArrowDownCircle
                  style={{
                    marginLeft: "0.5rem",
                  }}
                />
              </motion.div>
              <Link href={`/floorplan/${currentvilla.slug}`} passHref>
                <motion.div
                  className={styles.download_content}
                  whileHover={{
                    backgroundColor: "#058DA6",
                    color: "#fff",
                  }}>
                  {lan.commontext.seedetails}{" "}
                  <BsArrowRightCircle
                    className={"arrowright"}
                    style={{
                      marginLeft: "0.5rem",
                    }}
                  />
                </motion.div>
              </Link>
            </div>
            <div className={styles.villaplanImageContainer} ref={contaierRef}>
              <Image
                src={lan.villaplansection.villas[activeVilla].mainImg}
                width={1100}
                height={500}
                layout="responsive"
                objectFit="cover"
                objectPosition={activeVilla === 0 ? "20% 50%" : "50% 50%"}
                alt="Sustainable City Yiti"
              />
              <div
                className={`${styles.zeroservice} ${styles.zeroservicemobile}`}>
                <div className={styles.zeroserviceitem}>
                  <motion.p
                    animate={zeroserviceanimation}
                    variants={zeroservicevariant}
                    initial="hidden">
                    {lan.commontext.zeroservice}
                  </motion.p>
                  <span>
                    <Info />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div ref={formRef}>
        {!showForm ? (
          <div className={styles.villaplanfeatures_mobile}>
            <p className={styles.heading}>{lan.commontext.propsubheading_1}</p>

            <div className={styles.items}>
              <p>
                <Bedroom />{" "}
                <span>
                  {currentvilla.bedrooms} {lan.commontext.bedroom}
                </span>
              </p>
              <p>
                <Bathroom />{" "}
                <span>
                  {currentvilla.bathrooms} {lan.commontext.bathroom}
                </span>
              </p>
              <p>
                <Maidroom />{" "}
                <span>
                  {currentvilla.maidroom} {lan.commontext.maidroom}
                </span>
              </p>
              <p>
                <Garden /> <span>{lan.commontext.privategarden}</span>
              </p>
              <p>
                <Parking /> <span>{lan.commontext.parking}</span>
              </p>
            </div>

            <div>
              <Button onClick={() => handleClick({ scroll: false })}>
                {lan.commontext.registerinterest}
              </Button>
            </div>
          </div>
        ) : (
          <>
            {dataReceived ? (
              <div
                className={styles.villaplanuserform}
                style={{
                  paddingInline: "25px",
                }}>
                <div className={styles.gobackformbtn}>
                  <Arrowleft onClick={() => setShowForm(false)} />
                </div>
                <p className={styles.heading}>{lan.commontext.thanksnote}</p>
                <div className={styles.btncontainer}>
                  <Link href={"/brochure/Yiti Brochure.pdf"}>
                    <a target={"_blank"} rel="noreferrer">
                      <motion.div
                        onClick={() => handleClick({ id: 1, scroll: false })}
                        className={styles.download_content}
                        whileHover={{
                          color: "#058DA6",
                          backgroundColor: "#fff",
                        }}>
                        {lan.commontext.download} {lan.commontext.brochure}{" "}
                      </motion.div>
                    </a>
                  </Link>
                  <Link href={"/brochure/Villa Brochure Final.pdf"}>
                    <a target={"_blank"} rel="noreferrer">
                      <motion.div
                        onClick={() => handleClick({ id: 1, scroll: false })}
                        className={styles.download_content}
                        whileHover={{
                          color: "#058DA6",
                          backgroundColor: "#fff",
                        }}>
                        {lan.commontext.download} {lan.commontext.floorplan}{" "}
                      </motion.div>
                    </a>
                  </Link>
                  <Link href={`/floorplan/${currentvilla.slug}`} passHref>
                    <motion.div
                      className={styles.download_content}
                      whileHover={{
                        color: "#058DA6",
                        backgroundColor: "#fff",
                      }}>
                      {lan.commontext.seedetails}{" "}
                      <BsArrowRightCircle
                        style={{
                          marginLeft: "0.5rem",
                        }}
                      />
                    </motion.div>
                  </Link>
                </div>
              </div>
            ) : (
              <div
                className={styles.villaplanuserform}
                style={{
                  paddingInline: "25px",
                }}>
                <div className={styles.gobackformbtn}>
                  <Arrowleft onClick={() => setShowForm(false)} />
                </div>
                <p className={styles.heading}>{lan.commontext.adddetails}</p>
                <div className={styles.userformcontainer}>
                  <form className={styles.userform}>
                    <div
                      className={styles.formItem}
                      data-error={ferror ? "true" : "false"}>
                      <label htmlFor="name">
                        {lan.contact.register.formdata.fullname.title}
                      </label>
                      <input
                        type={"text"}
                        value={name}
                        onFocus={() => onFocusFunc(1)}
                        className={ferror ? styles.error : ""}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={
                          lan.contact.register.formdata.fullname.placeholder
                        }
                      />
                    </div>
                    <div
                      className={styles.formItem}
                      data-error={eerror ? "true" : "false"}>
                      <label htmlFor="email">
                        {lan.contact.register.formdata.email.title}
                      </label>
                      <input
                        type={"email"}
                        value={email}
                        onFocus={() => onFocusFunc(2)}
                        className={eerror ? styles.error : ""}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={
                          lan.contact.register.formdata.email.placeholder
                        }
                      />
                    </div>
                    <div
                      className={styles.formItem}
                      data-error={perror ? "true" : "false"}>
                      <label htmlFor="name">
                        {lan.contact.register.formdata.phone.title}
                      </label>
                      <PhoneInput
                        country={"om"}
                        value={phone}
                        onFocus={() => onFocusFunc(3)}
                        inputProps={{
                          "data-color": phone.length > 3 ? "true" : "false",
                        }}
                        containerClass={styles.picontainerclass}
                        inputClass={perror ? styles.error : ""}
                        buttonClass={styles.buttonClass}
                        onChange={(val) => setPhone(val)}
                        enableSearch={true}
                        searchClass={styles.searchClass}
                        countryCodeEditable={false}
                        searchNotFound={"No country found"}
                      />
                    </div>
                  </form>
                </div>
                <div className={styles.registerinterestbtn}>
                  <motion.button
                    onClick={() => handleUserInput()}
                    whileHover={{
                      scale: !loading ? 1.02 : 1,
                    }}
                    disabled={loading}>
                    {loading ? <Loader /> : lan.commontext.registerinterest}
                  </motion.button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default VillaplansMobile;
