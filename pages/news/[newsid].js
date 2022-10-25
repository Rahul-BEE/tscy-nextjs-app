import styles from "../../styles/newssection.module.scss";
import Image from "next/image";
import { BiShare } from "react-icons/bi";
import Polygon from "../../public/Svg/Polygonorg.svg";
import useLanguage from "../../utils/useLanguage";
import Newssection from "../../components/Homepage/Newssection";
import { useRouter } from "next/router";
import { HeadComponent } from "../../components";
const News = () => {
  const lan = useLanguage();
  const router = useRouter();
  const { newsid } = router.query;
  const data = lan.newssection.post.find((villa) => villa.slug === newsid);
  return (
    <>
      <HeadComponent title={"TSC-Newsdetail"} />
      <div>
        <div className={styles.newspage_container}>
          <div className="mb-3">
            <div className={styles.mt200}>
              <div>
                <div className={styles.mainHeader}>
                  {/* <span className={styles.verticalAlignMiddle}>
       
         <Image
            src="/Images/Book.jpg"
            height={23}
            width={30}
            alt="The sustainable city image"
          />
          
         </span> */}
                  {/* <span className={styles.ml14}>5 min. Read</span>    */}
                </div>
                {data && (
                  <div>
                    <h6 className={styles.secondheading}>
                      {data.city} | {data.country}
                    </h6>
                    <div className={styles.hero_text_center1}>
                      {data.title.map((e, index) => (
                        <h2 className={styles.fontWeight8} key={index}>
                          {e}
                        </h2>
                      ))}
                    </div>
                    <div className={styles.mt22}>
                      <span className={styles.datestyling}>{data.date}</span>
                      <div className={styles.centeraligned}>
                        <button className={styles.btn_blue}>
                          <BiShare
                            size={16}
                            style={{ transform: "rotateY(180deg)" }}
                          />
                          Share
                        </button>
                      </div>
                    </div>

                    <div className={styles.Poly1}>
                      <Polygon />
                    </div>
                    <div className={styles.Poly2}>
                      <Polygon />
                    </div>
                    <div className={styles.Poly3}>
                      <Polygon />
                    </div>
                    <div className={styles.Poly4}>
                      <Polygon />
                    </div>
                    <div className={styles.Poly5}>
                      <Polygon />
                    </div>
                    <div className={styles.Poly6}>
                      <Polygon />
                    </div>
                    <div className={styles.headerimg}>
                      <Image
                        src={data.image}
                        layout="responsive"
                        width={1300}
                        height={400}
                        className={styles.headerimg}
                        alt="Sustainable City Yiti"
                      />
                    </div>
                    <div className={styles.hero_newspagesection}>
                      <div className={styles.hero_mainnews_box}>
                        {/* main box */}
                        <div className={styles.hero_box1}>
                          <div className={styles.newspage_heading}>
                            <h6>{data.heading}</h6>
                            {data.discription.map((e, index) => (
                              <h6 className={styles.secondary_h1} key={index}>
                                {e}
                              </h6>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* <div>
            <div>
              <div className={styles.herodashed}></div>
            </div>
          </div> */}
                {/* <div className={styles.hero_secondry_box1}>
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
             
            </div>
          </div> */}
              </div>
            </div>
          </div>
        </div>
        <Newssection pagename={"NewsDetailPage"} />
      </div>
    </>
  );
};

export default News;
