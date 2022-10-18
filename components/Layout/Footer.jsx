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
import React from "react";
import Accord from "./Accord";
import Link from "next/link";
import { VscGlobe } from "react-icons/vsc";
function Footer() {
  const lan = useLanguage();
  const data = lan.footer;

  return (
    <div className={styles.footer}>
      <div className={styles.innerFooter}>
        <div className={styles.footerLogoContainer}>
          <Icon id="footericonhead" />
        </div>
        <div className={styles.footercontent}>
          <div className={styles.mainfooter}>
            {data && (
              <div className={styles.footercard}>
                <h4>{data[0].title}</h4>
                <div className={styles.footercardlink}>
                  {data[0].links.map((item, index) => (
                    <Link key={index} href={item.link}>
                      <motion.a>{item.text}</motion.a>
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
                      <motion.a>{item.text}</motion.a>
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
                      <motion.a target={"_blank"} rel="noreferrer">
                        {item.text}
                      </motion.a>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Accord />
          <div className={styles.contactinfo}>
            <h4>{data[3].title}</h4>
            {data[3].links.map((item, index) => (
              <div key={index}>
                <h6>{item.title}</h6>
                <p>{item.link}</p>
              </div>
            ))}
            <div className={styles.socialIcons}>
              <Link href={"/"}>
                <a>
                  <FaLinkedin color="#0077B5" />
                </a>
              </Link>
              <Link href={"/"}>
                <a>
                  <FaTwitterSquare color="#50ABF1" />
                </a>
              </Link>
              <Link href={"/"}>
                <a>
                  <FaFacebookSquare color="#3A559F" />
                </a>
              </Link>
              <Link href={"/"}>
                <a>
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
              <h6>Diamond Developers</h6>
              <p>© Diamond Developers International Ltd. 2022</p>
            </div>
            <div className={styles.right}>
              <VscGlobe /> ENGLISH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
