import { Ourstory, Joinus, Othercities, HeadComponent } from "../../components";
import styles from "../../styles/about.module.scss";
import useLanguage from "../../utils/useLanguage";
const About = () => {
  const lan = useLanguage();
  return (
    <>
      <HeadComponent
        title={lan.seo.aboutus.title}
        description={lan.seo.aboutus.description}
        og={lan.seo.aboutus.og}
        keyword={lan.seo.aboutus.keyword}
        canonicaltag={lan.seo.aboutus.canonicaltag}
        language={lan.language === 1 ? "en" : "ar"}>
        <link
          rel="alternate"
          href={"https://www.thesustainablecity-yiti.com/ar/about/"}
          hrefLang={"ar"}
        />
        <link
          rel="alternate"
          href={"https://www.thesustainablecity-yiti.com/about/"}
          hrefLang={"en"}
        />
        <link
          rel="alternate"
          href="https://www.thesustainablecity-yiti.com/about/"
          hreflang="x-default"
        />
      </HeadComponent>
      <div className={styles.app__about}>
        <Ourstory />
        <Joinus />
        <Othercities />
      </div>
    </>
  );
};

export default About;
