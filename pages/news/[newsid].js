import styles from "../../styles/newssection.module.scss";
import Image from "next/image";
import { BiShare } from "react-icons/bi";
import Polygon from "../../public/Svg/Polygonorg.svg";
import useLanguage from "../../utils/useLanguage";
import Newssection from "../../components/Homepage/Newssection";
import { useRouter } from "next/router";
import { HeadComponent } from "../../components";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import FacebookIcon from "../../public/Svg/facebook.svg";
import TwitterIcon from "../../public/Svg/twitter.svg";
import LinkedinIcon from "../../public/Svg/linkedin.svg";
import WhatsappIcon from "../../public/Svg/whatsapp.svg";
const News = () => {
  const lan = useLanguage();
  const router = useRouter();
  const { newsid } = router.query;
  const data = lan.newssection.post.find((villa) => villa.slug === newsid);
  const canonicaltag = lan.seo.newsdetails.canonicaltag + newsid;

  return (
    <>
      <HeadComponent
        title={`News Detail | The Sustainable City - Yiti`}
        description={lan.seo.newspage.description}
        og={lan.seo.newspage.og}
        keyword={lan.seo.newspage.keyword}
        canonicaltag={lan.seo.newsdetails.canonicaltag + newsid}
        language={lan.language === 1 ? "en" : "ar"}>
        <link
          rel="alternate"
          href={`https://www.thesustainablecity-yiti.com/ar/news/${newsid}`}
          hrefLang={"ar"}
        />
        <link
          rel="alternate"
          href={`https://www.thesustainablecity-yiti.com/news/${newsid}`}
          hrefLang={"en"}
        />
        <link
          rel="alternate"
          href={`https://www.thesustainablecity-yiti.com/news/${newsid}`}
          hreflang="x-default"
        />
      </HeadComponent>
      {data && (
        <div>
          <div className={styles.newspage_container}>
            <div className="mb-3">
              <div className={styles.mt200}>
                <div>
                  {data && (
                    <div>
                      <h6 className={styles.secondheading}>
                        {data.city} | {data.country}
                      </h6>
                      <div className={styles.hero_text_center1}>
                        {data.title.map((e, index) => (
                          <h1 className={styles.fontWeight8} key={index}>
                            {e}
                          </h1>
                        ))}
                      </div>
                      <div className={styles.mt22}>
                        <span className={styles.datestyling}>{data.date}</span>
                        <div className={styles.centeraligned}>
                          <div className={styles.network}>
                            <FacebookShareButton
                              url={`https://www.thesustainablecity-yiti.com/news/${data.slug}`}
                              quote={data.title}>
                              <FacebookIcon />
                            </FacebookShareButton>
                          </div>
                          <div className={styles.network}>
                            <LinkedinShareButton
                              url={`https://www.thesustainablecity-yiti.com/news/${data.slug}`}
                              title={data.title}
                              windowWidth={750}
                              windowHeight={600}>
                              <LinkedinIcon />
                            </LinkedinShareButton>
                          </div>
                          <div className={styles.network}>
                            <WhatsappShareButton
                              url={`https://www.thesustainablecity-yiti.com/news/${data.slug}`}
                              title={data.title}
                              separator=":: ">
                              <WhatsappIcon />
                            </WhatsappShareButton>
                          </div>
                          <div className={styles.network}>
                            <TwitterShareButton
                              title={data.title}
                              url={`https://www.thesustainablecity-yiti.com/news/${data.slug}`}>
                              <TwitterIcon />
                            </TwitterShareButton>
                          </div>

                          {/* <button className={styles.btn_blue}>
                          <BiShare
                            size={16}
                            style={{ transform: "rotateY(180deg)" }}
                          />
                          {lan.commontext.share}
                        </button> */}
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
                          placeholder="blur"
                          blurDataURL="/Images/blur.png"
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
                              <h6 className={styles.source}>
                                {lan.commontext.source}:{" "}
                                <a
                                  className={styles.sourcehref}
                                  href={data.source}
                                  target="_blank"
                                  rel="noreferrer">
                                  {data.source}
                                </a>
                              </h6>
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
      )}
    </>
  );
};

export default News;
