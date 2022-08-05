import { useEffect, useState } from "react";
import { english, arabic } from "../utils/data";

const useLangage = () => {
  const [lan, setLan] = useState(english);

  useEffect(() => {
    const datachange = JSON.parse(localStorage.getItem("language"));
    if (datachange === "ar") {
      setLan(arabic);
      document.querySelector("body").classList.add("ar");
    } else {
      setLan(english);
      document.querySelector("body").classList.add("en");
    }
  }, []);

  return lan;
};

export default useLangage;
