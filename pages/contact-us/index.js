import { HeadComponent, Registration, Visitus } from "../../components";
import styles from "../../styles/contact.module.scss";
import useLanguage from "../../utils/useLanguage";
const Contact = () => {
  const lan = useLanguage();
  return (
    <>
      <HeadComponent
        title={lan.seo.contactus.title}
        description={lan.seo.contactus.description}
        og={lan.seo.contactus.og}
      />
      <div className={styles.contact}>
        <Registration />
        <Visitus />
      </div>
    </>
  );
};

export default Contact;
