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
      />
      <div className={styles.app__about}>
        <Ourstory />
        <Joinus />
        <Othercities />
      </div>
    </>
  );
};

export default About;
