import english from "./english";
import arabic from "./arabic";
import { useRouter } from "next/router";

const useLanguage = () => {
  const router = useRouter();
  const { locale } = router;
  const lan = locale === "ar" ? arabic : english;


  return lan;
};

export default useLanguage;
