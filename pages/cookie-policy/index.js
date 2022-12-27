import React, { useEffect } from "react";
import styles from "../../styles/policies.module.scss";
const CookiePolicy = () => {
  useEffect(() => {
    const func = async (d, s, id) => {
      var js,
        tjs = d.getElementsByTagName(s)[0];
      //   if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://app.termly.io/embed-policy.min.js";
      await tjs.parentNode.insertBefore(js, tjs);
    };

    func(document, "script", "termly-jssdk");
  }, []);
  return (
    <div className={styles.policyparent}>
      <div
        name="termly-embed"
        data-id="b10504c2-84d4-4155-b0b5-49d937812b5f"
        data-type="iframe"></div>
    </div>
  );
};

export default CookiePolicy;
