import { Ourstory, Joinus, Othercities, HeadComponent } from "../../components";
import styles from "../../styles/about.module.scss";
const About = () => {
  return (
    <>
      <HeadComponent title={"TSC-About us"} />
      <div className={styles.app__about}>
        <Ourstory />
        <Joinus />
        <Othercities />
      </div>
    </>
  );
};

export default About;
