import {
  HeadComponent,
  InteriorFeatures,
  OtherVillas,
  PrimeLocation,
  RegisterModal,
} from "../../components";
import english from "../../utils/english";
import arabic from "../../utils/arabic";
import Section1 from "../../components/Villapage/Section1";
import CardSection from "../../components/Floorplan/CardsSection";
import LocationFYV from "../../components/Floorplan/Location";
import Plans from "../../components/Villapage/Plans";
import styles from "../../styles/villapage.module.scss";
import { useState } from "react";
const Villa = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <HeadComponent
        title={props.seo.title}
        description={props.seo.description}
        og={props.seo.og}
        keyword={props.seo.keyword}
        canonicaltag={props.seo.canonicaltag}
        language={props.lang === 1 ? "en" : "ar"}>
        <link
          rel="alternate"
          href={`https://www.wthesustainablecity-yiti.com/ar/floorplan/${props.villaId}`}
          hrefLang={"ar"}
        />
        <link
          rel="alternate"
          href={`https://www.thesustainablecity-yiti.com/floorplan/${props.villaId}`}
          hrefLang={"en"}
        />
        <link
          rel="alternate"
          href={`https://www.thesustainablecity-yiti.com/floorplan/${props.villaId}`}
          hrefLang="x-default"
        />
      </HeadComponent>

      <div className={styles.villapagemain}>
        <RegisterModal show={showModal} setshowmodal={setShowModal} />
        <Section1 data={props.data} setShowModal={setShowModal} />
        <Plans data={props.data} />
        <CardSection page={true} />
        <InteriorFeatures data={props.data} />
        <PrimeLocation data={props.data} />
        <OtherVillas data={props.data} />
        <LocationFYV data={props.data} />
      </div>
    </>
  );
};

export default Villa;

export async function getStaticPaths() {
  let path = [];
  const villas = [
    "courtyard-villa-3bedroom",
    "courtyard-villa-4bedroom",
    "garden-villa-4bedroom",
  ];
  for (const villa of villas) {
    path.push({
      params: {
        villaId: villa,
      },
    });
  }
  for (const villa of villas) {
    path.push({
      params: {
        villaId: villa,
      },
      locale: "ar",
    });
  }

  return {
    paths: path,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params, locale } = context;
  const lan = locale === "ar" ? arabic : english;
  const seo = lan.seo[params.villaId];
  const data = lan.villaplansection.villas.find(
    (villa) => villa.slug === params.villaId
  );
  return {
    props: {
      data: data,
      seo: seo,
      lang: lan.language,
      villaId: params.villaId,
    },
  };
}
