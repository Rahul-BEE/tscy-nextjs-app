import { useState } from "react";
import styles from "../../styles/villapage.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import useLanguage from "../../utils/useLanguage";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsArrowDownCircle } from "react-icons/bs";
const Section1 = () => {
  const lan = useLanguage();
  const router = useRouter();
  const { villaId } = router.query;
  const data = lan.villaplansection.villas.find(
    (villa) => villa.slug === villaId
  );
  return (
    <div className={styles.app__villasection1planmain}>
            <div className={styles.poly1}>
                <Image 
                    
                    src="/Images/villapoly2.png"
                    width={300}
                    height={300}
                    />
            </div>
            <div className={styles.poly2}>
                <Image 
                    
                    src="/Images/villapoly1.png"
                    width={200}
                    height={250}
                    />
            </div>
            {data && ( 
            <div>  
                <div className={styles.floorplanHeading}>
                    <p style={{marginBottom:"0rem"}}>{data.bedrooms}  {lan.commontext.bedroom}</p>
                    <p>{data.type}</p>
                </div>
                <div className={styles.floorplansubHeading}>
                    <p>{data.description}</p>
                </div>
                <div className={styles.downloadcomparison}>     
                    <p><motion.button
                            whileHover={{
                                scale: 1.05,
                            }}>
                        {lan.commontext.registerinterest}
                        </motion.button>
                        {lan.commontext.download} {lan.commontext.brochure}
                        <BsArrowDownCircle />
                    </p>
                </div>
                <Image className={styles.bgimg}
                src={data.mainImg}
                width={476}
                height={200}
                layout={"responsive"}
                />
            </div>
            )}
            
    </div>   
  );
};

export default Section1;
