import { HeadComponent, Registration, Visitus } from "../../components";
import styles from "../../styles/contact.module.scss";
const Contact = () => {
  return (
    <>
      <HeadComponent title={"TSC-Contact Us"} />
      <div className={styles.contact}>
        <Registration />
        <Visitus />
      </div>
    </>
  );
};

export default Contact;
