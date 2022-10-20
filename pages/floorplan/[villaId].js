import { InteriorFeatures, OtherVillas, PrimeLocation } from "../../components";
import Section1 from "../../components/Villapage/Section1";
import CardSection from "../../components/Floorplan/CardsSection";
import LocationFYV from "../../components/Floorplan/Location";
import Plans from "../../components/Villapage/Plans";
import styles from "../../styles/villapage.module.scss";
const Villa = () => {
  return (
    <div className={styles.villapagemain}>
      <Section1 />
      <Plans />
      <CardSection page={true} />
      <InteriorFeatures />
      <PrimeLocation />
      <OtherVillas />
      <LocationFYV />
    </div>
  );
};

export default Villa;
