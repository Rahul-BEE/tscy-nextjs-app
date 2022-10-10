import { useState } from "react";
import styles from "../../styles/villapage.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import useLanguage from "../../utils/useLanguage";
import Image from "next/image";
import { BsArrowDownCircle } from "react-icons/bs";
const Section1 = () => {
  const lan = useLanguage();

  return (
    <div className={styles.app__villasection1planmain}>
         <Image 
              src="/Images/villapoly2.png"
              width={300}
              height={300}
       
            />
                 <Image 
              src="/Images/villapoly1.png"
              width={250}
              height={300}
       
            />
      <div className={styles.floorplanHeading}>
        <p style={{marginBottom:"0rem"}}>Let’s find a home</p>
        <p>Courtyard Villa</p>
      </div>
      <div className={styles.floorplansubHeading}>
        <p>Our three-bedroom villas are spacious and stylishly contemporary. 
            This functional layout takes an enlightened approach to the ground floor with ample 
            kitchen space adjacent to the maid’s quarters accompanied by a half bathroom separating 
            the spacious living room area. Upstairs there are three en-suite bedrooms with plenty of 
            room for study, sleep, and storage. The master bedroom, complete with an extensive wardrobe area, 
            lavishly accommodated bathroom, and balcony access overlooking the meticulously groomed courtyard, 
            provides all of the necessary elements for tranquil and comfortable living.</p>
      </div>
      <div className={styles.downloadcomparison}>
    
                
        <p>
        <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}>
                  Register Interest
                </motion.button>
         Download Brochure
          <BsArrowDownCircle />
        </p>
      </div>
      <Image className={styles.bgimg}
              src="/Images/villas/3bcv/3bcv.png"
              width={476}
              height={222}
              layout={"responsive"}
            />
         
    </div>
  );
};

export default Section1;
