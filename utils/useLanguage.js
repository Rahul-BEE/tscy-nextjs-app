import { useEffect } from "react";
import { english, arabic } from "../utils/data";
import { useRouter } from "next/router";

const useLanguage = (val) => {
  const router = useRouter();
  const { locale } = router;
  const lan = locale === "ar" ? arabic : english;
  useEffect(() => {
    if (locale === "ar") {
      document.querySelector("body").classList.add("ar");
    } else {
      document.querySelector("body").classList.add("en");
    }
  }, []);

  return lan;
};

export default useLanguage;
