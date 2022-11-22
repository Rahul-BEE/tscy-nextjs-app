import { useState } from "react";
import styles from "../../styles/villapage.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import useLanguage from "../../utils/useLanguage";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsArrowDownCircle } from "react-icons/bs";
import Link from "next/link";
const Section1 = ({ data }) => {
  const lan = useLanguage();
  const router = useRouter();
  const { villaId } = router.query;

  return (
    <div className={styles.app__villasection1planmain}>
      <div className={styles.poly1}>
        <Image
          src="/Images/villapoly2.png"
          width={300}
          height={300}
          alt="Sustainable City Yiti Villa"
        />
      </div>
      <div className={styles.poly2}>
        <Image
          src="/Images/villapoly1.png"
          width={200}
          height={250}
          alt="Sustainable City Yiti Villa"
        />
      </div>
      {data && (
        <div>
          <div className={styles.floorplanHeading}>
            <h1 style={{ marginBottom: "0rem" }}>
              {data.bedrooms} {lan.commontext.bedroom}
            </h1>
            <h1>{data.type}</h1>
          </div>
          <div className={styles.floorplansubHeading}>
            <p>{data.description}</p>
          </div>
          <div className={styles.downloadcomparison}>
            <Link href={"/contact-us"} passHref>
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}>
                {lan.commontext.registerinterest}
              </motion.button>
            </Link>
            <Link
              href={
                "https://thesustainablecity-yiti.com/brochure/Yiti Brochure.pdf"
              }>
              <a target={"_blank"}>
                <p>
                  {lan.commontext.download} {lan.commontext.brochure}
                  <BsArrowDownCircle />
                </p>
              </a>
            </Link>
          </div>
          <div className={styles.section1villaimagecontainer}>
            <Image
              className={styles.bgimg}
              src={data.mainImg}
              width={476}
              height={200}
              layout="fill"
              quality={100}
              priority
              blurDataURL={data.blurImg}
              placeholder="blur"
              alt="Sustainable City Yiti Villa"
              // objectFit="contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Section1;
