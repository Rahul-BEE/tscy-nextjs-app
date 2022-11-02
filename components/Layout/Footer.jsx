import styles from "../../styles/layout.module.scss";
import useLanguage from "../../utils/useLanguage";
import Icon from "../../public/Svg/footer/footerLogo.svg";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Accord from "./Accord";
import Link from "next/link";
import { VscGlobe } from "react-icons/vsc";
import { useRouter } from "next/router";
function Footer() {
  const lan = useLanguage();
  const location = useRouter();
  const [language, setLanguage] = useState("en");
  const data = lan.footer;
  const handelLanguageChange = (lang) => {
    let lan = "";
    if (language === "en") {
      lan = "ar";
    } else {
      lan = "en";
    }
    localStorage.setItem("language", JSON.stringify(lan));
    setLanguage(lan);
    location.push(location.asPath, location.asPath, { locale: lan });
    location.events.on("routeChangeComplete", async () => {
      location.reload();
    });
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setLanguage(
        JSON.parse(localStorage.getItem("language"))
          ? JSON.parse(localStorage.getItem("language"))
          : "en"
      );
    }
  }, []);
  return (
    <div className={styles.footer}>
      <div className={styles.innerFooter}>
        <div className={styles.footerLogoContainer}>
          <Link
            href={"/"}
            passHref
            style={{
              cursor: "pointer",
            }}>
            <a>
              <Icon id="footericonhead" />
            </a>
          </Link>
        </div>
        <div className={styles.footercontent}>
          <div className={styles.mainfooter}>
            {data && (
              <div className={styles.footercard}>
                <h4>{data[0].title}</h4>
                <div className={styles.footercardlink}>
                  {data[0].links.map((item, index) => (
                    <Link key={index} href={item.link}>
                      <motion.a
                        initial={{
                          color: "#777777",
                        }}
                        whileHover={{
                          color: "#000",
                        }}>
                        {item.text}
                      </motion.a>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {data && (
              <div className={styles.footercard}>
                <h4>{data[1].title}</h4>
                <div className={styles.footercardlink}>
                  {data[1].links.map((item, index) => (
                    <Link key={index} href={item.link}>
                      <motion.a
                        initial={{
                          color: "#777777",
                        }}
                        whileHover={{
                          color: "#000",
                        }}>
                        {item.text}
                      </motion.a>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {data && (
              <div className={styles.footercard}>
                <h4>{data[2].title}</h4>
                <div className={styles.footercardlink}>
                  {data[2].links.map((item, index) => (
                    <Link key={index} href={item.link}>
                      <a target={"_blank"} rel="noreferrer">
                        <motion.p
                          initial={{
                            color: "#777777",
                          }}
                          whileHover={{
                            color: "#000",
                          }}>
                          {item.text}
                        </motion.p>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Accord />
          <div className={styles.contactinfo}>
            <h4>{data[3].title}</h4>

            <div className={styles.iteminfo}>
              <h6>{data[3].links[0].title}</h6>
              <a href={`mailto:${data[3].links[0].link}`}>
                {data[3].links[0].link}
              </a>
            </div>
            <div className={styles.iteminfo}>
              <h6>{data[3].links[1].title}</h6>
              <a href={`tel:+968${data[3].links[1].link}`}>
                {data[3].links[1].link}
              </a>
            </div>
            <div className={styles.iteminfo}>
              <h6>{data[3].links[2].title}</h6>
              <a href={`tel:+968${data[3].links[1].link}`}>
                {data[3].links[2].link}
              </a>
            </div>
            <div className={styles.socialIcons}>
              <Link
                href={
                  "https://www.linkedin.com/company/the-sustainable-city-yiti/"
                }>
                <a target={"_blank"} rel="noreferrer">
                  <FaLinkedin color="#0077B5" />
                </a>
              </Link>
              <Link
                href={
                  "https://twitter.com/TSCYiti?s=20&t=YSRqGJh4w6nxJuNR23i_rw"
                }>
                <a target={"_blank"} rel="noreferrer">
                  <FaTwitterSquare color="#50ABF1" />
                </a>
              </Link>
              <Link
                href={
                  "https://www.facebook.com/ThesustainablecityYiti?ref=py_c"
                }>
                <a target={"_blank"} rel="noreferrer">
                  <FaFacebookSquare color="#3A559F" />
                </a>
              </Link>
              <Link href={"https://www.instagram.com/thesustainablecity_yiti"}>
                <a target={"_blank"} rel="noreferrer">
                  <FaInstagramSquare color="#E14478" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footercopyright}>
          <hr />
          <div className={styles.footercpycontent}>
            <div className={styles.left}>
              <h6>{lan.commontext.diamonddevelopers} </h6>
              <p>{lan.commontext.cpyright}</p>
            </div>
            <div
              className={styles.right}
              onClick={() => handelLanguageChange()}>
              <VscGlobe /> {lan.commontext.language}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
