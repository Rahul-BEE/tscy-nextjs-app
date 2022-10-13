import { Registration, Visitus } from "../../components";
import styles from "../../styles/contact.module.scss";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <Registration />
      <Visitus />
    </div>
  );
};

export default Contact;
