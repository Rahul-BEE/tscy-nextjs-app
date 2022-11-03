import { HeadComponent, Registration, Visitus } from "../../components";
import styles from "../../styles/contact.module.scss";
import useLanguage from "../../utils/useLanguage";
import Image from "next/image";
const Contact = () => {
  const lan = useLanguage();
  return (
    <>
      <HeadComponent
        title={lan.seo.contactus.title}
        description={lan.seo.contactus.description}
        og={lan.seo.contactus.og}
        keyword={lan.seo.contactus.keyword}
        canonicaltag={lan.seo.contactus.canonicaltag}
      />
      <div className={styles.contact}>
        <Registration />
        <Visitus />
        <div className={styles.polygon}>
          <Image
            width={500}
            height={526}
            src={"/Images/contact/contactpoly.png"}
            layout="responsive"
            priority
            quality={100}
            alt="Sustainable City diamond"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
