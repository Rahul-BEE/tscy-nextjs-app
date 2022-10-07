import { InteriorFeatures, OtherVillas, PrimeLocation } from "../../components";
import CardSection from "../../components/Floorplan/CardsSection";
import LocationFYV from "../../components/Floorplan/Location";
import Plans from "../../components/Villapage/Plans";

const Villa = () => {
  return (
    <div>
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
