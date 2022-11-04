import {
  HeadComponent,
  InteriorFeatures,
  OtherVillas,
  PrimeLocation,
} from "../../components";
import Section1 from "../../components/Villapage/Section1";
import CardSection from "../../components/Floorplan/CardsSection";
import LocationFYV from "../../components/Floorplan/Location";
import Plans from "../../components/Villapage/Plans";
import styles from "../../styles/villapage.module.scss";
import useLanguage from "../../utils/useLanguage";
import { useRouter } from "next/router";
const Villa = () => {
  const lan = useLanguage();
  const router = useRouter();
  const { villaId } = router.query;
  // const data = lan.villaplansection.villas.find(
  //   (villa) => villa.slug === villaId
  // );

  const canonicaltag = lan.seo.villapage.canonicaltag + villaId;

  return (
    <>
      <HeadComponent
        title={`${lan.seo.villapage.title}| ${villaId}`}
        description={lan.seo.villapage.description}
        og={lan.seo.villapage.og}
        keyword={lan.seo.villapage.keyword}
        canonicaltag={canonicaltag}
        language={lan.language === 1 ? "en" : "ar"}
      />
      <div className={styles.villapagemain}>
        <Section1 />
        <Plans />
        <CardSection page={true} />
        <InteriorFeatures />
        <PrimeLocation />
        <OtherVillas />
        <LocationFYV />
      </div>
    </>
  );
};

export default Villa;
