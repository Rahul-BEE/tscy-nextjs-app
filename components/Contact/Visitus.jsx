import Image from "next/image";
import styles from "../../styles/contact.module.scss";
import useLanguage from "../../utils/useLanguage";
import { motion } from "framer-motion";
import Link from "next/link";
const Visitus = () => {
  const lan = useLanguage();
  return (
    <div className={styles.visitus} id="visitus">
      <div className="headingRow">
        <p
          className="sectionmainHeading"
          style={{
            width: "100%",
            margin: 0,
            padding: 0,
          }}>
          {lan.contact.visitus.title}
        </p>
      </div>
      <div className={`sectionmaindescription`}>
        <p>{lan.contact.visitus.description}</p>
      </div>
      <div className={styles.contactmapcontainer}>
        <div className={styles.contactimgcontainer}>
          <Image
            src={"/Images/contact/contactmap.png"}
            priority
            layout="fill"
            objectFit="cover"
            quality={100}
            className={styles.imgdesk}
            placeholder="blur"
            blurDataURL="/Images/blur.png"
            alt="Sustainable City Yiti"
          />
          <div className={styles.getDirectionRow}>
            <div className={styles.getdirelement}>
              {lan.contact.visitus.location}
              <Link href={"https://goo.gl/maps/pztjf2ZTzSj9PAoV6"} passHref>
                <motion.a
                  target={"_blank"}
                  whileHover={{
                    scale: 1.01,
                  }}>
                  {lan.commontext.getdirection}
                </motion.a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visitus;
