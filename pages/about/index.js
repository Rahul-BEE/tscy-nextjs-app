import { Ourstory, Joinus, Othercities } from "../../components";
import styles from "../../styles/about.module.scss";
const About = () => {
  return (
    <div className={styles.app__about}>
      <Ourstory />
      <Joinus />
      <Othercities />
    </div>
  );
};

export default About;
