import { InteriorFeatures, OtherVillas, PrimeLocation } from "../../components";
import Section1 from "../../components/Villapage/Section1";
import CardSection from "../../components/Floorplan/CardsSection";
import LocationFYV from "../../components/Floorplan/Location";
import Plans from "../../components/Villapage/Plans";

const Villa = () => {
  return (
    <div>
      <Section1/>
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
