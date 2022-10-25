import { Col, Row } from "react-bootstrap";
import useLangage from "../../utils/useLanguage";
import styles from "../../styles/villaplans.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRightCircle, BsArrowDownCircle } from "react-icons/bs";
import Maidroom from "../../public/Svg/homevillaplan/bedroom.svg";
import Parking from "../../public/Svg/homevillaplan/parking.svg";
import Garden from "../../public/Svg/homevillaplan/garden.svg";
import Bathroom from "../../public/Svg/homevillaplan/bathroom.svg";
import Bedroom from "../../public/Svg/homevillaplan/maidroom.svg";
import Arrowleft from "../../public/Svg/homevillaplan/villaplanarrowleft.svg";
import VillaplansMobile from "./Villaplans/VillaplansMobile";
import Link from "next/link";
import { useAppContext } from "../../context/AppContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Loader from "../Loader/Loader";
import sendEmail from "../../utils/emailservice";
const Villplans = () => {
  const { state, dispatch } = useAppContext();
  const lan = useLangage();
  const [villaIndex, setIndex] = useState(1);
  const [currentvilla, setVilla] = useState(lan.villaplansection.villas[1]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [dataReceived, setDataReceived] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleUserInput = async () => {
    setLoading(true);
    let data = {
      email,
      name,
      phone,
    };

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
  };
  const handleClick = (id) => {
    setShowForm(true);
  };

  const changeVilla = (index) => {
    setIndex(index);
    setShowForm(false);
    setVilla(lan.villaplansection.villas[index]);
  };
  useEffect(() => {
    if (state.userdata?.name !== "") {
      setDataReceived(true);
    } else {
      setDataReceived(false);
    }
  }, [state]);
  return (
    <div className={styles.app_villa_main}>
      <div className={styles.app__villaplanmaincontainer_desktop}>
        <Row className="headingRow">
          <Col>
            {/* <h5 className="sectionsubHeading">{lan.villaplansection.title1}</h5> */}
            <h2 className="sectionmainHeading">
              {lan.villaplansection.title2}
            </h2>
          </Col>
        </Row>
        <Row className={` ${styles.villaplanindexrow} flex`}>
          {lan &&
            lan.villaplansection.villas.map((villa, index) => (
              <Col
                className={`${styles.villaplanindexcol} flex ${
                  currentvilla.id === index + 1 ? styles.activeVilla : ""
                }`}
                md={3}
                lg={3}
                sm={3}
                key={`${index}_villas`}
                onClick={() => changeVilla(index)}>
                <motion.h5
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}>
                  {villa.bedrooms}
                </motion.h5>
                <p>{villa.homepagetitle}</p>
                <span className={styles[`border_line_${index}`]}></span>
              </Col>
            ))}
        </Row>
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
            }}>
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
                style={{
                  marginLeft: "0.5rem",
                }}
              />
            </motion.div>
          </Link>
        </div>

        <div className={styles.villaplanImageContainer}>
          <Image
            src={currentvilla.mainImg}
            width={1531}
            height={439}
            layout="responsive"
            blurDataURL={currentvilla.blurImg}
            placeholder="blur"
            alt="Sustainable City Yiti"
          />
          <div className={styles.radialbg}></div>
          <div className={styles.villaplanfeatures}>
            {!showForm ? (
              <div className={styles.villaplanfeatureinner}>
                <p className={styles.heading}>
                  {lan.commontext.propsubheading_1}
                </p>
                <div className={styles.featurediv}>
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

                <div className={styles.resgisterinterestbtn}>
                  <motion.button
                    onClick={() => handleClick()}
                    whileHover={{
                      scale: 1.02,
                    }}>
                    {lan.commontext.registerinterest}
                  </motion.button>
                </div>
              </div>
            ) : (
              <>
                {dataReceived ? (
                  <div className={styles.villaplanuserform}>
                    <div className={styles.gobackformbtn}>
                      <Arrowleft onClick={() => setShowForm(false)} />
                    </div>
                    <p className={styles.heading}>
                      {lan.commontext.thanksnote}
                    </p>
                    <div className={styles.btncontainer}>
                      <motion.div
                        onClick={() => handleClick(1)}
                        className={styles.download_content}
                        whileHover={{
                          color: "#058DA6",
                          backgroundColor: "#fff",
                        }}>
                        {lan.commontext.download} {lan.commontext.brochure}{" "}
                      </motion.div>
                      <motion.div
                        onClick={() => handleClick(2)}
                        className={styles.download_content}
                        whileHover={{
                          color: "#058DA6",
                          backgroundColor: "#fff",
                        }}>
                        {lan.commontext.download} {lan.commontext.floorplan}{" "}
                      </motion.div>
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
                  <div className={styles.villaplanuserform}>
                    <div className={styles.gobackformbtn}>
                      <Arrowleft onClick={() => setShowForm(false)} />
                    </div>
                    <p className={styles.heading}>
                      {lan.commontext.adddetails}
                    </p>
                    <div className={styles.userformcontainer}>
                      <form className={styles.userform}>
                        <div className={styles.formItem}>
                          <label htmlFor="name">
                            {lan.contact.register.formdata.name.title}
                          </label>
                          <input
                            type={"text"}
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                            placeholder={
                              lan.contact.register.formdata.name.placeholder
                            }
                          />
                        </div>
                        <div className={styles.formItem}>
                          <label htmlFor="email">
                            {lan.contact.register.formdata.email.title}
                          </label>
                          <input
                            type={"email"}
                            value={email}
                            name="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={
                              lan.contact.register.formdata.email.placeholder
                            }
                          />
                        </div>
                        <div className={styles.formItem}>
                          <label htmlFor="name">
                            {lan.contact.register.formdata.phone.title}
                          </label>
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
                        }}>
                        {loading ? <Loader /> : lan.commontext.registerinterest}
                      </motion.button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <div className={styles.villaplanmaincontainer_mobile}>
        <VillaplansMobile />
      </div>
    </div>
  );
};

export default Villplans;
