import styles from "../../styles/newssection.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import { BiShare } from "react-icons/bi";
const News = () => {
  return (
    <div className={styles.textAlignCenter}>
      <Row className="mb-3">
      <Col className={styles.mt200}>
      <div className={styles.mainHeader}>
         <span className={styles.verticalAlignMiddle}>
       
         <Image
            src="/Images/Book.jpg"
            height={23}
            width={30}
            alt="The sustainable city image"
          />
          
         </span>
            <span className={styles.ml14}>5 min. Read</span>
         </div>
      </Col>
    </Row>   
     <Row>
      <Col>
        <h6 className={styles.secondheading}>MUSCAT | OMAN</h6>    
        <div className={styles.hero_text_center}>
            <h2 className={styles.fontWeight8}>The Sustainable City - Yiti Signs Escrow </h2>
            <h2 className={styles.fontWeight8}>Agreement with Sohar Islamic </h2>
         </div>
         <div className={styles.mt22}>
            <span className={styles.datestyling}>29th July, 2022</span>
         </div>
         </Col>
     </Row>       
     <Row>
       <Col> 
       <div className={styles.newssectionpage_shape_hex}>
          <Image
            src={"/Svg/Polygon2.svg"}
            alt="The Sustainable Villas Yiti"
            width={"250px"}
            height={"250px"}
          />
        </div>
        <div className={styles.newssectionpage_shape_hex_right}>
          <Image
            src={"/Svg/Polygon2.svg"}
            alt="The Sustainable Villas Yiti"
            width={"250px"}
            height={"250px"}
          />
        </div>
        <div className={styles.newssection_newssectionpage_shape_hex_bottom}>
          <Image
            src={"/Svg/Polygon.svg"}
            alt="The Sustainable Villas Yiti"
            width={"250px"}
            height={"250px"}
          />
        </div>
         <Image
            src="/Images/bg-news.jpg"
            height={483}
            width={1200}
            objectFit="none"
            borderRadius="10px"
            alt="The sustainable city image"
          />       
      </Col>
    </Row>
    <div className={styles.hero_newspagesection}>
      <div className={styles.newspage_container}>
        <div className={styles.hero_mainnews_box}>
          {/* main box */}
          <div className={styles.hero_box}>
            <div>
              <div className={styles.newspage_heading}>
                <h6>
                  Britain to open up, Ramadan begins. It feels like
                  perfect timing, with Russia cheif army scrubbling over the
                  issue.
                </h6>
                <h6 className={styles.secondary_h1}>
                Thus, when using the definite article, the speaker assumes the listener knows the identity of the noun’s referent (because it is obvious, because it is common knowledge, or because it was mentioned in the same sentence or an earlier sentence). Use of an indefinite article implies that the speaker assumes the listener does not have to be told the identity of the referent. Use of an indefinite article implies that the speaker assumes the listener does not have to be told the identity of the referent.
                </h6>
                <h6 className={styles.secondary_h1}>
                Thus, when using the definite article, the speaker assumes the listener knows the identity of the noun’s referent (because it is obvious, because it is common knowledge, or because it was mentioned in the same sentence or an earlier sentence). Use of an indefinite article implies that the speaker assumes the listener does not have to be told the identity of the referent. Use of an indefinite article implies that the speaker assumes the listener does not have to be told the identity of the referent.
                </h6>
                <h6 className={styles.hero_newspageadjustment}>
                  Calculating earnings in the Partner Program 
                </h6>
                <h6 className={styles.secondary_h1}>
                Thus, when using the definite article, the speaker assumes the listener knows the identity of the noun’s referent (because it is obvious, because it is common knowledge, or because it was mentioned in the same sentence or an earlier sentence). Use of an indefinite article implies that the speaker assumes the listener does not have to be told the identity of the referent. Use of an indefinite article implies that the speaker assumes the listener does not have to be told the identity of the referent.
                </h6>
                <h6 className={styles.secondary_h1}>
                Thus, when using the definite article, the speaker assumes the listener knows the identity of the noun’s referent (because it is obvious, because it is common knowledge, or because it was mentioned in the same sentence or an earlier sentence). Use of an indefinite article implies that the speaker assumes the listener does not have to be told the identity of the referent. Use of an indefinite article implies that the speaker assumes the listener does not have to be told the identity of the referent.
                </h6>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className={styles.herodashed}></div>
            </div>
          </div>
          <div className={styles.hero_secondry_box}>
            <div className={styles.secondrynews_box}>
              <h6 >
                Introduction
              </h6>
              <h6 className={styles.secondary_h1}>
                News
              </h6>
              <h6 className={styles.secondary_h1}>
                Democracy
              </h6>
              <h6 className={styles.secondary_h1}>
                Your Highness Speech
              </h6>
              <h6 className={styles.secondary_h1}>
                Omran Group
              </h6>
              <button className={styles.btn_blue}>
               
              <BiShare size={16} />
              Share
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    </div>

  )
};

export default News;
