import english from "./english";
import arabic from "./arabic";
import { useRouter } from "next/router";

const useLanguage = () => {
  const router = useRouter();
  const { locale } = router;
  const lan = locale === "ar" ? arabic : english;

  if (typeof window !== "undefined") {
    if (locale === "ar") {
      document.body.classList.remove("en");
      document.body.classList.add("ar");
    } else {
      document.body.classList.remove("ar");
      document.body.classList.add("en");
    }
  }

  return lan;
};

export default useLanguage;
