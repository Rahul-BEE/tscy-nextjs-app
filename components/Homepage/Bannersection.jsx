import Image from "next/image";
import styles from "../../styles/home.module.scss";

const Bannersection = () => {
  return (
    <div className={styles.app__bannerSection}>
      <Image
        src="/Images/map-pic.png"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 50%"
        quality={"100"}
      />
      <div className={styles.app__bannerSectionSubtraction}>
        <img src={"/Svg/Subtract.svg"} />
      </div>
    </div>
  );
};

export default Bannersection;

export async function getStaticProps() {}
