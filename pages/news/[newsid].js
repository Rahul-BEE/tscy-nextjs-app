import styles from "../../styles/newssection.module.scss";
import Image from "next/image";
import { BiShare } from "react-icons/bi";
import Polygon from "../../public/Svg/Polygonorg.svg";
import useLanguage from "../../utils/useLanguage";
import Newssection from "../../components/Homepage/Newssection";
import { useRouter } from "next/router";
import english from "../../utils/english";
import arabic from "../../utils/arabic";
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
import { useEffect, useState } from "react";
const News = (props) => {
  const lan = useLanguage();
  const data = props.data;
  return (
    <>
      <HeadComponent
        title={props.seo.title}
        description={props.seo.description}
        og={props.seo.og}
        keyword={props.seo.keyword}
        canonicaltag={props.seo.canonicaltag}
        language={props.lang === 1 ? "en" : "ar"}>
        <link
          rel="alternate"
          href={`https://www.thesustainablecity-yiti.com/ar/news/${props.newsid}`}
          hrefLang={"ar"}
        />
        <link
          rel="alternate"
          href={`https://www.thesustainablecity-yiti.com/news/${props.newsid}`}
          hrefLang={"en"}
        />
        <link
          rel="alternate"
          href={`https://www.thesustainablecity-yiti.com/news/${props.newsid}`}
          hrefLang="x-default"
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
export async function getStaticPaths() {
  let path = [];

  english.newssection.post.map((item) => {
    path.push({
      params: {
        newsid: item.slug,
      },
    });
    path.push({
      params: {
        newsid: item.slug,
      },
      locale: "ar",
    });
  });

  return {
    paths: path,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params, locale } = context;
  const lan = locale === "ar" ? arabic : english;
  const seo = lan.seo.newsdetails[params.newsid];
  const data = lan.newssection.post.find((item) => item.slug === params.newsid);
  return {
    props: {
      data: data,
      seo: seo,
      lang: lan.language,
      newsid: params.newsid,
    },
  };
}
