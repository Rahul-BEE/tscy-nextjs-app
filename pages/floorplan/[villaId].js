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
import { useEffect, useState } from "react";
const Villa = () => {
  const lan = useLanguage();
  const router = useRouter();
  const { villaId } = router.query;
  const [villa, setVilla] = useState(villaId);
  const data = lan.villaplansection.villas.find(
    (villa) => villa.slug === villaId
  );

  useEffect(() => {
    if (router) {
      setVilla(router.query.villaId);
    }
  }, [router]);
  return (
    <>
      {villa && (
        <HeadComponent
          title={lan.seo[villaId].title}
          description={lan.seo[villaId].description}
          og={lan.seo[villaId].og}
          keyword={lan.seo[villaId].keyword}
          canonicaltag={lan.seo[villaId].canonicaltag}
          language={lan.language === 1 ? "en" : "ar"}>
          <link
            rel="alternate"
            href={`https://www.wthesustainablecity-yiti.com/ar/floorplan/${villaId}`}
            hrefLang={"ar"}
          />
          <link
            rel="alternate"
            href={`https://www.thesustainablecity-yiti.com/floorplan/${villaId}`}
            hrefLang={"en"}
          />
          <link
            rel="alternate"
            href={`https://www.thesustainablecity-yiti.com/floorplan/${villaId}`}
            hrefLang="x-default"
          />
        </HeadComponent>
      )}

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
