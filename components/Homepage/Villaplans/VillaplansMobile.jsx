import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/villaplans.module.scss";
import { motion, useAnimation } from "framer-motion";
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
import Loader from "../../Loader/Loader";
function VillaplansMobile() {
  const lan = useLanguage();
  const ref = useRef(null);
  const { state, dispatch } = useAppContext();
  const test = useAnimation();
  const [showForm, setShowForm] = useState(false);
  const [dataReceived, setDataReceived] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [activeVilla, setActiveVilla] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentvilla, setVilla] = useState(lan.villaplansection.villas[0]);
  const [brochureDownload, setBrochureDownload] = useState(null);
  const handleUserInput = async () => {
    setLoading(true);
    let data = {
      email,
      name,
      phone,
    };
    //sent data to the backend
    let result = await sendEmail({ data, type: 0 });
    if (result === "success") {
      setLoading(false);
    } else {
      setLoading(false);
    }
    dispatch({
      type: "updateuser",
      value: data,
    });
    setDataReceived(true);
    if (brochureDownload === 1) {
      window.open("/brochure/Yiti Brochure.pdf");
    } else if (brochureDownload === 2) {
      window.open("/brochure/Villa Brochure Final.pdf");
    } else {
      return;
    }
  };
  const handleClick = (id) => {
    setShowForm(true);
    setBrochureDownload(id);
  };

  const changeVilla = (index) => {
    setActiveVilla(index);
    setVilla(lan.villaplansection.villas[index]);
    setShowForm(false);
    console.log("w", ref.current?.clientWidth - window.innerWidth);
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
          animate={test}
        >
          {lan &&
            lan.villaplansection.villas.map((villa, index) => (
              <div
                key={index}
                className={`${styles.content_container} flex ${
                  currentvilla.id === index + 1 ? styles.activeVilla : ""
                }`}
                onClick={() => changeVilla(index)}
              >
                <div className={styles.content}>
                  <div className={styles.number}>{villa.bedrooms}</div>
                  <div className={styles.text}>
                    <p
                      style={{
                        textTransform: "uppercase",
                      }}
                    >
                      {lan.commontext.bedroom}
                    </p>{" "}
                    {villa.type}
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
      </div>

      <Row className={styles.descriptionRow}>
        <Col md={9} lg={9} sm={12} className={styles.text}>
          <p>{currentvilla.description}</p>
        </Col>
      </Row>
      <div className={styles.villadownload}>
        <motion.div
          onClick={() => handleClick(1)}
          className={styles.download_content}
          whileHover={{
            backgroundColor: "#058DA6",
            color: "#fff",
          }}
        >
          {lan.commontext.download} {lan.commontext.brochure}{" "}
          <BsArrowDownCircle
            style={{
              marginLeft: "0.5rem",
            }}
          />
        </motion.div>
        <motion.div
          onClick={() => handleClick(2)}
          className={styles.download_content}
          whileHover={{
            backgroundColor: "#058DA6",
            color: "#fff",
          }}
        >
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
            }}
          >
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

      <div className={styles.villaplanImageContainer}>
        <Image
          src={lan.villaplansection.villas[activeVilla].mainImg}
          width={900}
          height={500}
          layout="responsive"
          objectFit="cover"
          objectPosition={"center"}
          alt="Sustainable City Yiti"
        />
      </div>
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
            <Button onClick={() => handleClick()}>{lan.commontext.registerinterest}</Button>
          </div>
        </div>
      ) : (
        <>
          {dataReceived ? (
            <div className={styles.villaplanuserform}>
              <div
                className={styles.gobackformbtn}
                style={{
                  left: "2rem",
                }}
              >
                <Arrowleft onClick={() => setShowForm(false)} />
              </div>
              <p className={styles.heading}>{lan.commontext.thanksnote}</p>
              <div className={styles.btncontainer}>
                <Link href={"/brochure/Yiti Brochure.pdf"}>
                  <a target={"_blank"} rel="noreferrer">
                    <motion.div
                      onClick={() => handleClick(1)}
                      className={styles.download_content}
                      whileHover={{
                        color: "#058DA6",
                        backgroundColor: "#fff",
                      }}
                    >
                      {lan.commontext.download} {lan.commontext.brochure}{" "}
                    </motion.div>
                  </a>
                </Link>
                <Link href={"/brochure/Villa Brochure Final.pdf"}>
                  <a target={"_blank"} rel="noreferrer">
                    <motion.div
                      onClick={() => handleClick(2)}
                      className={styles.download_content}
                      whileHover={{
                        color: "#058DA6",
                        backgroundColor: "#fff",
                      }}
                    >
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
                    }}
                  >
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
            <div className={styles.villaplanuserform}>
              <div
                className={styles.gobackformbtn}
                style={{
                  left: "2rem",
                }}
              >
                <Arrowleft onClick={() => setShowForm(false)} />
              </div>
              <p className={styles.heading}>{lan.commontext.adddetails}</p>
              <div className={styles.userformcontainer}>
                <form className={styles.userform}>
                  <div className={styles.formItem}>
                    <label htmlFor="name">{lan.contact.register.formdata.name.title}</label>
                    <input
                      type={"text"}
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                      placeholder={lan.contact.register.formdata.name.placeholder}
                    />
                  </div>
                  <div className={styles.formItem}>
                    <label htmlFor="email">{lan.contact.register.formdata.email.title}</label>
                    <input
                      type={"email"}
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={lan.contact.register.formdata.email.placeholder}
                    />
                  </div>
                  <div className={styles.formItem}>
                    <label htmlFor="name">{lan.contact.register.formdata.phone.title}</label>
                    <PhoneInput
                      country={"om"}
                      value={phone}
                      containerClass={styles.picontainerclass}
                      inputClass={styles.piinputclass}
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
              <div className={styles.resgisterinterestbtn}>
                <motion.button
                  onClick={() => handleUserInput()}
                  whileHover={{
                    scale: 1.02,
                  }}
                >
                  {loading ? <Loader /> : lan.commontext.registerinterest}
                </motion.button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default VillaplansMobile;
