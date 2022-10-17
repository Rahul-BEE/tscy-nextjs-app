import { Col, Row } from "react-bootstrap";
import useLangage from "../../utils/useLanguage";
import styles from "../../styles/villaplans.module.scss";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

import Maidroom from "../../public/Svg/homevillaplan/bedroom.svg";
import Parking from "../../public/Svg/homevillaplan/parking.svg";
import Garden from "../../public/Svg/homevillaplan/garden.svg";
import Bathroom from "../../public/Svg/homevillaplan/bathroom.svg";
import Bedroom from "../../public/Svg/homevillaplan/maidroom.svg";
import VillaplansMobile from "./Villaplans/VillaplansMobile";
import Link from "next/link";

const Villplans = () => {
  const lan = useLangage();
  const [villaIndex, setIndex] = useState(0);
  const [currentvilla, setVilla] = useState(lan.villaplansection.villas[0]);

  const [showForm, setShowForm] = useState(false);
  const [dataReceived, setDataReceived] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleUserInput = () => {};
  useEffect(() => {
    setVilla(lan.villaplansection.villas[villaIndex]);
  }, [lan]);
  const changeVilla = (index) => {
    setIndex(index);
    setVilla(lan.villaplansection.villas[index]);
  };

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
          <div className={styles.download_content}>
            {lan.commontext.download} {lan.commontext.brochure}
          </div>
          <div className={styles.download_content}>
            {lan.commontext.download} {lan.commontext.floorplan}
          </div>
          <Link href={`/floorplan/${currentvilla.slug}`} passHref>
            <div className={styles.download_content}>
              {lan.commontext.seedetails}
            </div>
          </Link>
        </div>

        <div className={styles.villaplanImageContainer}>
          <Image
            src={currentvilla.mainImg}
            width={1531}
            height={439}
            layout="responsive"
          />
          <div className={styles.radialbg}></div>
          <div className={styles.villaplanfeatures}>
            {dataReceived ? (
              <div>Data receiver</div>
            ) : !showForm ? (
              <>
                <p className={styles.heading}>
                  {lan.commontext.propsubheading_1}
                </p>
                <p>
                  <Bedroom /> <span>{lan.commontext.bedroom}</span>
                </p>
                <p>
                  <Bathroom /> <span>{lan.commontext.bathroom}</span>
                </p>
                <p>
                  <Maidroom /> <span>{lan.commontext.maidroom}</span>
                </p>
                <p>
                  <Garden /> <span>{lan.commontext.privategarden}</span>
                </p>
                <p>
                  <Parking /> <span>{lan.commontext.parking}</span>
                </p>

                <div>
                  <motion.button
                    onClick={() => setShowForm(true)}
                    whileHover={{
                      scale: 1.02,
                    }}>
                    {lan.commontext.registerinterest}
                  </motion.button>
                </div>
              </>
            ) : (
              <div className={styles.villaplanuserform}>
                <div className={styles.userformcontainer}>
                  <p className={styles.heading}>Add your details</p>
                  <form className={styles.userform}>
                    <div className={styles.seperator}></div>
                    <div className={styles.formItem}>
                      <label htmlFor="name">
                        {lan.contact.register.formdata.name.title}
                      </label>
                      <input
                        type={"text"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={
                          lan.contact.register.formdata.name.placeholder
                        }
                      />
                    </div>
                    <div className={styles.seperator}></div>
                    <div className={styles.formItem}>
                      <label htmlFor="email">
                        {lan.contact.register.formdata.email.title}
                      </label>
                      <input
                        type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={
                          lan.contact.register.formdata.email.placeholder
                        }
                      />
                    </div>
                    <div className={styles.seperator}></div>
                    <div className={styles.formItem}>
                      <label htmlFor="name">
                        {lan.contact.register.formdata.phone.title}
                      </label>
                      <input
                        type={"text"}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={
                          lan.contact.register.formdata.phone.placeholder
                        }
                      />
                    </div>
                    <div className={styles.seperator}></div>
                  </form>
                </div>
                <div>
                  <motion.button
                    onClick={() => handleUserInput(true)}
                    whileHover={{
                      scale: 1.02,
                    }}>
                    {lan.commontext.registerinterest}
                  </motion.button>
                </div>
              </div>
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
